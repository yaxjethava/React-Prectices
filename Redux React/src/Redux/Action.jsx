const increment = () => {
    return {
        type: "Increment"
    }
}
const dicrement = () => {
    return {
        type: "Dicrement"
    }
}
const reset = () => {
    return {
        type: "Reset"
    }
}
export { increment, dicrement, reset }