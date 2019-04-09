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
  }

  updateChart() {
    const data = this.transformData();

    if (!this.chartInstance) {
      return;
    }

    if (this.options) {
      // in order to allow for universal rendering, we import chart.js runtime with `require` to prevent node errors
      const Chart = require('chart.js');
      this.chartInstance.options = (Chart as any).helpers.configMerge(
        this.chartInstance.options,
        this.options,
      );
    }

   
