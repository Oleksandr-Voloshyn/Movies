import React from "react";
import './App.css';
import PopularMoviesContainer from "./component/PopularMovies/PopularMoviesContainer";
import {Route, Switch} from "react-router-dom";
import ContainerSaveMovies from "./component/SavaMovies/ContainerSaveMovies";
import ContainerFilm from "./component/Film/ContainerFilm";
import Header from "./component/Header/Header";

function App() {
  return (
    <div className='sayt'>
      <Header/>
      <Switch>
        <Route path = "/saveMovies" component={ContainerSaveMovies}/>
        <Route path = "/" exact component={PopularMoviesContainer}/>
        <Route path = "/movie" component={ContainerFilm}/>

      </Switch>
    </div>
  );
}

export default App;
