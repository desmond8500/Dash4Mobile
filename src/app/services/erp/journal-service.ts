import { inject, Injectable } from '@angular/core';
import { MainService } from '../main-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JournalService {
  _main = inject(MainService);
  _http = inject(HttpClient);

  getJournals(projet_id: number) {
    return this._http.get(`${this._main.getServer()}/journaux?${projet_id}`);
  }

  getJournal(id: number) {
    return this._http.get(`${this._main.getServer()}/journaux/$id`);
  }

  postJournal(data: any) {
    return this._http.post(`${this._main.getServer()}/journaux`, data);
  }

  updateJournal(id: number, data: any) {
    return this._http.put(`${this._main.getServer()}/journaux/$id?`, data);
  }

  deleteJournal(id: number) {
    return this._http.delete(`${this._main.getServer()}/journaux/$id`);
  }
}
