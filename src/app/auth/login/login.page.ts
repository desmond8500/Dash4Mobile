import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent,IonList, IonLabel, IonInputPasswordToggle, IonItem, IonInput, IonToggle, IonNote, IonTabButton, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { Router, RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonInput,
    HeaderComponent,
    IonContent,
    CommonModule,
    FormsModule,
    IonItem,
    ReactiveFormsModule,
    RouterLink,
    IonIcon,
  ],
})
export class LoginPage implements OnInit {
  fb = inject(FormBuilder);
  route = inject(Router);
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor() {
    addIcons({ personOutline });
  }

  ngOnInit() {}

  login() {
    console.log('Email:', this.form.value.email);
    console.log('Password:', this.form.value.password);
    this.route.navigate(['/home']);
  }
}
