import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetbackground]'
})
export class SetbackgroundDirective  {

  constructor(private element: ElementRef, private renderer: Renderer2) {

   }
   @HostListener('mouseenter') onmousehover(){
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', "red")
    this.renderer.setStyle(this.element.nativeElement, 'transition', "0.2s")
   }
   @HostListener('mouseleave') onmouseleave(){
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', "black")
    this.renderer.setStyle(this.element.nativeElement, 'transition', "0.2s")

   }


}
