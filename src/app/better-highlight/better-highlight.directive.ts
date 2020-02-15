import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private ele:ElementRef,private Renderer: Renderer2) {}

  ngOnInit(){
    this.Renderer.setStyle(this.ele.nativeElement,'background-color','yellow');
  }

  @HostBinding('style.backgroundColor') backgrundcolor:string = 'transparent';

  @HostListener('mouseenter') mouseover(eventData:Event)
  {
    //this.Renderer.setStyle(this.ele.nativeElement,'background-color','orange');
    this.backgrundcolor = 'orange';
  }  
  @HostListener('mouseleave') mouseleave(eventData:Event)
  {
    //this.Renderer.setStyle(this.ele.nativeElement,'background-color','yellow');
    this.backgrundcolor = 'yellow';
  }

}
