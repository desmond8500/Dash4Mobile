import { inject, Injectable } from '@angular/core';
import { MainService } from '../main-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjetService {
  _main = inject(MainService);
  _http = inject(HttpClient);

  getServer(){
    return this._main.getServer()
  }

  getProjects(client_id: number, page: number = 1) {
    return this._http.get(
      `${this._main.getServer()}/v1/clients/projets/${client_id}?page=${page}`,
    );
  }

  getProject(project_id: number) {
    return this._http.get(`${this._main.getServer()}/v1/projets/${project_id}`);
  }

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
}
