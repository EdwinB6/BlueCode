import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoaderComponentService } from 'app/core/services/loader-component.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @ViewChild('aboutContainer') aboutContainer!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    public loaderService: LoaderComponentService
  ) {}

  ngOnInit(): void {
    // Show loader
    this.loaderService.showLoader();
    // Hide loader
    setTimeout(()=>{
      this.loaderService.hideLoader(0);
      this.route.fragment.subscribe(fragment => {
        if (fragment) {
          setTimeout(() => this.scrollToFragment(fragment), 350);
        }
      });
    }, 2000)
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
