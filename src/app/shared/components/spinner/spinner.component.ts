import { Component } from '@angular/core';
import { LoaderComponentService } from 'app/core/services/loader-component.service';

@Component({
  selector: 'app-spinner',
  template: `
    <div
      class="absolute inset-0 z-50 flex items-center justify-center bg-opacity-70"
      *ngIf="isLoading"
    >
      <div
        class="h-12 w-12 animate-spin rounded-full border-t-4 border-slate-600"
      ></div>
    </div>
  `,
})
export class SpinnerComponent {
  isLoading: boolean = true;

  constructor(private loaderService: LoaderComponentService) {}

  ngOnInit() {
    this.loaderService.isLoading$.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }
}
