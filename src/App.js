import React from "react";
import './App.css';
import PopularMoviesContainer from "./component/PopularMovies/PopularMoviesContainer";
import {Route, Switch} from "react-router-dom";
import ContainerSaveMovies from "./SaveMovies/ContainerSaveMovies";
import ContainerFilm from "./component/Film/ContainerFilm";
import Header from "./component/Header/Header";
import { withRouter } from "react-router";

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
