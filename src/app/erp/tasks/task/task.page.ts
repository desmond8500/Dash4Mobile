import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonFooter, IonToolbar } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/erp/task-service';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonContent,
    HeaderComponent,
    CommonModule,
    FormsModule,
    MarkdownComponent,
    IonFooter,
    IonToolbar
  ],
})
export class TaskPage implements OnInit {
  back: any;
  aroute = inject(ActivatedRoute);
  _task = inject(TaskService);
  task: any;
  task_id: any;
  projet_id: any;

  constructor() {}

  ngOnInit() {
    this.task_id = this.aroute.snapshot.paramMap.get('task_id');
    this.getTask()
  }

  getTask() {
    this._task.getTask(this.task_id).subscribe({
      next: (data: any) => {
        this.task = data.data;
        this.back = '/tasks/' + data.data.projet_id;
      },
      error: (err) => {
        console.error('Error fetching task:', err);
      },
    });
  }
}
