import React, { useState } from 'react'

const CounterLogik = (WrapperCompo) => {

    const updatesComponent = () => {
        const [count, setCount] = useState(0)

        const increment = () => {
            setCount(count + 1)
        }
        const dicrement = () => {
            if (count > 0) {
                setCount(count - 1)
            }
        }
        const reset = () => {
            setCount(0)
        }
        // console.log(WrapperCompo)
        return (
            < WrapperCompo count = { count } dicrement = { dicrement } reset = { reset } increment = { increment } />
        )
    }

console.log(updatesComponent)

return updatesComponent
}

export default CounterLogik
