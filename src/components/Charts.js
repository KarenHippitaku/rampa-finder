import React, { Component } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
// import Chart from './nodemodules/chartjs/dist/Chart.bundle.js';
// dist/Chart.bundle.min.js
// import '.nodemodules/chartjs/dist/Chart.min.css';

class Chart extends Component {
  constructor(props) {
    super(props) //it marks props as not defined when it doesn't appear in both constructor and super
    this.state = {
      chartData:{
        labels: ['Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [
          {

            data: [20, 10, 20, 40],
            backgroundColor: ['turquoise', 'palegreen', 'lightcoral', 'pink']
          }
        ],
      }
    }
  }
      // props.chartData

    // this.chart = React.createRef()
    // console.log(this.chart);
    static defaultProps = {
      displayTitle: true,
      displayLegend: false,
      legendPosition: 'left',
      labels: 'month',
      data: 'growth',
      salesChart: 'sales',
      title: 'chartkind',

    }

  render() {
    // const growthChart = document.querySelectorAll(growthChart);

    // <canvas ref={ this.chart } className="growthChart" width="50%" height="17%"></canvas>
    return (
      <div className="chart">
      Crecimiento reciente
      <Bar
        data = {this.state.chartData}
        width = {100}
        height = {70}
        options = {{
          responsive: true,
          title: { //This should also be an object with the option requirements
            display: this.props.displayTitle,
            text: this.props.title,
            fontSize: 30,
          },
          legend: { //Description label from the dataset
            display: this.props.displayLegend,
            position: 'left', //right position makes it disapear
            fontSize: 25,
          },
          layout : {
            padding: {
              left: 5,
              right: 10, //These are not responsive units
              bottom: 0,
              top: 0
            }
          },
          tooltips: { //Ghost labels that appear over every bar or charted element
            enabled: false,

          },
        }} //The "maintainAspectRatio: false" distortions the proportion
      />
      </div>
    )
  }
}

export default Chart;
