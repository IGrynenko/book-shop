import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[selectBlock]'
})
export class SelectBlockDirective {

  @Input('selectBlock') color: string;

  private clicked: boolean = true;
  private settings: {
    default: {
      color: 'black',
      border: 'none',
      padding: '0px',
      width: '100%'
    }
  }

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('click') onClick() {
    this.clicked = this.clicked ? false : true;
    if (this.clicked) {
      this.renderer.setStyle(this.element.nativeElement, 'color', 'black');
      this.renderer.setStyle(this.element.nativeElement, 'border', 'none');
      this.renderer.setStyle(this.element.nativeElement, 'padding', '0px');
      this.renderer.setStyle(this.element.nativeElement, 'width', '100%');
    }
    else {
      this.renderer.setStyle(this.element.nativeElement, 'color', this.color);
      this.renderer.setStyle(this.element.nativeElement, 'border', `1px solid ${this.color}`);
      this.renderer.setStyle(this.element.nativeElement, 'padding', '5px');
      this.renderer.setStyle(this.element.nativeElement, 'width', '98%');
    }
  }

}
