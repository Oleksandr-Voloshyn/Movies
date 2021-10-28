import {moviesByGenre} from "../api/api";

const SET_MOVIE = 'SET_MOVIE';
const SET_GENRES_ID = 'SET_GENRES_ID';

let initialState = {
  movieByGenres: [],
  genresId: []
}

const moviesByGenreReducer = (state = initialState, action) => {
  switch (action.type){
    case SET_MOVIE:
      return {
        ...state,
        movieByGenres: action.movie,
      }
    case SET_GENRES_ID:
      return {
        ...state,
        genresId: action.genresId
      }

    default:
      return state;
  }
}

export const setMovie = (movie) => ({type: SET_MOVIE, movie});
export const setGenreId = (genresId) => ({type: SET_GENRES_ID, genresId});



export const getMovieByGenre = (id, page) => {
  return async dispatch => {
    let response = await moviesByGenre(id, page)
    dispatch (setMovie(response.data.results))
  }
}


export default moviesByGenreReducer;
