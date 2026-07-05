import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonList, IonButton, IonSearchbar, IonRefresher, IonRefresherContent, IonIcon, IonBreadcrumb, IonBreadcrumbs } from '@ionic/angular/standalone';
import { ClientService } from 'src/app/services/erp/client-service';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { ClientCardComponent } from './client-card/client-card.component';
import { LoadingController } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { people} from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
  standalone: true,
  imports: [
    IonBreadcrumb,
    IonBreadcrumbs,
    IonIcon,
    IonButton,
    IonContent,
    CommonModule,
    FormsModule,
    HeaderComponent,
    ClientCardComponent,
    IonList,
    IonSearchbar,
    IonRefresher,
    IonRefresherContent,
    RouterLink,
  ],
})
export class ClientsPage implements OnInit {
  _client = inject(ClientService);
  clients: any;
  page = 1;
  lastPage = 1;
  search = '';

  constructor() {
    addIcons({ people });
  }

  menus = [
    { id: 1, name: 'Accueil', icon: 'home', route: '/home' },
    { id: 2, name: 'Clients', icon: 'people', route: '/clients' },
  ];

  loadingCtrl = inject(LoadingController);

  ngOnInit() {
    this.getClients();
  }

  reload(event: any) {
    this.getClients();
    event.target.complete();
  }

  async getClients() {
    const loading = await this.loadingCtrl.create({
      message: 'Recherche en cours...',
      spinner: 'crescent',
    });

    await loading.present();

    this._client.getClients(this.page, this.search).subscribe({
      next: (data: any) => {
        this.clients = data;
        console.log(data);

        this.lastPage = data.meta.last_page;
        loading.dismiss();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.lastPage) {
      this.page = page;
      this.getClients();
    }
  }

  // loadMore(event: any) {
  //   if (this.page < this.lastPage) {
  //     this.page++;
  //     this.getClients(event);
  //   } else {
  //     event.target.disabled = true; // stop scroll
  //   }
  // }
}
