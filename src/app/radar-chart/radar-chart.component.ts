import { Component } from '@angular/core';

@Component({
  selector: 'app-radar-chart',
  template: `
  <h3>Radar Example</h3>
  <clr-charts [data]="data" type="radar"></clr-charts>
  `,
})
export class RadarChartComponent{
  data = {
    labels: [ 'Eating', 'Designing', 'Sleeping','Developing','Coding','Cycling','Jogging',],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [28, 48, 40, 19, 96, 27, 100],
      },
    ],
  };

}
