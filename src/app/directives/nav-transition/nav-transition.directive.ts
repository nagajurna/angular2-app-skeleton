import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({ 
	selector: '[myNavTransition]' 
})

export class NavTransitionDirective {
    
   constructor(renderer : Renderer, el : ElementRef) {
			
		renderer.listenGlobal("window", "scroll", () => {
			let body = document.querySelector("body");
			let html = document.querySelector("html");
			if(body.scrollTop > 10 || html.scrollTop > 10) {
				el.nativeElement.className = 'scrolled';
			} else {
				el.nativeElement.className = '';
			}
		 });
	}
}
