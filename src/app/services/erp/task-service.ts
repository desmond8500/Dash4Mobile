import { inject, Injectable, signal } from '@angular/core';
import { MainService } from '../main-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  _main = inject(MainService);
  _http = inject(HttpClient);

  form = signal({
    projet_id: '',
    priority_id: 1,
    statut_id: 1,
    favoris: 0,
    name: 'Tache 6',
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

  setProjetID(id:string){
    this.form.update((f) => ({
      ...f,
      projet_id: id,
    }));
  }

  addForm(){
    this.form_status.set(true);

     this.form.set({
       projet_id: '',
       priority_id: 1,
       statut_id: 1,
       favoris: 0,
       name: '',
       description: '',
     });
  }

  storeForm(){
    this.addTask(this.form()).subscribe({
      next: (data: any) => {
        this.form_status.set(false);
      },
      error: (err) => {
        console.error('Error adding task:', err);
      },
    });
  }

  editForm(task: any) {
    this.form_status.set(true);
    this.form.set({
      projet_id : task.projet_id,
      priority_id: task.priority_id,
      statut_id: task.statut_id,
      favoris: task.favoris,
      name: task.name,
      description: task.description,
    })
  }

  deleteForm(id:any){
    this.deleteTask(id)
  }

  // API Requests

  getTasks(page: number = 1) {
    return this._http.get(`${this._main.getServer()}/v1/tasks?page=${page}`);
  }

  getProjetTasks(id: number = 1) {
    return this._http.get(`${this._main.getServer()}/v1/projet/tasks/${id}`);
  }

  addTask(task: any) {
    return this._http.post(`${this._main.getServer()}/v1/tasks`, task);
  }

  getTask(id: any) {
    return this._http.get(`${this._main.getServer()}/v1/tasks/${id}`);
  }

  updateTask(task: any) {
    return this._http.put(
      `${this._main.getServer()}/v1/tasks/${task.id}`,
      task,
    );
  }

  deleteTask(id: any) {
    return this._http.delete(`${this._main.getServer()}/v1/tasks/${id}`);
  }
}
