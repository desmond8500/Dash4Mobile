import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  IonContent,
  IonItem,
  IonButton,
  IonInput } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, ReactiveFormsModule ,IonItem, IonContent, CommonModule, FormsModule, HeaderComponent]
})
export class ResetPasswordPage implements OnInit {
  fb = inject(FormBuilder);
  route = inject(Router);
  step = 1;
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });
  passwordResetForm = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirm: ['', [Validators.required, Validators.minLength(6)]],
  });


  constructor() { }

  ngOnInit() {
  }

  resetpassword() {
    console.log('Email:', this.form.value.email);
    this.step = 2;
  }

  savenewpassword() {
    console.log('New Password:', this.passwordResetForm.value.password);
    console.log('Confirm Password:', this.passwordResetForm.value.confirm);
    this.route.navigate(['/login']);
  }

  back() {
    this.step = 1;
  }

}
