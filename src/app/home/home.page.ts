import { Component, inject } from '@angular/core';
import { IonContent, IonButton, IonBreadcrumb, IonBreadcrumbs, IonIcon } from '@ionic/angular/standalone';
import { HeaderComponent } from '../shared/header/header.component';
import { RouterLink } from '@angular/router';
import { FavorisService } from '../services/erp/favoris-service';

import { addIcons } from 'ionicons';
import {  home } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonIcon, IonButton,
    IonContent,
    HeaderComponent,
    RouterLink,
    IonBreadcrumb ,
    IonBreadcrumbs,
  ],
})
export class HomePage {
  _favoris = inject(FavorisService);
  favoris: any;
  menus = [
    { id: 1, name: "Accueil", icon:'home', route: '/home' }
  ]

  constructor(){
    addIcons({ home });
  }

  ngOnInit() {
    this.getFavoris();
  }

  getFavoris() {
    this._favoris.getFavoris().subscribe({
      next: (data: any) => {
        this.favoris = data.data
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
