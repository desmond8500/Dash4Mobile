import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonText, LoadingController, IonRefresher, IonRefresherContent, IonBreadcrumb, IonBreadcrumbs, IonIcon } from '@ionic/angular/standalone';
import { FavorisService } from '../services/erp/favoris-service';
import { HeaderComponent } from '../shared/header/header.component';
import { ClientCardComponent } from '../erp/clients/client-card/client-card.component';
import { ProjectCardComponent } from '../erp/projects/project-card/project-card.component';

import { addIcons } from 'ionicons';
import { heart, home } from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favoris-page',
  templateUrl: './favoris-page.page.html',
  styleUrls: ['./favoris-page.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonRefresher,
    IonContent,
    CommonModule,
    FormsModule,
    HeaderComponent,
    ClientCardComponent,
    ProjectCardComponent,
    IonText,
    IonRefresher,
    IonRefresherContent,
    IonBreadcrumb,
    IonBreadcrumbs,
    RouterLink,
    IonIcon,
  ],
})
export class FavorisPagePage implements OnInit {
  _favoris = inject(FavorisService);
  favoris: any;
  loadingCtrl = inject(LoadingController);

  menus = [
    { id: 1, name: 'Accueil', icon: 'home', route: '/home' },
    { id: 1, name: 'Favoris', icon: 'heart', route: '/favoris' },
  ];

  constructor() {
    addIcons({ heart, home });
  }

  ngOnInit() {
    this.getFavoris();
  }

  reload(event: any) {
    this.getFavoris();
    event.target.complete();
  }

  async getFavoris() {
    const loading = await this.loadingCtrl.create({
      message: 'Recherche en cours...',
      spinner: 'crescent',
    });

    await loading.present();

    this._favoris.getFavoris().subscribe({
      next: (data: any) => {
        this.favoris = data.data;
        loading.dismiss();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
