import React, { useState, useEffect } from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(
        () => {
            console.log('Re-render count');
        },
        [count]
    );

    const clickHandler = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <p>Count clicked {count} times</p>
            <button onClick={clickHandler}>Click me</button>
        </div>
    );
};
