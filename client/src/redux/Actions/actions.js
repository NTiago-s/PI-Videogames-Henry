import {
    GET_CREATED,
    GET_ALLVIDEOGAMES,
    GET_DETAIL,
    GET_GAME_BYNAME,
    GET_GENRES,
    GET_NOTCREATED,
    ORDER_ABC,
    ORDER_RATING,
    PAGINATE,
    CLEAR_DETAIL,
    FILTER_GENRES,
} from "./actionsTypes";
import axios from 'axios'

//* funciones peticiones al backend

export const getAllVideoGames = () => {
    try {
        return async (dispatch) => {
            const { data } = await axios.get('http://localhost:3001/videogames');
            return dispatch({
                type: GET_ALLVIDEOGAMES,
                payload: data,
            })
        }
    } catch (error) {
        throw Error({ error: error.message });
    }
}

export const getDetail = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/videogames/${id}`);
            return dispatch({
                type: GET_DETAIL,
                payload: data,
            })
        } catch (error) {
            throw Error({ error: error.message });
        }
    }
}

export const getAllGenres = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/genres`);
            return dispatch({
                type: GET_GENRES,
                payload: data
            });
        } catch (error) {
            throw Error({ error: error.message })
        };
    };
};

export const getGameByName = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/videogames?name=${name}`);
            if (data.length < 1) {
                throw new Error('Not Found');
            }
            return dispatch({
                type: GET_GAME_BYNAME,
                payload: data
            });
        } catch (error) {
            throw Error('This game does not exist');
        }
    };
};

export const clearDetail = () => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: CLEAR_DETAIL
            });
        } catch (error) {
            alert(error.response.data.error);
        };
    };
};


export const filterGames = (genres) => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: FILTER_GENRES,
                payload: genres
            });
        } catch (error) {
            alert(error.response.data.error);
        }
    };
};


export const getCreate = () => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: GET_CREATED,
            });
        } catch (error) {
            alert(error.response.data.error);
        }
    };
};

export const getNotCreate = () => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: GET_NOTCREATED,
            });
        } catch (error) {
            alert(error.response.data.error);
        }
    };
};


export const alphabeticalOrder = (order) => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: ORDER_ABC,
                payload: order
            });
        } catch (error) {
            alert(error.response.data.error);
        };
    };
};

export const ratingOrder = (order) => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: ORDER_RATING,
                payload: order
            });
        } catch (error) {
            alert(error.response.data.error);
        };
    };
};

export const paginateGames = (order) => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: PAGINATE,
                payload: order,
            });
        } catch (error) {
            alert(error.response.data.error);
        };
    };
};