import { Component} from '@angular/core';

@Component({
  selector: 'app-polararea-chart',
  template: `
  <h3>Polar Example</h3>
  <clr-charts [data]="data" [options]="options" type="polarArea"></clr-charts>
  `,
})
export class PolarareaChartComponent {
  data = {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [
      {
        label: 'Polararea-Chart Dataset',
        data: [15, 17, 7, 5, 14],
        backgroundColor: [
          'rgb(234, 142, 4)',
          'rgb(223, 234, 8)',
          'rgb(9, 185, 234)',
          'rgb(107, 234, 9)',
          'rgb(235, 54, 54)',
        ],
      },
    ],
  };
  options = {
    responsive: true,
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Chart.js Polar Area Chart',
    },
    scale: {
      ticks: {
        beginAtZero: true,
      },
      reverse: false,
    },
    animation: {
      animateRotate: false,
      animateScale: true,
    },
  };
}