import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetbackground]'
})
export class SetbackgroundDirective  {

  constructor(private element: ElementRef, private renderer: Renderer2) {

   }
   @HostBinding('style.backgroundColor') background: string 
   @HostListener('mouseleave') yo(){
    console.log(this.background)
    if (this.background === 'bg-orange-300') this.background = "red"
   } 




}
