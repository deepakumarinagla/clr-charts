import { Component, OnInit ,Input} from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'clr-charts',
  template: `
  <div style="width:75%;">
  <canvas id="{{type}}"></canvas>
</div>
  `,
  styles: []
})
export class ClrChartsComponent implements OnInit {
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

  