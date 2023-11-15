const initialState = {
    postalData: null,
    loading: false,
    error: false,
    input_valid: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "POSTALDATA":
            return { ...state, postalData: action.payload, loading: false };
        case "LOADING":
            return { ...state, postalData: null, loading: true, error: false, input_valid: true };
        case "ERROR":
            return { ...state, error: true, loading: false };
        case "INPUT_VALID":
            return { ...state, loading: false, input_valid: false };
        case "CLEARDATA":
            return initialState;
        default:
            return state;
    }
}

export default reducer;