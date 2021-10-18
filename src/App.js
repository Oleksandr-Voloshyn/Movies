import React from "react";
import {Route, Switch} from "react-router-dom";
import { withRouter } from "react-router";

import './App.css';

import PopularMoviesContainer from "./container/container-popular-movies/container-popular-movies";
import ContainerSaveMovies from "./container/container-save-movies/containerSaveMovies";
import ContainerFilm from "./container/container-film/container-film";
import Header from "./header/header";


function App() {

  return (
    <div className='sayt'>
      <Header/>
      <Switch>
        <Route exact path = "/" render={() => <PopularMoviesContainer/>} />  
        <Route path = "/saveMovies" component={ContainerSaveMovies}/>
        <Route path = "/search/:id?" render={() => <PopularMoviesContainer/>} />           
        <Route path = "/movie/:id?" 
          render={({match}) => {
            const {id} = match.params;
            return <ContainerFilm itemId={id}/>
        }}/>
      </Switch>
    </div>
  );
}

export default withRouter(App);
