import React, { useCallback, useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    const incre = useCallback(() => {
    console.log('re rendered !')
        setCount(count + 1);
    }, [count])

    const dicre = useCallback(() => {
    console.log('re rendered !')
        setCount(count - 1);
    }, [count])
    
    const reset = useCallback(() => {
    console.log('re rendered !')
        setCount(0);
    }, [count])

    return (
        <>
            <h1>{count}
            </h1>

            <button onClick={incre}>+</button>
            <button onClick={dicre}>-</button>
            <button onClick={reset}>Reset</button>

        </>
    )
}

export default Counter
