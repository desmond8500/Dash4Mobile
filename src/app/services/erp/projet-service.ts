import { inject, Injectable, signal } from '@angular/core';
import { MainService } from '../main-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjetService {
  _main = inject(MainService);
  _http = inject(HttpClient);

  form = signal({
    client_id: '',
    favoris: 0,
    name: 'Projet ',
    description: 'Démo',
  });

  updateField(field: string, value: any) {
    this.form.update((current) => ({
      ...current,
      [field]: value,
    }));
  }

  form_status = signal(false);

  openForm() {
    this.form_status.set(true);
  }
  closeForm() {
    this.form_status.set(false);
  }

  setClientID(id: string) {
    this.form.update((f) => ({
      ...f,
      client_id: id,
    }));
  }

  addForm() {
    this.form_status.set(true);

    this.form.set({
      client_id: '',
      favoris: 0,
      name: '',
      description: '',
    });
  }

  storeForm() {
    this.addProject(this.form()).subscribe({
      next: (data: any) => {
        this.form_status.set(false);
      },
      error: (err) => {
        console.error('Error adding project:', err);
      },
    });
  }

  editForm(project: any) {
    this.form_status.set(true);
    this.form.set({
      client_id: project.client_id,
      favoris: project.favoris,
      name: project.name,
      description: project.description,
    });
  }

  deleteForm(id: any) {
    this.deleteProject(id);
  }

  // API Requests

  getServer() {
    return this._main.getServer();
  }

  addProject(project: any) {
    return this._http.post(`${this._main.getServer()}/v1/projets`, project);
  }

  updateProject(project: any) {
    return this._http.post(
      `${this._main.getServer()}/v1/projets/${project.projet_id}`,
      project,
    );
  }

  getProjects(client_id: number, page: number = 1) {
    return this._http.get(
      `${this._main.getServer()}/v1/clients/projets/${client_id}?page=${page}`,
    );
  }

  getProject(project_id: number) {
    return this._http.get(`${this._main.getServer()}/v1/projets/${project_id}`);
  }

  deleteProject(project_id: number) {
    return this._http.delete(
      `${this._main.getServer()}/v1/projets/${project_id}`,
    );
  }

  // Notes

  getNotes(project_id: number, page: number = 1) {
    return this._http.get(
      `${this._main.getServer()}/v1/get_projet_notes/${project_id}`,
      // `${this._main.getServer()}/v1/get_projet_notes/${project_id}?page=${page}`,
    );
  }

  getNote(note_id: number, page: number = 1) {
    return this._http.get(
      `${this._main.getServer()}/v1/projet_notes/${note_id}`,
    );
  }

  addNote(note: any) {
    return this._http.post(`${this._main.getServer()}/v1/projet_notes`, note);
  }

  updateNote(note: any) {
    return this._http.post(
      `${this._main.getServer()}/v1/projet_notes/${note.note_id}}`,
      note,
    );
  }

  deleteNote(note_id: any) {
    return this._http.delete(
      `${this._main.getServer()}/v1/projet_notes/${note_id}}`,
    );
  }
}
