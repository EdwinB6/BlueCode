import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @ViewChild('aboutContainer') aboutContainer!: ElementRef;

  constructor(
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
