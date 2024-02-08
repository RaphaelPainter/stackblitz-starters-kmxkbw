import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[directiveHover]',
})
export class HoverDirective {
  defaultColor = 'red';
  @HostBinding('style.color') textColor: string = this.defaultColor;

  @HostListener('mouseenter') onEnter(e: MouseEvent) {
    this.textColor = 'green';
  }

  @HostListener('mouseleave') onLeave(e: MouseEvent) {
    this.textColor = this.defaultColor;
  }
}
