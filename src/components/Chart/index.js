import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

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
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            }
        }

    }
    render() {
        return (
            <div>
                <Bar data={this.state.dataChart}
                    options={{ maintainAspectRatio: false }}
                    width={100}
                    height={200}
                 />
            </div>
        )
    }
}

export default Chart;