import { Component} from '@angular/core';

@Component({
  selector: 'app-line-chart',
  template: `
  <h3> Line Example</h3>
  <clr-charts [data]="data" type="line"> </clr-charts>
  `
})
export class LineChartComponent {
  data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Line-Chart Dataset',
        data: [75, 89, 80, 91, 86, 57, 41],
        fill: false,
        lineTension: 0.1,
        borderColor: 'rgb(66, 202, 247)',
        borderWidth: 1,
      }]
      }
      options:{
        scales:{
          yAxes:[{
            ticks:{
              beginsAtZero:true
            }
          }] }
        }
      }

