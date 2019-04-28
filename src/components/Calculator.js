import React, { useReducer, useState, useRef } from 'react';

const initialState = {
    total: 0,
    error: ''
};

const REDUCER_ENUM = {
    increment: 'increment',
    decrement: 'decrement',
    multiply: 'multiply',
    error: 'error'
};

const calculatorReducer = (state, { type, value }) => {
    switch (type) {
        case 'increment':
            return { ...state, total: state.total + value };
        case 'decrement':
            return { ...state, total: state.total - value };
        case 'multiply':
            return { ...state, total: state.total * value };
        case 'error':
            return { ...state, error: value };
        default:
            return { ...state, error: 'Wrong choice' };
    }
};

export const Calculator = () => {
    const [state, dispatch] = useReducer(calculatorReducer, initialState);
    const [value, setValue] = useState(0);
    const inputValueRef = useRef(null);

    const calculatorClickHandler = type => () => {
        const { current: { value } } = inputValueRef;
        dispatch({ type, value: parseInt(value) });
    };

    const valueChangeHandler = ({ target: { value } }) => {
        if (value >= 0) {
            setValue(value);
        } else {
            setValue(0);
            dispatch({ type: REDUCER_ENUM.error, value: "Value can't be negative" });
        }
    };

    return (
        <div style={{ margin: 40 }}>
            <h1>Total value : {state.total}</h1>
            <label>Value : </label>
            <input ref={inputValueRef} type="number" value={value} onChange={valueChangeHandler} />
            <div style={{ marginTop: 10, marginBottom: 10 }}>
                <button onClick={calculatorClickHandler(REDUCER_ENUM.increment)}>Increment value</button>
                <button onClick={calculatorClickHandler(REDUCER_ENUM.decrement)}>Decrement value</button>
                <button onClick={calculatorClickHandler(REDUCER_ENUM.multiply)}>Multiply value</button>
                <p style={{ color: 'red' }}>{state.error}</p>
            </div>
        </div>
    );
};
