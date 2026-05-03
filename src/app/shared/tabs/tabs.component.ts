import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonTabs, IonTabButton, IonTabBar } from "@ionic/angular/standalone";
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  imports: [IonTabs, IonTabButton, IonTabBar, IonIcon, RouterLink],
})
export class TabsComponent  implements OnInit {
  tabs = [
    { icon: 'home', name: 'Accueil', route:'home' },
  ]
  constructor() {
    addIcons({ home });
   }

  ngOnInit() {}

}
