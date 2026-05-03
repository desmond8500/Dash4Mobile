import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators } from '@angular/forms';
import { IonContent, IonItem, IonInput , IonButton} from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { IonIcon } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { personOutline } from 'ionicons/icons';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    IonContent ,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonItem,
    IonIcon,
    IonInput,
    IonButton,
    RouterLink,
  ]
})
export class RegisterPage implements OnInit {
  fb = inject(FormBuilder);
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    firstname: ['', [Validators.required, Validators.email]],
    lastname: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirm: ['', [Validators.required, Validators.minLength(6)]],
  });
  constructor() {
    addIcons({ personOutline });
   }

  ngOnInit() {
  }

  register() {
    console.log('Email:', this.form.value.email);
    console.log('First Name:', this.form.value.firstname);
    console.log('Last Name:', this.form.value.lastname);
    console.log('Password:', this.form.value.password);
    console.log('Confirm Password:', this.form.value.confirm);
  }

}
