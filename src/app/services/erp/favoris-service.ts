import { inject, Injectable } from '@angular/core';
import { MainService } from '../main-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FavorisService {
  _main = inject(MainService);
  _http = inject(HttpClient);

  getFavoris() {
    return this._http.get( `${this._main.getServer()}/v1/favoris`);
  }
}
