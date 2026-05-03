import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { settingsOutline } from 'ionicons/icons';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonButtons,
  IonMenuButton,


 } from '@ionic/angular/standalone';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonButton,
    IonToolbar,
    IonButtons,
    IonTitle,
    RouterLink,
    IonMenuButton,
    IonHeader,
    IonIcon,
  ],
})
export class HeaderComponent implements OnInit {
  @Input() title: string = '';

  constructor() {
    addIcons({ settingsOutline });
  }

  ngOnInit() {}
}
