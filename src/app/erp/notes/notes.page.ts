import { Component, inject, OnInit, viewChild, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonButton, IonHeader, IonToolbar, IonButtons, IonCardTitle, IonModal, IonTitle, IonItem, IonInput, IonTextarea, IonFooter, IonRefresher, IonRefresherContent } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { ProjectNotesCardComponent } from '../projects/project-notes-card/project-notes-card.component';
import { OverlayEventDetail } from '@ionic/core/components';
import { ProjetService } from 'src/app/services/erp/projet-service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
  standalone: true,
  imports: [
    IonFooter,
    IonTextarea,
    IonInput,
    IonButtons,
    IonToolbar,
    IonModal,
    IonTitle,
    IonItem,
    IonButton,
    IonContent,
    CommonModule,
    FormsModule,
    ProjectNotesCardComponent,
    HeaderComponent,
    ReactiveFormsModule,
    IonTextarea,
  ],
})
export class NotesPage implements OnInit {
  back: any;
  aroute = inject(ActivatedRoute);
  _projet = inject(ProjetService);
  fb = inject(FormBuilder);
  projet_id: any;

  notes = viewChild(ProjectNotesCardComponent);

  reloadNotes(){
    this.notes()?.getNotes()
  }

  form: FormGroup = this.fb.group({
    id: new FormControl(null),
    projet_id: new FormControl(null),
    titre: new FormControl(null),
    description: new FormControl(null),
  });

  ngOnInit() {
    this.projet_id = this.aroute.snapshot.paramMap.get('projet_id');
    this.back = '/project/' + this.projet_id;
  }

  // Modal
  @ViewChild(IonModal) modal!: IonModal;

  message =
    'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;

  cancel() {
    this.modal.dismiss(null, 'Annuler');
  }

  confirm() {
    this.postNote();
    this.modal.dismiss(this.name, 'Valider');
  }

  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'confirm') {
      this.message = `Hello, ${event.detail.data}!`;
    }
  }

  postNote() {
    this.form.patchValue({
      projet_id: this.projet_id,
    });

    this._projet.addNote(this.form.value).subscribe({
      next: (res: any) => {
        this.notes()?.getNotes();
      },
      error: (error: any) => console.log(error),
    });
  }
}
