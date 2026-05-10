import { inject, Injectable } from '@angular/core';
import { MainService } from '../main-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  _main = inject(MainService);
  _http = inject(HttpClient);

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
    return this._http.put(`${this._main.getServer()}/v1/tasks`, task);
  }

  deleteTask(id: any) {
    return this._http.delete(`${this._main.getServer()}/v1/tasks/${id}`);
  }
}
