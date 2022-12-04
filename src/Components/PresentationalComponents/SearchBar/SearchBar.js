import './searchBar.css';
import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.onKeyDown = this.onKeyDown.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event) {
        this.props.handleChange(event);
    };

    onKeyDown(event) {
        if (event.key === 'Enter') {
            this.props.handleKeyDown();
        };
    };

    render() {
        return(
            <section className='searchBar'>
                <input type={ 'text' } placeholder={ 'Enter a location.' } onChange={ this.handleChange } onKeyDown={ this.onKeyDown } />
            </section>
        );
    };
};

export { SearchBar };