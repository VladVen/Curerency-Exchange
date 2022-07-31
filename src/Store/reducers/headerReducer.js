import {headerApi} from "../API";

const SET_VALUES = "header/SET_VALUES";

let initialState = {
    rates: [],
};

const HeaderReducer = (state = initialState, action) => {
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

export const setValuesAC = (rates) => ({
    type: SET_VALUES,
    rates,
});



export const exchangeRate = () => async (dispatch) => {
    let response = await headerApi()
    dispatch(setValuesAC(response.data))
}

export default HeaderReducer