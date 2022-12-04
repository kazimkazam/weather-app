import React from 'react';
import { SearchBar } from '../../PresentationalComponents/SearchBar/SearchBar';

class ContainerSearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            location: ''
        };

        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event) {
        this.setState({ location: event.target.value });
    };

    handleKeyDown() {
        this.props.onSearch(this.state.location);
    };

    render() {
        return(
            <SearchBar 
            handleChange={ this.handleChange }
            handleKeyDown={ this.handleKeyDown }
            />
        );
    };
};

export { ContainerSearchBar };