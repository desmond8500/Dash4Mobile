import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { ProjectNotesCardComponent } from '../projects/project-notes-card/project-notes-card.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
  standalone: true,
  imports: [IonButton,
    IonContent,
    CommonModule,
    FormsModule,
    ProjectNotesCardComponent,
    HeaderComponent,
  ],
})
export class NotesPage implements OnInit {
  back: any;
  aroute = inject(ActivatedRoute);
  projet_id: any;
  constructor() {}

  ngOnInit() {
    this.projet_id = this.aroute.snapshot.paramMap.get('projet_id');
    this.back = '/project/' + this.projet_id;
  }
}
