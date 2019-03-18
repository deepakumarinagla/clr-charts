import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ClrChartsDirective }  from "./clr-charts.directive";   
import {BarChartComponent}  from  './bar-chart/bar-chart.component';
import {DoughnutChartComponent} from './doughnut-chart/doughnut-chart.component';
import {HorizontalBarComponent} from './horizontal-bar/horizontal-bar.component';
import {LineChartComponent} from './line-chart/line-chart.component';
import {PieChartComponent} from './pie-chart/pie-chart.component';
import {PolarareaChartComponent} from './polararea-chart/polararea-chart.component';
import {RadarChartComponent} from './radar-chart/radar-chart.component';
import {ScatterChartComponent} from './scatter-chart/scatter-chart.component'; 



describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ClrChartsDirective

      ],
      declarations: [
        AppComponent,,BarChartComponent,DoughnutChartComponent,HorizontalBarComponent,LineChartComponent,
        PieChartComponent,PolarareaChartComponent,RadarChartComponent,ScatterChartComponent]
      
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});

  
