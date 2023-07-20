import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetbackground]'
})
export class SetbackgroundDirective  {

  constructor(private element: ElementRef, private renderer: Renderer2) {

   }
   @HostBinding('style.backgroundColor') background: string = 'red'
   @HostListener('mouseleave') yo(){
    console.log(this.background)
    this.background = "red"
   } 
   @HostListener('mouseenter') yi(){
    console.log(this.background)
    this.background = "orange"
   } 




}
