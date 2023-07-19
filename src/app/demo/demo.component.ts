import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements AfterContentInit {


  @ContentChild('paragraph') paragraphEl: ElementRef;

  ngAfterContentInit(){
    console.log(this.paragraphEl.nativeElement.textContent)
    setTimeout(() => {
    this.paragraphEl.nativeElement.textContent = 'YOO'
      
    }, 3000);
    console.log(this.paragraphEl.nativeElement.textContent)

    



  }


}
