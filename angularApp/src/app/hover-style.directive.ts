import { Directive, ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective {
  @Input () fontWeght?: string;
  @Input () borderBottomColor?: string;


  @HostListener('mouseenter') onMouseEnter(btn){
    this.mouseEnterEffect(this.borderBottomColor,this.fontWeght);
  }
  @HostListener('mouseleave') onMouseLeave(btn){
      this.mouseLeaveEffect(this.borderBottomColor,this.fontWeght);
  }

  private mouseEnterEffect(colour,fontWeigth){
      if(colour){
        this.elm.nativeElement.style.borderBottom  = '2px solid '+colour;
      }
      if(fontWeigth){
        this.elm.nativeElement.style.fontWeight   = fontWeigth;
      }
  }
  private mouseLeaveEffect(colour,fontWeigth){
    if(colour){
      this.elm.nativeElement.style.borderBottom  = '';
    }
    if(fontWeigth){
      this.elm.nativeElement.style.fontWeight   = 'normal';
    }
  }
    
  constructor(private elm: ElementRef) {
  }
    

}
