import {genresMovies, popularMovies, searchMovies} from "../api/api";

const SET_POPULAR_MOVIES = 'SET_POPULAR_MOVIES';
const SET_GENRES_MOVIES = 'SET_GENRES_MOVIES';
const SET_SEARCH_MOVIES = 'SET_SEARCH_MOVIES';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_RESULT = 'SET_TOTAL_RESULT';
const GENRES = 'GENRES';


let initialState = {
  movies: [],
  allGenres: [],
  totalResults: null,
  currentPage: 1,
  genres: [],
  aaa:[]
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
         allGenres: action.payload
        }
    case SET_CURRENT_PAGE :
      return {
        ...state,
        currentPage: action.page
      }
    case SET_SEARCH_MOVIES:
      return {
        ...state,
        movies: action.payload
      }

    // case GENRES:
    //    console.log(state.allGenres)
    //   // for(let i = 0; i < state.allGenres.length; i++){
    //   //   console.log("adf")
    //   //   for (let j = 0; j < action.payload; j++){
    //   //     console.log(i)
    //   //   }
    //   // }
    //   return {
    //     ...state
    //   }
    default:
      return state;
  }
}

export const setPopularMovies = (movies) => ({type: SET_POPULAR_MOVIES, movies});
export const setGengerMovies = (payload) => ({type:SET_GENRES_MOVIES, payload});
export const setSearchMovies = (payload) =>({type:SET_SEARCH_MOVIES, payload});
export const setTotalResults = (payload) => ({type: SET_TOTAL_RESULT, payload });
export const setCurrentPage = (page) => ({type:SET_CURRENT_PAGE, page})
export const genres = (payload) => ({type:GENRES, payload})

export const getPopularMovies = (page) => {
  return async (dispatch) => {
    let response = await popularMovies(page)
    dispatch(setTotalResults(response.data.total_results))
    dispatch(setPopularMovies(response.data.results))
  }
}

export const getGenresMovies = () => {
  return async  (dispatch) => {
    let response = await genresMovies()
  dispatch(setGengerMovies(response.data.genres))

  }
}

export const getSearchMovies = (value) => {
  return async (dispatch) => {
    let response = await searchMovies(value)
    dispatch(setSearchMovies(response.data.results))
  }
}

export default popularMoviesReduser;
