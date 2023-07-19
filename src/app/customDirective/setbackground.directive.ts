import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetbackground]'
})
export class SetbackgroundDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) {

   }
   ngOnInit(){
    setTimeout(()=>{
      this.renderer.setProperty(this.element.nativeElement, 'textContent', 'hwjwbwrwlw')

    }, 2000)
   }

}
