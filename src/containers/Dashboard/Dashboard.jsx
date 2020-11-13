import React, { Component } from 'react';
import './Dashboard.css';
import axios from 'axios';
import Chart from '../../components/Chart';
import Headbar from '../../components/Headbar';
import Countries from '../../components/Countries';
import CountryDetail from '../../components/CountryDetail';

class Dashboard extends Component {
    state = {
        confirmed: 0,
        recovered: 0,
        deaths: 0,
        activeCase: 0,
        isLoading: false
    }

    async componentDidMount() {
        // axios.get('https://covid19.mathdro.id/api')
        //     .then(res => {
        //         console.log(res.data)
        //         this.setState({
        //             confirmed: res.data.confirmed.value,
        //             recovered: res.data.recovered.value,
        //             deaths: res.data.deaths.value,
        //             isLoading: true
        //         })
        //     })
        const globalData = await axios.get('https://api.covid19api.com/summary');
        let covid = globalData.data.Global
        
        this.setState({
            confirmed: covid.TotalConfirmed,
            recovered: covid.TotalRecovered,
            deaths: covid.TotalDeaths,
            activeCase: covid.TotalConfirmed - (covid.TotalRecovered + covid.TotalDeaths),
            isLoading: true
        })
    }

    render() {
        const {confirmed, recovered, deaths, activeCase,isLoading} = this.state;
        return (
            <div className="container">
                <Headbar confirm={confirmed} recover={recovered} death={deaths} active={activeCase} />
                {/* <div className="world-stats">
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
                </div> */}
                <Countries />
                <CountryDetail
                    countryCode="IN"
                    totalCases="4444"
                    newCases="33"
                    totalDeaths="1233"
                    newDeaths="123"
                    totalRecovered="22"
                    newRecovered="11"
                />
                {/* {
                    isLoading ?  <Chart value={isLoading} labels={['Confirmed', 'Recovered', 'Deaths']} data={[confirmed, recovered, deaths]}/>
                    : null                   
                } */}
            </div>
        )
    }
}

export default Dashboard;
