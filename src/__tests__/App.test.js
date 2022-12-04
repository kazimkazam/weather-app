import React from "react";
import { render, screen } from '@testing-library/react';
import { App } from '../App/App';

import { Weather } from '../util/weather';
jest.mock('../util/weather');

describe('test App component', () => {
    it('should change...', async () => {
        render(<App />);
    });
});