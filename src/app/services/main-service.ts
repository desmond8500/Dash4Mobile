import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {

  server = 'https://dash3.yonkou.info/api';

  constructor() { }

  getServer() {
    return this.server;
  }

}
