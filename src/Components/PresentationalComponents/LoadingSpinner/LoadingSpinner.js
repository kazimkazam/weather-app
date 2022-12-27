import React from 'react';
import ReactLoading from 'react-loading';
import './loadingSpinner.css';

const LoadingSpinner = ({ type, color, height, width }) => (
    <div id='loading-spinner'>
        <h3>Loading...</h3>
        <ReactLoading type={ type } color={ color } height={ height } width={ width } className={ 'reactSpinner' } />
        <h3>Please wait a moment</h3>
    </div>
);

export default LoadingSpinner;