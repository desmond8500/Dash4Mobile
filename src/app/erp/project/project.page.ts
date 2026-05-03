import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { ProjectCardComponent } from '../projects/project-card/project-card.component';
import { ProjetService } from 'src/app/services/erp/projet-service';
import { ProjectNotesCardComponent } from '../projects/project-notes-card/project-notes-card.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
  standalone: true,
  imports: [IonContent, ProjectNotesCardComponent ,CommonModule, FormsModule, HeaderComponent, ProjectCardComponent]
})
export class ProjectPage implements OnInit {
  aroute = inject(ActivatedRoute);
  _projet = inject(ProjetService);
  projet_id: any;
  projet: any;
  back: any

  constructor() { }

  ngOnInit() {
    this.projet_id = this.aroute.snapshot.paramMap.get('projectId');
    this.getProjet();
  }

  getProjet() {
    this._projet.getProject(this.projet_id).subscribe({
      next: (data: any) => {
        this.projet = data.data;
        this.back = '/projects/' + this.projet.client_id;
      },
      error: (err) => {
        console.error('Error fetching project:', err);
      },
    });
  }

}
