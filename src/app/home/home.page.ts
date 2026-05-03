import { Component } from '@angular/core';
import {
  IonContent, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from '../shared/header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton,
    IonContent,
    HeaderComponent,
    RouterLink,
  ],
})
export class HomePage {
  constructor() {}
}
