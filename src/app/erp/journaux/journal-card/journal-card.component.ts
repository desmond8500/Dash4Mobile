import { Component, input, OnInit } from '@angular/core';
import { IonItem, IonLabel, IonNote } from "@ionic/angular/standalone";

@Component({
  selector: 'app-journal-card',
  templateUrl: './journal-card.component.html',
  styleUrls: ['./journal-card.component.scss'],
  imports: [
    IonNote,
    IonLabel,
    IonItem
  ]
})
export class JournalCardComponent  implements OnInit {
  journal = input<any>();

  constructor() { }

  ngOnInit() {}

}
