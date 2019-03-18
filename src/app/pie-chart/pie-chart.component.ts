import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  template: `
  <h3>Pie Example</h3>
  <clr-charts [data]="data" type="pie"></clr-charts>
  `,
})
export class PieChartComponent implements OnInit {
  data = {
    labels: ['Blue', 'Red', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };
  constructor() {}

  ngOnInit() {}
}
  