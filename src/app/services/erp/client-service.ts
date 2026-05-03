import { inject, Injectable } from '@angular/core';
import { MainService } from '../main-service';
import { HttpClient, httpResource } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  _main = inject(MainService);
  _http = inject(HttpClient)

  getClients(page: number = 1) {
    return this._http.get(`${this._main.getServer()}/v1/clients?page=${page}`);
  }

  test() {
    return `${this._main.getServer()}/v1/clients`
  }

}
