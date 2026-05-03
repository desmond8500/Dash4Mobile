import { Component, Input, OnInit } from '@angular/core';
import { IonThumbnail, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss'],
  imports: [
    IonItem,
    IonThumbnail,
    IonLabel
  ],
})
export class ClientCardComponent  implements OnInit {
  @Input() client: any;
  constructor() { }

  ngOnInit() {}

}
