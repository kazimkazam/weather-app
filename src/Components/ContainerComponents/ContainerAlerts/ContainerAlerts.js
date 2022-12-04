import React from 'react';
import { Alerts } from '../../PresentationalComponents/Alerts/Alerts';

class ContainerAlerts extends React.Component {
    renderAlerts() {
        let alerts = this.props.alerts.alerts;
        if (alerts) {
            if (alerts.length !== 0) {
                return <h2>New alerts: { alerts.map(alert => <span key={ alert } >{ alert }   </span>) }</h2>;
            } else {
                return <h2>No alerts at the moment on this location.</h2>;
            };
        };
    };

    render() {
        return(
            <Alerts 
            alerts={ this.renderAlerts() }
            />
        );
    };
};

export { ContainerAlerts };