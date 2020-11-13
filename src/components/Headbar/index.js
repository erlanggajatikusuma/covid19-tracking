import React from 'react';
import './Headbar.css';

function Headbar({confirm, recover, death, active}) {
    return (
        <div className="Global">
            <h1 className="heading">Covid 19 Tracker</h1>
            <p className="description">Let's check Information about covid-19</p>
            
            <div className="world-stats">
                <div>
                    <h3>Confirmed</h3>
                    <p>{confirm}</p>
                </div>
                <div>
                    <h3>Recovered</h3>
                    <p>{recover}</p>
                </div>
                <div>
                    <h3>Deaths</h3>
                    <p>{death}</p>
                </div>
                <div>
                    <h3>Active Case</h3>
                    <p>{active}</p>
                </div>

            </div>
        </div>
    )
}

export default Headbar;