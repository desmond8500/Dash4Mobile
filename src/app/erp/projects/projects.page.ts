import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonList } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetService } from 'src/app/services/erp/projet-service';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { ProjectCardComponent } from './project-card/project-card.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
  standalone: true,
  imports: [
    IonList,
    IonContent,
    CommonModule,
    FormsModule,
    HeaderComponent,
    ProjectCardComponent,
  ],
})
export class ProjectsPage implements OnInit {
  aroute = inject(ActivatedRoute);
  router = inject(Router);
  _projet = inject(ProjetService);
  projets: any;
  client_id: any;

  constructor() {}

  ngOnInit() {
    this.client_id = this.aroute.snapshot.paramMap.get('clientId');
    this.getProjets();

    if (!this.client_id) {
      this.router.navigate(['/clients']);
    }
  }

  getProjets() {
    this._projet.getProjects(this.client_id).subscribe({
      next: (data: any) => {
        this.projets = data;
      },
      error: (err) => {
        console.error('Error fetching projects:', err);
      },
    });
  }
}
