
import { Component, } from '@angular/core';
@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: any;
  options: any;
  ngOnInit() {
    this.data = {
      labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: 'Number of Items Sold in Months',
        data: [9, 7, 3, 5, 2, 10, 15, 16, 19, 3, 1, 9],
        fill: false,
        lineTension: 0.2,
        borderColor: "red",
        borderWidth: 1
      }]
    }
    this.options = {
      title: {
        text: "Line Chart",
        display: true
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  }
}
