import { Component} from '@angular/core';

@Component({
  selector: 'app-bar-chart', 
  template: `
  <h3>Bar Example (custom size)</h3>
  <clr-charts type="bar" [data]="data" width="300" height="300" [options]="options"></clr-charts>
  `,
})
export class BarChartComponent {
  data = {
    labels:['Red','Blue','Yellow','Green','Purple','Orange','White'],
    datasets :[
      {
        label:'Bar-Chart Data Set',
        data : [31,25,49,60,81,85,55],
        fill : false,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(254, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(201, 203, 207, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  options = {
    maintainAspectRatio: false,
    
    scales: { yAxes: [{ ticks: { beginAtZero: true } }] },
  };
}
