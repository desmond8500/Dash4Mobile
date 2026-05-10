import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galaxy',
  templateUrl: './galaxy.page.html',
  styleUrls: ['./galaxy.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonInput,
    HeaderComponent,
    IonContent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class GalaxyPage implements OnInit {
  fb = inject(FormBuilder);
  route = inject(Router);
  form = this.fb.group({
    search: [''],
  });

  textInput = signal('');

  letterMap: any;

  constructor() {}

  ngOnInit() {
    this.letterMap = new Map<string, string | number>([
      ['a', 13],
      ['à', 13],
      ['b', 15],
      ['c', 16],
      ['d', 17],
      ['e', 18],
      ['é', 18],
      ['è', 18],
      ['f', 19],
      ['g', 20],
      ['h', 22],
      ['i', 23],
      ['j', 24],
      ['k', 25],
      ['l', 26],
      ['m', 27],
      ['n', 28],
      ['o', 31],
      ['p', 33],
      ['q', 34],
      ['r', 35],
      ['s', 36],
      ['t', 37],
      ['u', 38],
      ['v', 40],
      ['w', 41],
      ['x', 42],
      ['y', 44],
      ['z', 45],
      [' ', 10],
      ['0', '00'],
      ['1', '01'],
      ['2', '02'],
      ['3', '03'],
      ['4', '04'],
      ['5', '05'],
      ['6', '06'],
      ['7', '07'],
      ['8', '08'],
      ['9', '09'],
    ]);
  }

  result = computed(() => {
    return [...this.textInput().toLowerCase()]
      .map((letter) => this.letterMap.get(letter))
      .filter((v) => v !== undefined);
  });
}
