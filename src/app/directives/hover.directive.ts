import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {
  @Input() appHoverScale: number = 1.1;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.hover(1);
    this.elementRef.nativeElement.style.transition = 'transform 0.2s';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.hover(this.appHoverScale);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover(1);
  }

  hover(scale: Number) {
    this.elementRef.nativeElement.style.transform = `scale(${scale})`;
  }
}
