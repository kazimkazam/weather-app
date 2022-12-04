import React from 'react';
import './alerts.css';

class Alerts extends React.Component {
    render() {
        return(
            <div className='alerts'>
                { this.props.alerts }
            </div>
        );
    };
};

export { Alerts };