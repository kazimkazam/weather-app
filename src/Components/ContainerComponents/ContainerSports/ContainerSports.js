import React from 'react';
import { Sports } from '../../PresentationalComponents/Sports/Sports';

class ContainerSports extends React.Component {
    renderGames() {
        if (this.props.sports) {
            let data = this.props.sports;
            return data.map(game => {
                return(
                    <tbody key={ game.match } >
                        <tr>
                            <td>{ game.country } / { game.stadium }</td>
                            <td>{ game.tournament } / { game.start }</td>
                            <td>{ game.match }</td>
                        </tr>
                    </tbody>
                );
            });
        };
    };

    render() {
        return(
            <Sports 
            games={ this.renderGames() }
            />
        );
    };
};

export { ContainerSports };