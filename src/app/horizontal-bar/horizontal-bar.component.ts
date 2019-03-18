import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-bar',
  template: `
  <h3>Horizontal Bar Example</h3>
  <clr-charts [data]="data" [options]="options" type="horizontalBar"></clr-charts>
  `

})
export class HorizontalBarComponent implements OnInit {

  data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Black'],
    datasets: [
      {
        label: 'Horizontal-bar Dataset',
        data: [80, 55, 65, 77, 95, 70, ],
        fill: false,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 205, 86, 1)',
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
    legend: {
      display: false,
    },
    scales: { xAxes: [{ ticks: { beginAtZero: true } }] },
  };

  constructor() {}

  ngOnInit() {}
}
