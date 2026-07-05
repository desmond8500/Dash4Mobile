import { Component, effect, inject, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonBackButton, Platform } from '@ionic/angular/standalone';

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
import { Subscription } from 'rxjs';
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

  _main = inject(MainService);
  _route = inject(Router)
  network = this._main;
  private backButtonSub?: Subscription;

  constructor(private platform: Platform) {
    addIcons({ arrowBack });
  }

  ngOnInit() {
    this.backButtonSub = this.platform.backButton.subscribeWithPriority(
      10,
      () => {
        this._route.navigate([this.back])
      },
    );
  }
}
