import './forecast.css';
import React from 'react';

class Forecast extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(date) {
        this.props.handleChange(date);
    };

    render() {
        return(
            <section className='forecast'>
                <div className='forecast-intro'>
                    <h2>Day overview</h2>
                    <select defaultValue="default" onChange={ this.handleChange } >
                        <option value="default" disabled hidden >Select a date.</option>
                        { this.props.dates }
                    </select>
                </div>

                { this.props.forecast }

                <div className='forecast-hour'>
                    { this.props.hourForecast }
                </div>

            </section>
        );
    };
};

export { Forecast };