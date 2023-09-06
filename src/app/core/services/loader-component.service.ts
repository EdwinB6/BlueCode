import { Injectable } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoaderComponentService {
  private isLoadingSubject = new Subject<boolean>();
  isLoading$ = this.isLoadingSubject.asObservable();
  isLoading: boolean = false;

  showLoader(): void {
    this.isLoadingSubject.next(true);
    this.isLoading = true;
  }

  hideLoader(delayMilliseconds: number): void {
    this.isLoading = false;
  
    timer(delayMilliseconds).pipe(delay(delayMilliseconds)).subscribe(() => {
      this.isLoadingSubject.next(false);
    });
  }
}
