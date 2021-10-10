import {applyMiddleware, combineReducers, createStore} from "redux";
import popularMoviesReduser from "./popularMovies-reducer";
import thunk from "redux-thunk";
import moviesIdReduser from "./movieId-reducer";
import saveMoviesReducer from "./saveMovies-reducer";



let reducers = combineReducers({
  popularMovies: popularMoviesReduser,
  movieOne: moviesIdReduser,
  likeMovies: saveMoviesReducer,
  
})

let store = createStore(reducers, applyMiddleware(thunk))

export default store;
