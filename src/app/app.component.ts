import { Component, ElementRef, HostListener } from '@angular/core';
import { LoaderComponentService } from './core/services/loader-component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'BlueCode';

  constructor(
    public loaderService: LoaderComponentService,
    private element: ElementRef,
  ) {}

  isMobileScreen: boolean = window.innerWidth < 640;
  isContainerVisible: boolean = false;
  isDropdownVisible: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const target = event.target as Window;
    this.isMobileScreen = target.innerWidth < 640;

    if (!this.isMobileScreen) {
      this.isContainerVisible = false;
    }
  }

  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: any) {
    const menuContainer = document.querySelector('#user-menu');

    if (!menuContainer?.contains(target)) {
      this.isDropdownVisible = false;
    }
  }

  toggleContainer(): void {
    this.isContainerVisible = !this.isContainerVisible;
  }

  toggleDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  onMouseEnter() {
    setTimeout(() => {
      this.isDropdownVisible = true;
    }, 200);
  }

  onMouseLeave() {
    setTimeout(() => {
      this.isDropdownVisible = false;
    }, 200);
  }
}
