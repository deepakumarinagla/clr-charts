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
  
  

  ngOnInit() {
    // Line chart:
    let self = this;
    setTimeout(function() { console.log(self.type);  new Chart(self.type, {
      type: self.type,
      data: self.data,
      options: self.options
    })}, 100);
    
  }
}
