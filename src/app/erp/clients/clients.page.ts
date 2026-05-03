import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonList, IonTabButton, IonButton } from '@ionic/angular/standalone';
import { ClientService } from 'src/app/services/erp/client-service';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { ClientCardComponent } from './client-card/client-card.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
  standalone: true,
  imports: [IonButton,
    IonContent,
    CommonModule,
    FormsModule,
    HeaderComponent,
    ClientCardComponent,
    IonList,
  ],
})
export class ClientsPage implements OnInit {
  _client = inject(ClientService);
  clients: any;
  page = 1;
  lastPage = 1;

  constructor() {}

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this._client.getClients(this.page).subscribe({
      next: (data: any) => {
        this.clients = data.data;
        this.lastPage = data.data.last_page;
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
