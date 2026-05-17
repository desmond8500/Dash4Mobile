import { Component, OnInit } from '@angular/core';
import { IonTabs, IonTabButton, IonTabBar } from "@ionic/angular/standalone";
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, people, hammer, cube } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  imports: [IonTabs, IonTabButton, IonTabBar, IonIcon],
})
export class TabsComponent  implements OnInit {
  tabs = [
    { icon: 'home', name: 'Accueil', route:'home' },
    { icon: 'people', name: 'Clients', route:'clients' },
    { icon: 'cube', name: 'Articles', route:'articles' },
    { icon: 'hammer', name: 'Galaxy', route:'galaxy' },
  ]
  constructor() {
    addIcons({ home, people, hammer, cube });
   }

  ngOnInit() {}

}
