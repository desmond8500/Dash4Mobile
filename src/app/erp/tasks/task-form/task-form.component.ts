import { Component, computed, effect, inject, Input, OnInit, output, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { IonButton, IonModal, IonToolbar, IonContent, IonInput, IonItem, IonTextarea, IonIcon, IonFooter } from '@ionic/angular/standalone';
import { TaskService } from 'src/app/services/erp/task-service';
import { addIcons } from 'ionicons';
import { addCircle } from 'ionicons/icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
  imports: [
    IonIcon,
    IonItem,
    IonContent,
    IonModal,
    IonToolbar,
    IonButton,
    ɵInternalFormsSharedModule,
    IonInput,
    IonTextarea,
    IonItem,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    IonIcon,
    IonFooter,
  ],
})
export class TaskFormComponent implements OnInit {
  @Input() type: any = 'add';
  @Input() task: any;

  event = output<any>();
  _task = inject(TaskService);
  fb = inject(FormBuilder);

  title: any;
  button: any;

  form = this.fb.group({
    projet_id: '',
    priority_id: 1,
    statut_id: 1,
    favoris: 0,
    name: 'Tache 6',
    description: 'Démo',
  });

  constructor() {
    addIcons({ addCircle });
  }

  ngOnInit() {
    if (this.type == 'add') {
      this.title = 'Ajouter une tache';
      this.button = 'Valider';
    } else if (this.type == 'edit') {
      this.title = 'Editer une tache';
      this.button = 'Modifier';
    }
  }

  submit() {
    this.event.emit(this.form.value);
  }
}
