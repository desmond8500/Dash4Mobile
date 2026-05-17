import { Component, effect, inject, Input, OnInit } from '@angular/core';
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
import { MainService } from 'src/app/services/main-service';
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

  _main = inject(MainService)
  network = this._main

  constructor() {
    addIcons({ arrowBack });

    effect(() => {
      if (!this.network.isOnline()) {
        this._main.toastShow('Connexion Perdue')
      }
    });
  }

  ngOnInit() {
  }
}
