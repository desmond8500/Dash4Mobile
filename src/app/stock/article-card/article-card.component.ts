import { CommonModule } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonItemOption, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonIcon, IonThumbnail } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { trash, create, information } from 'ionicons/icons';


@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
  imports:[
    IonItemSliding,
    IonItem,
    IonLabel,
    IonItemOption,
    IonItemOptions,
    IonIcon,
    IonThumbnail,
    RouterLink,
    CommonModule,
  ]
})
export class ArticleCardComponent  implements OnInit {
  article = input({
    id: "",
    image: "",
    designation: "",
    reference: "",
    price: "",
    description: "",

  })
  constructor() {
    addIcons({ create, trash, information });
   }

  ngOnInit() {}

}
