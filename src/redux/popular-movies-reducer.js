import {genresMovies, popularMovies, searchMovies, moviesByGenre} from "../api/api";

const SET_POPULAR_MOVIES = 'SET_POPULAR_MOVIES';
const SET_GENRES_MOVIES = 'SET_GENRES_MOVIES';
const SET_SEARCH_MOVIES = 'SET_SEARCH_MOVIES';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_RESULT = 'SET_TOTAL_RESULT';
const SET_VALUE = 'SET_VALUE';
const CLEAR_SEARCH_MOVIES = 'CLEAR_SEARCH_MOVIES'


let initialState = {
  movies: [],
  moviesSearch: [],
  allGenres: [],
  totalResults: null,
  currentPage: 1,
  value: '',
}

const popularMoviesReduser = (state = initialState, action) => {
  switch (action.type){
    case SET_POPULAR_MOVIES:
      return {
        ...state,
        movies: action.movies,
      }
    case SET_TOTAL_RESULT:
      return {
        ...state,
        totalResults: action.payload
      }
    case SET_GENRES_MOVIES:
      return {
        ...state,
        allGenres: action.payload,  
      }
    case SET_CURRENT_PAGE :
      return {
        ...state,
        currentPage: action.page
      }
    case CLEAR_SEARCH_MOVIES:
      return {
        ...state,
        moviesSearch: []
      }
      case SET_VALUE :
        return {
          ...state,
          value: action.payload
      }
    case SET_SEARCH_MOVIES:
      return {
        ...state,
        moviesSearch: action.payload.results,
        totalResults: action.payload.total_pages
      }
    default:
      return state;
  }
}

export const setPopularMovies = (movies) => ({type: SET_POPULAR_MOVIES, movies});
export const setGengerMovies = (payload) => ({type:SET_GENRES_MOVIES, payload});
export const setSearchMovies = (payload) =>({type:SET_SEARCH_MOVIES, payload});
export const clearSearchMovies = (payload) => ({type:CLEAR_SEARCH_MOVIES, payload})
export const setTotalResults = (payload) => ({type: SET_TOTAL_RESULT, payload });
export const setCurrentPage = (page) => ({type:SET_CURRENT_PAGE, page})
export const setValue = (payload) => ({type:SET_VALUE, payload})

export const getPopularMovies = (page) => {
  return async (dispatch) => {
    let response = await popularMovies(page)
    dispatch ( setTotalResults(response.data.total_pages))
    dispatch( setPopularMovies(response.data.results))
  }
}

export const getGenresMovies = () => {
  return async  (dispatch) => {
    let response = await genresMovies()
  
  dispatch(setGengerMovies(response.data.genres))
  }
}

export const getSearchMovies = (value, page) => {
  return async (dispatch) => {
    let response = await searchMovies(value, page)
    dispatch(setValue(value))
    dispatch(setSearchMovies(response.data))
  }
}

export default popularMoviesReduser;
