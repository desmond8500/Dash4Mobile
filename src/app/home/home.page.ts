import { Component, inject } from '@angular/core';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from '../shared/header/header.component';
import { RouterLink } from '@angular/router';
import { FavorisService } from '../services/erp/favoris-service';

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
  _favoris = inject(FavorisService);
  favoris: any;

  ngOnInit() {
    this.getFavoris();
  }

  getFavoris() {
    this._favoris.getFavoris().subscribe({
      next: (data: any) => {
        this.favoris = data.data
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
