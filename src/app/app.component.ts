import { Component, VERSION } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component(
  {
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ '../styles.css' ]

}


)
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  
  Highcharts: typeof Highcharts = Highcharts;

  basicLine: Highcharts.Options = {
        chart: {
        type: 'line'
        },
        title: {
            text: 'Monthly Average Temperature'
        },
      series: [{
      type: 'line',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    
    }],
  };
  
  barchart:  Highcharts.Options  = {
    series: [
      {
        data: [1, 2, 3],
        type:'bar'     }
    ],
    chart: {
      type: "bar"
    },
    title: {
      text: "barchart"
    }    
  };

}

