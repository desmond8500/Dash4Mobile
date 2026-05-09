import { Component, inject, Input, OnInit } from '@angular/core';
import { ProjetService } from 'src/app/services/erp/projet-service';
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-project-notes-card',
  templateUrl: './project-notes-card.component.html',
  styleUrls: ['./project-notes-card.component.scss'],
  standalone: true,
  imports: [MarkdownComponent ,IonAccordion, IonAccordionGroup, IonItem, IonLabel]
})
export class ProjectNotesCardComponent implements OnInit {
  @Input() projet_id: any;
  _projet = inject(ProjetService);
  notes: any;

  constructor() {  }

  ngOnInit() {
    console.log(this.projet_id);
    this.getNotes();
  }

  async getNotes() {
    this._projet.getNotes(this.projet_id).subscribe({
      next: (data: any) => {
        this.notes = data;
      },
      error: (err) => {
        console.error('Error fetching notes:', err);
      },
    });
  }
}
