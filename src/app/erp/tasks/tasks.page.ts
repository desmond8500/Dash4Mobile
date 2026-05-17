import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonFooter,
  IonToolbar, IonRefresher,
  IonRefresherContent, IonIcon, IonFabButton,
  IonFab} from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/erp/task-service';
import { TaskCardComponent } from './task-card/task-card.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { MainService } from 'src/app/services/main-service';

import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
  standalone: true,
  imports: [IonFabButton, IonIcon,
    IonRefresher,
    HeaderComponent,
    TaskCardComponent,
    IonContent,
    CommonModule,
    FormsModule,
    IonFooter,
    IonToolbar,
    TaskFormComponent,
    IonRefresherContent,
    IonFab,
    IonFabButton,
  ],
})
export class TasksPage implements OnInit {
  back: any;
  aroute = inject(ActivatedRoute);
  projet_id: any;
  tasks: any = [];
  _task = inject(TaskService);
  _main = inject(MainService);

  constructor() {
    addIcons({ add });
  }

  ngOnInit() {
    this.projet_id = this.aroute.snapshot.paramMap.get('projet_id');
    this.getTasks();
    this.back = '/project/' + this.projet_id;
  }

  getTasks() {
    this._task.getProjetTasks(this.projet_id).subscribe({
      next: (data: any) => {
        this.tasks = data;
      },
      error: (err) => {
        console.error('Error fetching project:', err);
      },
    });
  }

  reload(event: any) {
    // Recharger les données
    this.getTasks();

    // Fin du refresh
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  store(form: any) {
    this._task.setProjetID(this.projet_id);

    this._task.storeForm();
    this.getTasks();
    this._main.toastShow("Tache ajoutée avec succès")
  }
}
