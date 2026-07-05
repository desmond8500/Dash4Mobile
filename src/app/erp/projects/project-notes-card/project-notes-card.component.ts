import { Component, inject, Input, OnInit } from '@angular/core';
import { ProjetService } from 'src/app/services/erp/projet-service';
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  LoadingController,
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
  notes: any = [];
  loadingCtrl = inject(LoadingController);

  constructor() {  }

  ngOnInit() {
    console.log(this.projet_id);
    this.getNotes();
  }

  async getNotes() {
    const loading = await this.loadingCtrl.create({
      message: 'Recherche en cours...',
      spinner: 'crescent',
    });

    await loading.present();

    this._projet.getNotes(this.projet_id).subscribe({
      next: (data: any) => {
        this.notes = data;
        console.log(data);
        loading.dismiss();
      },
      error: (err) => {
        console.error('Error fetching notes:', err);
        loading.dismiss()
      },
    });
  }

  reload(event:any){
    this.getNotes()
  }
}
