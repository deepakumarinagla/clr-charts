import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";


import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { AppComponent } from "./app.component";
import { ClrChartsDirective }  from "./clr-charts.directive";   
import {BarChartComponent}  from  './bar-chart/bar-chart.component';
import {DoughnutChartComponent} from './doughnut-chart/doughnut-chart.component';
import {HorizontalBarComponent} from './horizontal-bar/horizontal-bar.component';
import {LineChartComponent} from './line-chart/line-chart.component';
import {PieChartComponent} from './pie-chart/pie-chart.component';
import {PolarareaChartComponent} from './polararea-chart/polararea-chart.component';
import {RadarChartComponent} from './radar-chart/radar-chart.component';
import {ScatterChartComponent} from './scatter-chart/scatter-chart.component'; 






@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ClarityModule,
        ClrChartsDirective
    
    ],
     declarations: [ AppComponent,BarChartComponent,DoughnutChartComponent,HorizontalBarComponent,LineChartComponent,
    PieChartComponent,PolarareaChartComponent,RadarChartComponent,ScatterChartComponent],
     bootstrap: [ AppComponent ]
})
export class AppModule { }