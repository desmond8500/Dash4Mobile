import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { ClientService } from 'src/app/services/erp/client-service';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { ClientCardComponent } from './client-card/client-card.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    HeaderComponent,
    ClientCardComponent
  ],
})
export class ClientsPage implements OnInit {
  _client = inject(ClientService);
  clients: any;

  constructor() {}

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this._client.getClients().subscribe((clients: any) => {
      this.clients = clients;
      console.log('clients', this.clients);
    });



  }
}
