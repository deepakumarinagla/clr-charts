import { Directive,ElementRef,Input,Output,EventEmitter, } from '@angular/core';
import {Chart,ChartData,ChartLegendOptions,ChartOptions} from 'chart.js';
declare var require: any;





@Directive({
  
  selector: '[clr-charts]'
  
})
export class ClrChartsDirective {
  chartInstance: any;
  private element: HTMLInputElement;
  @Input() data : ChartData | any ;
  @Input() datasets : any;
  @Input() type : string ;
  @Input() labels : Array<any> =[];
  @Input() legends : ChartLegendOptions| any ={
    display: true,
    position: 'bottom',
          

  }
  ;
  @Input() layout : any ={
    padding: {
      left: 5,
      right: 5,
      top: 5,
      bottom: 0,}
     }
  @Input() options :  ChartOptions | any={};
  @Input() colors : Array<any> = [];
  @Input() width : 300;
  @Input() height : 150;
  @Input() plugins : any[];
  @Input() redraw : false ;
  @Output()  chartClick = new EventEmitter//more lines od code you hv to write //
  


  constructor() { 

  }
  
  ngAfterViewInit() {
    this.renderChart();
  }
  renderChart(): any {
    throw new Error("Method not implemented.");
  }
  ngOnChanges(changes: any) {
    if (changes.firstChange) {
      return;
    } 
  }}