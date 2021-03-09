import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSelectItem]'
})
export class SelectItemDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackground('rgb(252, 165, 5)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackground('transparent');
  }

  @HostBinding('style.backgroundColor') color = 'transparent';

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  private setBackground(value: string) {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', value)
  }

}
