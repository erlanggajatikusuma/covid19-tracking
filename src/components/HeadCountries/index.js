import React from 'react';
import './HeadCountries.css';

export default function HeadCountries() {
    return (
        <div className="Header-country">
            <p className="heading-info">Country</p>
            <p className="heading-info">Cases</p>
            <p className="heading-info">Recovered</p>
            <p className="heading-info">Deaths</p>
        </div>
    )
}
