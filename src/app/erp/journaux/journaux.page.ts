import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonTabButton } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { JournalService } from 'src/app/services/erp/journal-service';
import { JournalCardComponent } from './journal-card/journal-card.component';

@Component({
  selector: 'app-journaux',
  templateUrl: './journaux.page.html',
  styleUrls: ['./journaux.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    HeaderComponent,
    IonButton,
    JournalCardComponent,
  ],
})
export class JournauxPage implements OnInit {
  back: any;
  aroute = inject(ActivatedRoute);
  _journal = inject(JournalService);
  projet_id: any;
  journaux: any = [];
  page = 1;
  lastPage: number = 1;

  constructor() {}

  ngOnInit() {
    this.projet_id = this.aroute.snapshot.paramMap.get('projet_id');
    this.back = '/project/' + this.projet_id;
    this.getJournaux();
  }

  getJournaux() {
    this._journal.getJournals(this.projet_id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.journaux = res.data;
        this.lastPage = res.meta.last_page;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
