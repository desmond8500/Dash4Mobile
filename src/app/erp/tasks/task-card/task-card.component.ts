import { Component, inject, Input, OnInit, output, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonItem,
  IonLabel,
  IonCheckbox,
  IonItemSliding,
  IonItemOptions,
  IonItemOption, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trash, create,  information } from 'ionicons/icons';
import { MarkdownComponent } from 'ngx-markdown';
import { TaskService } from 'src/app/services/erp/task-service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
  imports: [
    IonItem,
    IonLabel,
    IonCheckbox,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonIcon,
    RouterLink,
    MarkdownComponent,
  ],
})
export class TaskCardComponent implements OnInit {
  @Input() task: any;
  event = output<string>();
  _task = inject(TaskService);

  constructor() {
    addIcons({ create, trash, information });
  }

  ngOnInit() {}

  updateTask() {
    this._task.updateTask(this.task).subscribe({
      next: (data: any) => {
        this.task = data.data;
      },
      error: (err) => {
        console.error('Error fetching task:', err);
      },
    });
  }

  deleteTask() {
    this._task.deleteTask(this.task.id).subscribe({
      next: (data: any) => {
        this.event.emit('reload')
      },
      error: (err) => {
        console.error('Error fetching task:', err);
      },
    });
  }

  terminate: boolean = false;
  toggle() {
    this.terminate = !this.terminate;
    console.log(this.terminate);
    this.task.statut_id = 4;
    this.updateTask();
  }
}
