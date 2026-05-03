import { Component, OnInit } from '@angular/core';
import {
  IonBreadcrumbs,
  IonBreadcrumb,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  imports: [
    IonBreadcrumbs,
    IonBreadcrumb
  ]
})
export class BreadcrumbsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
