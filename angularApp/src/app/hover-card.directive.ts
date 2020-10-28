import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appHoverCard]'
})
export class HoverCardDirective {
  @Input () theIndex?: string;
  @HostListener('mouseenter') onMouseEnter(btn){
    if (this.theIndex){
    this.elm.nativeElement.style.border  = '20px solid green';
    }
  }
  @HostListener('mouseleave') onMouseLeave(btn){
    if(this.theIndex){
    this.elm.nativeElement.style.border  = '';
    }

  }

  constructor(private elm: ElementRef) {

   }

}
