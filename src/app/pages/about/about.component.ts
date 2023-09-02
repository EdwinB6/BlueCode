import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, delay } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @ViewChild('aboutContainer') aboutContainer!: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => this.scrollToFragment(fragment), 350);
      }
    });
  }

  scrollToFragment(fragment: string): void {
    const element = document.getElementById(fragment);
    if (element) {
      const container = this.aboutContainer.nativeElement;
      const elementTop = element.offsetTop - container.offsetTop;

      container.scrollTo({
        top: elementTop,
        behavior: 'smooth'
      });
    }
  }
}
