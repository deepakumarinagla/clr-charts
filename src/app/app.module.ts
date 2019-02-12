import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";


import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { AppComponent } from "./app.component";
import {MyHighlighterDirective} from './app.basechartdirective';



@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ClarityModule
    
    ],
     declarations: [ AppComponent,MyHighlighterDirective,],
     bootstrap: [ AppComponent ]
})
export class AppModule { }