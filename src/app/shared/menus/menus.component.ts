import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { close } from 'ionicons/icons';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss'],
  imports: [IonIcon, RouterLink],
})
export class MenusComponent implements OnInit {
  menus = [
    { title: 'Caméras', icon: 'videocam', url: '/camera' },
    { title: 'Alarme', icon: 'alert', url: '/alarm' },
    { title: 'Accès', icon: 'key', url: '/access' },
    { title: 'Paramètres', icon: 'settings', url: '/settings' },
  ];

  constructor() {
    addIcons({ close });
  }

  ngOnInit() {}
}
