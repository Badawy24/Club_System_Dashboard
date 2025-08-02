import { Component, ViewChild } from '@angular/core';
import { NgApexchartsModule, ChartComponent, ApexNonAxisChartSeries, ApexChart, ApexResponsive, ApexPlotOptions, ApexFill, ApexStroke } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels?: string[];
  responsive?: ApexResponsive[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-progress-gauge',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './progress-gauge.component.html',
  styleUrls: ['./progress-gauge.component.css']
})
export class ProgressGaugeComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [72], // 72%
      chart: {
        type: 'radialBar',
        offsetY: -20,
        sparkline: { enabled: true }
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          hollow: {
            size: '70%',
          },
          track: {
            background: '#f0f0f0',
            strokeWidth: '100%',
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              fontSize: '24px',
              fontWeight: 600,
              color: '#000',
              offsetY: 5,
              formatter: (val: number) => val + '%'
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'horizontal',
          gradientToColors: ['#F97316'], // orange end
          stops: [0, 25, 50, 75, 100]
        }
      },
      stroke: {
        lineCap: 'round'
      }
    };
  }
}
