import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() type: string;
  @Input() data: any;
  @Input() options: any;
  LineChart: any;
  BarChart: any;
  

  ngOnInit() {
    // Line chart:
    this.LineChart = new Chart('lineChart', {
      type: this.type,
      data: this.data,
      options: this.options
    });
    // Bar chart:
    this.BarChart = new Chart('barChart',{
      type: this.type,
      data: this.data,
      options: this.options
   });
    
  }
}
