import axios from "axios";

import { DELETE_FAVORITE, ADD_FAVORITE, GET_FAVORITE, FILTER, ORDER } from "./types";

export function addFavorite(charac){
    return async function (dispatch){
        try {
            const result = await axios.post(`http://localhost:3001/rickandmorty/fav`, charac)
            return dispatch({
                        type: ADD_FAVORITE,
                        payload: result.data
                    })
        } catch (error) {
            console.log(error);
        }

    }
}

export function deleteFavorite(id){
    return async function(dispatch){
        try {
            const result = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
            console.log(result);
            const dataDeleted = result.data;
                return dispatch({
                    type: DELETE_FAVORITE,
                    payload: dataDeleted
                })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getFavorites() {
    return async function(dispatch){
        try {
            const result = axios.get('http://localhost:3001/rickandmorty/fav')
            console.log(result);
            return dispatch ({
                type: GET_FAVORITE,
                payload: result.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function filterCards(status){
    return {
        type: FILTER,
        payload: status
    }
}

export function orderCards(id){
    return {
        type: ORDER,
        payload: id
    }
}