import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonThumbnail, IonItem, IonLabel, IonAvatar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss'],
  imports: [IonAvatar,
    IonItem,
    IonThumbnail,
    IonLabel,
    RouterLink,
  ],
})
export class ClientCardComponent  implements OnInit {
  @Input() client: any;
  constructor() { }

  ngOnInit() {}

}
