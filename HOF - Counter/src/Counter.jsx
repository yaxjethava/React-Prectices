import React from 'react'

const Counter = ({ count, increment, reset, dicrement }) => {
    return (
        <>
            <h1>Counter {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={dicrement}>Dicrement</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}

export default Counter
