import {movieId, recommendationsMovies} from "../api/api";

const SET_MOVIE = 'SET_MOVIE';
const SET_RECOMMENDATIONS_MOVIES = 'SET_RECOMMENDATIONS_MOVIES';
const CLEAR_MOVIE = 'CLEAR_MOVIE';




let initialState = {
  movie: [],
  recommendations: []
}

const moviesIdReduser = (state = initialState, action) => {
  switch (action.type){
    case SET_MOVIE:
      return {
        ...state,
        movie: action.movie,
      }
    case SET_RECOMMENDATIONS_MOVIES:
      return {
        ...state,
        recommendations: action.payload
      }
    case CLEAR_MOVIE:
      return {
        ...state,
        movie: []
      }

    default:
      return state;
  }
}

export const setMovie = (movie) => ({type: SET_MOVIE, movie});
export const setRecommendationsMovies = (payload) => ({type:SET_RECOMMENDATIONS_MOVIES, payload});
export const clearMovie = () => ({type: CLEAR_MOVIE});


export const getMovieIdThunk = (id) => {
  return async dispatch => {
    let response = await movieId(id)
    dispatch (setMovie(response.data))
  }
}

export const getRecommendationsMoviesThunk = (id) => {
  return async dispatch => {
    let response = await recommendationsMovies(id)
    dispatch (setRecommendationsMovies(response.data.results))
  }
}

export default moviesIdReduser;
