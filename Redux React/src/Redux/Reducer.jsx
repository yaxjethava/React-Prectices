const initialState = {
    count: 0
}

export const createReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Increment":
            return { ...state, count: state.count + 1 }

        case "Dicrement":
            if (state.count > 1)
                return { ...state, count: state.count - 1 }

        case "Reset":
            return { count: state.count = 0 }

        default:
            return state
    }
}

