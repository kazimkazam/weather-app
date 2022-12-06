import './realWeather.css';
import React from 'react';

class RealWeather extends React.Component {
    render() {
        return(
            <div className={ 'real-time' } data-testid={ 'real-time' } >
                { this.props.figure }

                { this.props.weather }
            </div>
        );
    };
};


export { RealWeather };