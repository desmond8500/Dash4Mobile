import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@Component({
  selector: 'app-galaxy',
  templateUrl: './galaxy.page.html',
  styleUrls: ['./galaxy.page.scss'],
  standalone: true,
  imports: [HeaderComponent, IonContent, CommonModule, FormsModule]
})
export class GalaxyPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
