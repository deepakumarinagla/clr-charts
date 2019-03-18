import { Component } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  template: `
  <h3>Doughnut Example</h3>
  <clr-charts [data]="data"></clr-charts>
  `,
})
export class DoughnutChartComponent {
  data = {
    labels: ['Red', 'Green', 'Yellow'],
    datasets: [
      {
        data: [100, 200, 300],
        backgroundColor: ['#FF5954', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF5954', '#36A2EB', '#FFCE56'],
      },
    ],
  };
}