import React from "react";
import {Route, Switch} from "react-router-dom";
import { withRouter } from "react-router";

import './App.css';

import PopularMoviesContainer from "./container/container-movies/container-movies";
import ContainerSaveMovies from "./container/container-save-movies/container-save-movies";
import ContainerFilm from "./container/container-movie/container-movie";
import Header from "./header/header";


function App() {

  return (
    <div className='sayt'>
      <Header/>
      <div >
        <div>
          <Switch>
            <Route exact path = "/" render={() => <PopularMoviesContainer/>} />  
            <Route path = "/saveMovies" component={ContainerSaveMovies}/>
            <Route path = "/search/:id?" render={() => <PopularMoviesContainer/>} />   
            <Route path = '/moviesByGenre' render={() => <PopularMoviesContainer/>} />       
            <Route path = "/movie/:id?" 
              render={({match}) => {
                const {id} = match.params;
                return <ContainerFilm itemId={id}/>
            }}/>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default withRouter(App);
