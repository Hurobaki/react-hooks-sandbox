import React from 'react';
import { Counter } from '../components/Counter';
import { Calculator } from '../components/Calculator';

export const WelcomePage = () => {
    return (
        <div style={{ flex: 1 }}>
            <h1>Welcome page</h1>
            <Counter />
            <Calculator />
        </div>
    );
};
