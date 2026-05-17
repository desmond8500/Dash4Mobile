import { Component, input, OnInit, output } from '@angular/core';
import { IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  imports:[
    IonButton,
  ]
})
export class PaginationComponent  implements OnInit {
  page:any = input()
  lastPage:any = input()
  changePage:any = output()

  constructor() { }

  ngOnInit() {}

  nextPage(){
    // this.page.set(this.page+1)
    this.changePage.emit(this.page()+1)
  }
  previousPage(){
    // this.page.set(this.page-1)
    this.changePage.emit(this.page()-1)
  }

}
