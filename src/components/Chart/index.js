import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import './chart.css'

class Chart extends Component {
    constructor({labels, data}) {
        super()
        this.state = {
            dataChart: {
                labels: labels,
                datasets: [{
                    label: 'Covid19',
                    data: data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
            }
        }

    }
    render() {
        return (
            <div className="chart-wrapper">
                <Bar data={this.state.dataChart}
                    options={{ maintainAspectRatio: false }}
                    height={300}
                 />
            </div>
        )
    }
}

export default Chart;