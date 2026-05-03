import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonItem, IonThumbnail, IonLabel} from '@ionic/angular/standalone';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  imports: [IonItem, IonThumbnail, IonLabel, RouterLink]
})
export class ProjectCardComponent  implements OnInit {
  @Input() projet: any;

  constructor() { }

  ngOnInit() {}

}
