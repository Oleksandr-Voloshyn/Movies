
const SET_SAVE_MOVIES = 'SET_SAVE_MOVIES';
const REMOVE_SAVE_MOVIE = 'REMOVE_SAVE_MOVIE';

let initialState = {
  saveMovies: []
}

const saveMoviesReducer = (state = initialState, action) => {
  switch (action.type){
    case SET_SAVE_MOVIES:
      return {
        ...state,
        saveMovies: [...state.saveMovies.filter(i => i.id !== action.payload.id), action.payload]
      }

    
    case REMOVE_SAVE_MOVIE:
      return {
        ...state,
        saveMovies: state.saveMovies.filter((item) => item.id !== action.movie.id)
      }
    default:
      return state;
  }
}

export const setSaveMovies = (payload) => ({type: SET_SAVE_MOVIES, payload});
export const removeSaveMovie = (movie) => ({type: REMOVE_SAVE_MOVIE, movie});


export const getMovieLocalStorage = () => {
  return async (dispatch) => {
    for(let key in localStorage) {
      if (!localStorage.hasOwnProperty(key)) {
        continue;
      }
      const local = localStorage.getItem(key)
       dispatch(setSaveMovies(JSON.parse(local)))
    }
  }
}

export default saveMoviesReducer;
