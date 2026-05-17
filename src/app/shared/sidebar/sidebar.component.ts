import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuController } from '@ionic/angular';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar, IonFooter, IonButtons } from '@ionic/angular/standalone';
  import { IonIcon } from '@ionic/angular/standalone';
  import { addIcons } from 'ionicons';
  import { close } from 'ionicons/icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [
    IonButtons,
    IonFooter,
    IonButton,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuToggle,
    IonTitle,
    IonToolbar,
    IonFooter,
    IonIcon,
    RouterLink,
  ],
})
export class SidebarComponent implements OnInit {

  menus = [
    {
      id: 1,
      name: 'Authentification',
      list: [
        { id: 1, name: 'Connexion', route: '/login' },
        { id: 2, name: 'Dashboard', route: '/dashboard' },
      ],
    },
    {
      id: 2,
      name: 'ERP',
      list: [
        { id: 1, name: 'Clients', route: '/clients' },
        { id: 2, name: 'Devis', route: '' },
        { id: 3, name: 'Finances', route: '' },
        { id: 4, name: 'Journaux', route: '' },
        { id: 5, name: 'Forfaits', route: '' },
        { id: 6, name: 'Plannings', route: '' },
        { id: 7, name: 'Equipe', route: '' },
        { id: 8, name: 'Systèmes', route: '' },
      ],
    },
    {
      id: 3,
      name: 'Stock',
      list: [
        { id: 1, name: 'Articles', route: '/articles' },
        { id: 2, name: 'Marques', route: '/brands' },
        { id: 3, name: 'Fournisseurs', route: '/providers' },
      ],
    },
  ];

  constructor() {
    addIcons({ close });
  }

  ngOnInit() {}

}
