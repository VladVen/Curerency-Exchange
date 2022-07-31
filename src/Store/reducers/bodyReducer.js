import {bodyApi} from "../API";

const SET_VALUES = "body/SET_VALUES";

let initialState = {
    rates: null,
};

const bodyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VALUES: {
            return {
                ...state,
                rates: [...action.rates]
            };
        }
        default:
            return state;
    }
};

const setValuesAC = (rates) => ({
    type: SET_VALUES,
    rates,
});



export const AllCurrExchangeRate = () => async (dispatch) => {
    let response = await bodyApi()
    dispatch(setValuesAC(response.data))
}

export default bodyReducer