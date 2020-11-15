import React, { Component } from 'react';
import './Dashboard.css';
import axios from 'axios';
import Chart from '../../components/Chart';
import Headbar from '../../components/Headbar';
// import Countries from '../../components/Countries';
import CountryDetail from '../../components/CountryDetail';
import ArraySort from 'array-sort';
import HeadCountries from '../../components/HeadCountries';

class Dashboard extends Component {
    state = {
        confirmed: 0,
        recovered: 0,
        deaths: 0,
        activeCase: 0,
        isLoading: false,
        countryDetails: [],
        searchedCountry: []
    }

    async componentDidMount() {
        const globalData = await axios.get('https://api.covid19api.com/summary');
        let covid = globalData.data.Global
        let countryDetails = globalData.data.Countries
        countryDetails = ArraySort(countryDetails, 'TotalConfirmed', {reverse: true});
        
        this.setState({
            confirmed: covid.TotalConfirmed,
            recovered: covid.TotalRecovered,
            deaths: covid.TotalDeaths,
            activeCase: covid.TotalConfirmed - (covid.TotalRecovered + covid.TotalDeaths),
            isLoading: true,
            countryDetails: countryDetails,
            status: true,
            selectedData: countryDetails
        })
    }

    ChangeSortValue = e => {
        const value = e.target.value;
        let sortByReverse = true;

        if(value === "Highest") {
            sortByReverse = true
        } else {
            sortByReverse = false
        }

        let countryDetails = ArraySort(this.state.countryDetails, 'TotalConfirmed', {reverse: sortByReverse})

        this.setState({countryDetails: countryDetails, status: true})
    }

    searchCountry = e => {
        const value = e.target.value;
        
        const countryDetails = this.state.countryDetails

        let findCountry =  []

        if(value) {
            countryDetails.map(function(cur, index) {
                const finder = cur.Country.toLowerCase().search(value.toLowerCase())
                if(finder !== -1) {
                    findCountry.push(countryDetails[index])
                }
                return findCountry  // ??
            })

            findCountry = ArraySort(findCountry, 'TotalConfirmed', {reverse: true})
            this.setState({searchedCountry: findCountry})

        } else {
            this.setState({countryDetails: countryDetails})
        }

        if(value.length === 0) {
            this.setState({selectedData: this.state.countryDetails})
        } else {
            this.setState({selectedData: this.state.searchedCountry})
        }
    }

    render() {
        let countriesList = this.state.countryDetails.length > 0 ?
        this.state.selectedData.map(function(cur, index) {
            return <CountryDetail
                        key={index}
                        countryCode={cur.CountryCode}
                        totalCases={cur.TotalConfirmed}
                        newCases={cur.NewConfirmed}
                        totalDeaths={cur.TotalDeaths}
                        newDeaths={cur.NewDeaths}
                        totalRecovered={cur.TotalRecovered}
                        newRecovered={cur.NewRecovered}
                    />
        }) : null
        const {confirmed, recovered, deaths, activeCase, isLoading} = this.state;
        return (
            <div className="container">
                <Headbar confirm={confirmed} recover={recovered} death={deaths} active={activeCase} />
                {/* <Countries /> */}

                {
                    isLoading ?  <Chart value={isLoading} labels={['Confirmed', 'Recovered', 'Deaths', 'Active Case']} data={[confirmed, recovered, deaths, activeCase]}/>
                    : null                   
                }

                <div className="countries-stats">
            
                    <h2 className="countries-heading">Countries Stats</h2>

                    <div className="filtering">
                        <input type="text" placeholder="Enter Country Name" onChange={this.searchCountry} />
                        <select className="sort-by" onChange={this.ChangeSortValue}>
                            <option>Highest</option>
                            <option>Lowest</option>
                        </select>
                    </div>
                    <HeadCountries />
                </div>
                {countriesList}
            </div>
        )
    }
}

export default Dashboard;
