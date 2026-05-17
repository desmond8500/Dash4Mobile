import { Injectable, signal } from '@angular/core';
import { Network } from '@capacitor/network';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  server = 'https://dash3.yonkou.info/api';

  constructor() {
    this.init();
  }

  getServer() {
    return this.server;
  }

  // Toast =============================================
  toast = signal({
    show: false,
    message: 'Hello',
    duration: 3000,
  });

  isToastopen = signal(false);

  toastShow(message: string) {
    this.toast.set({
      message: message,
      show: true,
      duration: 5000,
    });
    this.isToastopen.set(true);
  }

  // Connextivité ===========================================
  isOnline = signal(true);

  async init() {
    const status = await Network.getStatus();
    this.isOnline.set(status.connected);

    Network.addListener('networkStatusChange', (s) => {
      this.isOnline.set(s.connected);
    });
  }
}
