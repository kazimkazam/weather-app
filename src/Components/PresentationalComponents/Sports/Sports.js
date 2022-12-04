import React from 'react';
import './sports.css';

class Sports extends React.Component {
    render() {
        return(
            <div className='sports'>
                <h2>Football games</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Country / Stadium</th>
                            <th>Tournament / Date</th>
                            <th>Match</th>
                        </tr>
                    </thead>
                    
                    { this.props.games }

                </table>
            </div>
        );
    };
};

export { Sports }