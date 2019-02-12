import {Directive,ElementRef} from '@angular/core';

@Directive({
    selector:'[my-highlighter]'
})

export class MyHighlighterDirective{
    constructor(el:ElementRef){
        el.nativeElement.style.background='yellow';
        
    }
}