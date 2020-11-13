import React from 'react';
import HeadCountries from '../HeadCountries';
import './Countries.css';

export default function Countries() {
    return (
        <div className="countries-stats">
            
            <h2 className="countries-heading">Countries Stats</h2>

            <div className="filtering">
                <input type="text" placeholder="Enter Country Name" />
                <select className="sort-by">
                    <option>Highest</option>
                    <option>Lowest</option>
                </select>
            </div>
            <HeadCountries />
        </div>
    )
}
