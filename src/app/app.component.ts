
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
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
         'rgba(54, 162, 235, 1)',
         'rgba(255, 206, 86, 1)',
         'rgba(75, 192, 192, 1)',
         'rgba(153, 102, 255, 1)',
         'rgba(255, 159, 64, 1)',
          'rgba(210, 59, 102, 1)',
          'rgba(10, 112, 205, 1)',
          'rgba(0, 128, 0, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(110, 102, 255, 1)',
          'rgba(255, 0, 0, 1)' ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
],
        fill: false,
        lineTension: 0.2,
        borderWidth: 2,
        weight: 1
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
