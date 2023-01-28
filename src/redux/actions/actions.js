import { DELETE_FAVORITE, ADD_FAVORITE, FILTER, ORDER } from "./types";

export function addFavorite(fav){
    return {
        type: ADD_FAVORITE,
        payload: fav
    }
}

export function deleteFavorite(id){
    return {
        type: DELETE_FAVORITE,
        payload: id
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

