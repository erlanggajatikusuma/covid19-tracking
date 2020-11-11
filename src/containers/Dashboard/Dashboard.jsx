import React, { Component } from 'react';
import './Dashboard.css';
import axios from 'axios';
import Chart from '../../components/Chart';

class Dashboard extends Component {
    state = {
        confirmed: '',
        recovered: '',
        deaths: '',
        isLoading: false
    }

    componentDidMount() {
        axios.get('https://covid19.mathdro.id/api')
            .then(res => {
                console.log(res.data)
                this.setState({
                    confirmed: res.data.confirmed.value,
                    recovered: res.data.recovered.value,
                    deaths: res.data.deaths.value,
                    isLoading: true
                })
            })
    }

    render() {
        const {confirmed, recovered, deaths, isLoading} = this.state;
        return (
            <div className="container">
                <div className="cases">
                    <div>
                        <h3>Confirmed</h3>
                        {confirmed}
                    </div>
                    <div>
                        <h3>Recovered</h3>
                        {recovered}
                    </div>
                    <div>
                        <h3>Deaths</h3>
                        {deaths}
                    </div>
                </div>
                {
                    isLoading ?  <Chart value={isLoading} labels={['Confirmed', 'Recovered', 'Deaths']} data={[confirmed, recovered, deaths]}/>
                    : null                   
                }
            </div>
        )
    }
}

export default Dashboard;
