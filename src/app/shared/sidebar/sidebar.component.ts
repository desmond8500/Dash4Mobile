import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
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
  imports: [IonButtons,
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
  constructor() {
    addIcons({ close });
  }

  ngOnInit() {}
}
