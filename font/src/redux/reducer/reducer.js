import { DELETE_FAVORITE, ADD_FAVORITE, GET_FAVORITE, FILTER, ORDER } from "../actions/types";


const initialState = {
    myFavorites: [],
    allCharacters: [],
};

function rootReducer (state=initialState, { type, payload }){
    switch(type){
        case ADD_FAVORITE:
            return {
                ...state,
                allCharacters: [...state.allCharacters, payload],
                myFavorites: payload
            }
        case DELETE_FAVORITE:
            return {
                ...state,
                allCharacters: payload,
                myFavorites: payload
            }
        case FILTER:
            const filterCopy = [...state.allCharacters];

            const filterGender = filterCopy.filter(char => char.gender === payload);

            return {
                ...state,
                myFavorites: filterGender,
            }
        case ORDER:
            const orderCopy = [...state.allCharacters];

            const order = orderCopy.sort((a,b) => {
                if(a.id > b.id){
                    return payload === "Ascendente" ? 1 : -1
                }
                if(a.id < b.id){
                    return payload === "Ascendente" ? -1 : 1
                }
                else return 0
            });

            return {
                ...state,
                myFavorites: order
            }
        case GET_FAVORITE:
            return {
                ...state,
                allCharacters: payload,
                myFavorites: payload
            }

        default:
            return state
    }
}

export default rootReducer;