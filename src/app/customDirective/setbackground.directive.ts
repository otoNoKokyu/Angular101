import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appSetbackground]'
})
export class SetbackgroundDirective implements OnInit {

  constructor(private element: ElementRef) {

   }
   ngOnInit(){
    setTimeout(()=>{
      this.element.nativeElement.textContent = '#C8E6C9'

    }, 2000)
   }

}
