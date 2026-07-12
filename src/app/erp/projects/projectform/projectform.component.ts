import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit, output } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonButton, IonContent, IonFooter, IonIcon, IonInput, IonItem, IonModal, IonTextarea, IonToast, IonToolbar, IonText } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { ProjetService } from 'src/app/services/erp/projet-service';
import { MainService } from 'src/app/services/main-service';

@Component({
  selector: 'app-projectform',
  templateUrl: './projectform.component.html',
  styleUrls: ['./projectform.component.scss'],
  imports: [IonText,
    IonToast,
    IonIcon,
    IonItem,
    IonContent,
    IonToolbar,
    IonButton,
    IonInput,
    IonTextarea,
    IonItem,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    IonIcon,
    IonFooter,
    IonToast,
    IonFooter,
    IonToolbar,
    IonIcon,
    IonModal
    ],
})
export class ProjectformComponent implements OnInit {
  @Input() type: any = 'add';
  @Input() task: any;

  event = output<any>();
  _projet = inject(ProjetService);
  _main = inject(MainService);
  fb = inject(FormBuilder);

  title: any;
  button: any;

  form = this.fb.group({
    client_id: '',
    favoris: 0,
    name: 'Tache 6',
    description: 'Démo',
  });

  constructor() {
    addIcons({ add });
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
