import React from 'react';
import './CountryDetail.css';
import CountryFlag from 'react-country-flag';

export default function CountryDetail({countryCode, totalCases, newCases, totalDeaths, newDeaths, totalRecovered, newRecovered}) {
    return (
        <div className="country-detail">
            <div className="country-icon">
                <CountryFlag 
                    className="country-flag"
                    countryCode={countryCode}
                    svg
                    title={countryCode}
                    style={{width:"4rem", height: "4rem"}}
                />
            </div>

            <div className="cases-details">
                <div className="cases-box">
                    <a href="#">{totalCases}</a>
                    <p className="yesterday">Last 24 Hours: <strong>{newCases}</strong></p>
                </div>
                <div className="cases-box">
                    <a href="#">{totalRecovered}</a>
                    <p className="yesterday">Last 24 Hours: <strong>{newRecovered}</strong></p>
                </div>
                <div className="cases-box">
                    <a href="#">{totalDeaths}</a>
                    <p className="yesterday">Last 24 Hours: <strong>{newDeaths}</strong></p>
                </div>
            </div>
        </div>
    )
}
