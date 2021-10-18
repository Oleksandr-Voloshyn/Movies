import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";

import popularMoviesReduser from "./popular-movies-reducer";
import moviesIdReduser from "./movie-id-reducer";
import saveMoviesReducer from "./save-movies-reducer";



let reducers = combineReducers({
  popularMovies: popularMoviesReduser,
  movieOne: moviesIdReduser,
  likeMovies: saveMoviesReducer,
  
})

let store = createStore(reducers, applyMiddleware(thunk))

export default store;
