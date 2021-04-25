import {applyMiddleware, combineReducers, createStore} from "redux";
import popularMoviesReduser from "./popularMovies-reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import moviesIdReduser from "./movieId-reducer";
import saveMoviesReducer from "./saveMovies-reducer";

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}


let reducers = combineReducers({
  popularMovies: popularMoviesReduser,
  movieOne: moviesIdReduser,
  likeMovies: saveMoviesReducer,
  form: formReducer
})

let store = createStore(reducers, loadFromLocalStorage(), applyMiddleware(thunk))

store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
