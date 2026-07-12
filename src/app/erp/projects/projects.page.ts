import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonList, LoadingController, IonRefresher, IonSearchbar, IonRefresherContent, IonButton, IonIcon, IonFooter, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetService } from 'src/app/services/erp/projet-service';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { addIcons } from 'ionicons';
import {
  add,
} from 'ionicons/icons';
import { ProjectformComponent } from './projectform/projectform.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
  standalone: true,
  imports: [
    IonRefresher,
    IonRefresherContent,
    IonList,
    IonContent,
    CommonModule,
    FormsModule,
    HeaderComponent,
    ProjectCardComponent,
    IonSearchbar,
    ProjectformComponent
  ],
})
export class ProjectsPage implements OnInit {
  aroute = inject(ActivatedRoute);
  router = inject(Router);
  _projet = inject(ProjetService);
  projets: any;
  allProjets: any[] = [];
  client_id: any;
  search = '';

  loadingCtrl = inject(LoadingController);

  constructor() {
    addIcons({
      add,
    });
  }

  ngOnInit() {
    this.client_id = this.aroute.snapshot.paramMap.get('clientId');
    this.getProjets();

    if (!this.client_id) {
      this.router.navigate(['/clients']);
    }
  }

  reload(event: any) {
    this.getProjets();
    event.target.complete();
  }

  async getProjets() {
    const loading = await this.loadingCtrl.create({
      message: 'Recherche en cours...',
      spinner: 'crescent',
    });

    await loading.present();

    this._projet.getProjects(this.client_id).subscribe({
      next: (data: any) => {
        this.allProjets = data.data;
        this.projets = [...data.data];
        loading.dismiss();
      },
      error: (err) => {
        console.error('Error fetching projects:', err);
      },
    });
  }

  async filterProjets() {
    const search = this.search.toLowerCase().trim();

    this.projets = this.allProjets.filter((p: any) =>
      (p.name ?? '').toLowerCase().includes(search),
    );
  }

  store(event: any) {
    console.log("project event:", event);

    this._projet.storeForm();
  }

}
