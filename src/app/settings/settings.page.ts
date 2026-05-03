import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent,
  IonLabel, IonButton, IonItem } from '@ionic/angular/standalone';
import { HeaderComponent } from '../shared/header/header.component';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonItem,
    IonButton,
    IonContent,
    IonLabel,
    CommonModule,
    FormsModule,
    HeaderComponent,
    ReactiveFormsModule,
  ],
})
export class SettingsPage implements OnInit {
  fb = inject(FormBuilder);
  form = this.fb.group({
    server: new FormControl(''),
  });

  constructor() {}

  ngOnInit() {
    this.getServer();
  }

  // Server
  server: any;
  server_form = false;

  async getServer() {
    const { value } = await Preferences.get({ key: 'server' });
    this.server = value;
    this.form.patchValue({
      server: value,
    });
  }
  async setServer() {
    Preferences.set({
      key: 'server',
      value: this.form.value.server?.toString() || ''
    });
    this.toggle_server_form();
  }
  async toggle_server_form() {
    this.server_form = !this.server_form;
  }
}
