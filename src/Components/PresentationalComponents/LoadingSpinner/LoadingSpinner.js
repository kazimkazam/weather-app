import React from 'react';
import LoadingSpinnerComponent from 'react-spinners-components';

import './loadingSpinner.css';

const LoadingSpinner = ({ type, color, height, width }) => (
    <div id='loading-spinner' data-testid={ 'loading-spinner' }>
        <h3>Loading...</h3>
        <LoadingSpinnerComponent type={ 'Ripple' } colors={ [ '#1beabd', '#10abff'] } size={ '150px' } />
        <h3>Please wait a moment</h3>
    </div>
);

export default LoadingSpinner;