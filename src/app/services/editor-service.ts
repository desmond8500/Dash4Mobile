import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EditorService {
  http = inject(HttpClient);

  api = 'http://localhost:3000';

  saveProject(data: any) {
    return this.http.post(`${this.api}/projects`, data);
  }

  getProjects() {
    return this.http.get(`${this.api}/projects`);
  }

  getProject(id: number) {
    return this.http.get(`${this.api}/projects/${id}`);
  }

  updateProject(id: number, data: any) {
    return this.http.put(`${this.api}/projects/${id}`, data);
  }

  deleteProject(id: number) {
    return this.http.delete(`${this.api}/projects/${id}`);
  }

  saveEquipment(data: any) {
    return this.http.post(`${this.api}/equipments`, data);
  }
}
