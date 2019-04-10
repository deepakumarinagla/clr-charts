import { AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  Output,
  ViewChild,} from '@angular/core';
import {ChartData,ChartLegendOptions,ChartOptions,ChartType,} from 'chart.js';
declare var require: any;





@Directive({
  
  selector: 'clr-charts',
  
  
})
export class ClrChartsDirective implements AfterViewInit, OnChanges{
  
  chartInstance: any;
  @ViewChild('ref') ref: ElementRef<HTMLCanvasElement>;
  @Output() chartClick = new EventEmitter<ChartClickEvent>();
  /** chart type */
  @Input() type: ChartType | string = 'doughnut';
  @Input() data: ChartData | any;
  @Input() height = 150;
  @Input() width = 300;
  @Input()
  legend: ChartLegendOptions | any = {
    display: true,
    position: 'bottom',
  };
  @Input() options: ChartOptions | any = {};
  @Input() plugins: any[];
  @Input() redraw = false;
  @Input() datasetKeyProvider: (x: any) => string = d => d.label;
  zone: any;

  constructor(private constructor : NgZone) {}

  ngAfterViewInit() {
    this.renderChart();
  }
  renderChart() {
    throw new Error("Method not implemented.");
  }
  ngOnChanges(changes: any) {
    if (changes.firstChange) {
      return;
    }
    if (this.chartInstance && this.redraw) {
      this.chartInstance.destroy();
      this.renderChart();
      return;
    }
    this.updateChart();
  }  updateChart() {
    throw new Error("Method not implemented.");
  }
}
//need to write rest of the code in upcoming lines //
//









//


   
