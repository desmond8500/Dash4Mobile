import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonBackButton } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonButtons,
  IonMenuButton,
  IonIcon,

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
  @Input() back: string = '/';

  constructor() {
    addIcons({ arrowBack });
  }

  ngOnInit() {}
}
