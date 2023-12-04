import { ORDER_ABC, CLEAR_DETAIL, GET_CREATED, GET_DETAIL, GET_GAME_BYNAME, GET_GENRES, GET_NOTCREATED, GET_ALLVIDEOGAMES, PAGINATE, ORDER_RATING, FILTER_GENRES } from "../Actions/actionsTypes";
//* creacion del estado inicial
const initialStore = {
    videoGames: [],
    pageVideoGames: [],
    allVideoGames: [],
    detail: [],
    genres: [],
    currentPage: 0
};

//* funciones con estados globales
const Reducer = (state = initialStore, action) => {
    const ITEMS_PAGE = 15;
    switch (action.type) {
        case GET_ALLVIDEOGAMES:
            return {
                ...state,
                videoGames: [...action.payload].splice(0, ITEMS_PAGE),
                allVideoGames: action.payload,
                pageVideoGames: action.payload,
            }

        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload
            };

        case CLEAR_DETAIL:
            return {
                ...state,
                detail: []
            };

        case GET_GENRES:
            return {
                ...state,
                genres: action.payload
            };

        case GET_GAME_BYNAME:
            return {
                ...state,
                videoGames: action.payload
            };

        case FILTER_GENRES:
            const filteredGames = state.allVideoGames.filter((game) => {
                return game.genres.includes(action.payload);
            });
            return {
                ...state,
                pageVideoGames: [...filteredGames],
                videoGames: filteredGames.splice(0, ITEMS_PAGE),
            };

        case GET_CREATED:
            const createdGames = state.allVideoGames.filter((game) => game.created === true);
            return {
                ...state,
                videoGames: createdGames.splice(0, ITEMS_PAGE),
                pageVideoGames: createdGames
            };

        case GET_NOTCREATED:
            const uncreatedGames = state.allVideoGames.filter((game) => game.created === false);
            return {
                ...state,
                videoGames: uncreatedGames.splice(0, ITEMS_PAGE),
                pageVideoGames: uncreatedGames
            };

        case ORDER_ABC:
            let sortedList = [...state.pageVideoGames].sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                if (action.payload === 'Ascendente') {
                    return nameA.localeCompare(nameB);
                } else if (action.payload === 'Descen') {
                    return nameB.localeCompare(nameA);
                }
            });
            return {
                ...state,
                videoGames: sortedList.splice(0, ITEMS_PAGE),
                pageVideoGames: sortedList
            };

        case ORDER_RATING:
            let sortedRating = [...state.pageVideoGames].sort((a, b) => {
                if (action.payload === 'Upward') {
                    return a.rating - b.rating;
                } else if (action.payload === 'Falling') {
                    return b.rating - a.rating;
                };
            });
            if (Object.keys(sortedRating).length <= 15) {
                return {
                    ...state,
                    videoGames: sortedRating,
                    pageVideoGames: sortedRating
                };
            } else {
                return {
                    ...state,
                    videoGames: sortedRating.splice(0, ITEMS_PAGE),
                    pageVideoGames: sortedRating
                };
            };

        case PAGINATE:
            const nextPage = state.currentPage + 1;
            const prevPage = state.currentPage - 1;
            const firstIndex = action.payload === "next" ? nextPage * ITEMS_PAGE : prevPage * ITEMS_PAGE;
            if (action.payload === 'next' && firstIndex >= state.pageVideoGames.length) {
                return state
            } else if (action.payload === "prev" && prevPage < 0) {
                return state
            };
            return {
                ...state,
                videoGames: [...state.pageVideoGames].splice(firstIndex, ITEMS_PAGE),
                currentPage: action.payload === "next" ? nextPage : prevPage,
            };
        default:
            return { ...state };
    }
}
export default Reducer;