import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCursorBlink]',
})
export class CursorBlinkDirective {
  private intervalId: any;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    this.startBlinking();
  }

  ngOnDestroy(): void {
    this.stopBlinking();
  }

  private startBlinking(): void {
    this.intervalId = setInterval(() => {
      this.renderer.setStyle(this.element.nativeElement, 'visibility', 'hidden');
      setTimeout(() => {
        this.renderer.setStyle(this.element.nativeElement, 'visibility', 'visible');
      }, 250);
    }, 500);
  }

  private stopBlinking(): void {
    clearInterval(this.intervalId);
    this.renderer.setStyle(this.element.nativeElement, 'visibility', 'visible');
  }
}
