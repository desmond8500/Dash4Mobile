import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {

  server = 'https://dash3.yonkou.info/api';

  toast = signal({
    show: false,
    message: 'Hello',
    duration: 3000
  })

  isToastopen = signal(false)

  toastShow(message: string){
    this.toast.set({
      'message': message,
      'show': true,
      'duration': 5000
    })
    this.isToastopen.set(true)
  }

  constructor() { }

  getServer() {
    return this.server;
  }

}
