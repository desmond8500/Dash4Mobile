import { Component, Inject, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/erp/task-service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss'],
})
export class TasklistComponent  implements OnInit {
  @Input() projet_id: any
  _task = Inject(TaskService)
  taches: any

  constructor() { }

  ngOnInit() {}

  // getTasks(){
  //   this._task.getProjetTasks(this.projet_id).subscribe({
  //     next: (data: any) => {
  //       this.taches = data;
  //       console.log(data);

  //     },
  //     error: (err: any) => {
  //       console.error(err);
  //     },
  //   });
  // }

}
