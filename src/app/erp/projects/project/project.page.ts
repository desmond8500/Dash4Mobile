import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { ActivatedRoute, RouterLink,  } from '@angular/router';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjetService } from 'src/app/services/erp/projet-service';

@Component({
  selector: 'app-project',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
  standalone: true,
  imports: [IonButton,
    IonContent,
    CommonModule,
    FormsModule,
    HeaderComponent,
    ProjectCardComponent,
    IonButton,
    RouterLink,
  ]
})
export class ProjectPage implements OnInit {
  aroute = inject(ActivatedRoute);
  _projet = inject(ProjetService);
  projet_id: any;
  projet: any;
  back: any
  server: any

  menus: any

  constructor() {
    this.projet_id = this.aroute.snapshot.paramMap.get('projectId');
    // console.log(this.projet_id);

    this.menus = [
      {
        id: 1,
        name: 'Devis',
        icon: 'document',
        route: '/invoices/' + this.projet_id,
      },
      {
        id: 2,
        name: 'Notes',
        icon: 'document',
        route: '/notes/' + this.projet_id,
      },
      {
        id: 3,
        name: 'Taches',
        icon: 'chevron-down-circle',
        route: '/tasks/' + this.projet_id,
      },
      {
        id: 4,
        name: 'Journaux',
        icon: 'document',
        route: '/journaux/' + this.projet_id,
      },
      {
        id: 5,
        name: 'Contacts',
        icon: 'people',
        route: '/contacts/' + this.projet_id,
      },
      {
        id: 6,
        name: 'Batiments',
        icon: 'business',
        route: '/buildings/' + this.projet_id,
      },
    ];
   }

  ngOnInit() {
    this.projet_id = this.aroute.snapshot.paramMap.get('projectId');
    this.getProjet();
    this.getServer();
    this.back = "projets"+this.projet_id
  }

  getProjet() {
    this._projet.getProject(this.projet_id).subscribe({
      next: (data: any) => {
        this.projet = data.data;
        this.back = '/projects/' + this.projet?.client_id;
      },
      error: (err) => {
        console.error('Error fetching project:', err);
      },
    });
  }

  getServer(){
    this.server = this._projet.getServer()
  }

}
