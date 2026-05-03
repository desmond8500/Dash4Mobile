import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    HeaderComponent,
    CommonModule,
    FormsModule,
    IonButton,
  ]
})
export class LogoutPage implements OnInit {
  route = inject(Router)

  constructor() { }

  ngOnInit() {
  }

  logout() {
    // Logique de déconnexion ici, par exemple :
    // 1. Supprimer le token d'authentification du stockage local
    localStorage.removeItem('authToken');
    // 2. Rediriger l'utilisateur vers la page de connexion
    this.route.navigate(['/login']);
  }

}
