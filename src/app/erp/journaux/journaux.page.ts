import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { JournalService } from 'src/app/services/erp/journal-service';

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
  ],
})
export class JournauxPage implements OnInit {
  back: any;
  aroute = inject(ActivatedRoute);
  _journal = inject(JournalService);
  projet_id: any;

  constructor() {}

  ngOnInit() {
    this.projet_id = this.aroute.snapshot.paramMap.get('projet_id');
    this.back = '/project/' + this.projet_id;
    this.getJournaux();
  }

  getJournaux() {
    this._journal.getJournals(this.projet_id).subscribe((res: any) => {
      console.log(res);
    });
  }
}
