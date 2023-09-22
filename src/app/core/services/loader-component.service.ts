import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderComponentService {
  isLoading: boolean = true;

  showLoader(): void {
    setTimeout(() => {
      this.isLoading = true;
    }, 0);
  }

  hideLoader(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 0);
  }

  runLoader(time: number, callback: Function): void {
    this.showLoader();

    setTimeout(() => {
      this.hideLoader();
      if (callback) {
        callback();
      }
    }, time);
  }
}
