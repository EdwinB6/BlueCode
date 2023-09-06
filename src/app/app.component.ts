import { Component, HostListener } from '@angular/core';
import { LoaderComponentService } from './core/services/loader-component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'BlueCode';
  navigationButtons: any = [
    { link: '', label: 'Home', section: undefined },
    { link: 'about', label: 'About us', section: 'about-us'},
    { link: 'about', label: 'Mission', section: 'mission'},
    { link: 'about', label: 'Vision', section: 'vision' },
    { link: 'politics', label: 'Politics', section: undefined },
    { link: 'contact', label: 'Contact us', section: undefined },
    { link: 'our-services', label: 'Our services', section: undefined },
  ];

  constructor(public loaderService: LoaderComponentService) { }

  isMobileScreen: boolean = window.innerWidth < 640;
  isContainerVisible: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const target = event.target as Window;
    this.isMobileScreen = target.innerWidth < 640;

    if (!this.isMobileScreen) {
      this.isContainerVisible = false;
    }
  }

  toggleContainer(): void {
    this.isContainerVisible = !this.isContainerVisible;
  }
}
