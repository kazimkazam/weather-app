import React from "react";
import { screen, render } from '@testing-library/react';

import { Forecast } from "../Components/Forecast/Forecast";

let dates = ['11-11-2022'];
let data = [];
let alerts = [];

var state = {
    dates,
    data,
    alerts
};

describe('test Forecast component', () => {
    it('should start with empty state', () => {
        render(<Forecast forecast={ [dates, data, alerts] } />);


    });
});