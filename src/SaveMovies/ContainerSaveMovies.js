import React, {Component} from 'react';
import {connect} from "react-redux";

import './SaveMovies.css'

import SaveMovies from "./SaveMovies";

import {getMovieIdThunk, getRecommendationsMoviesThunk} from "../redux/movieId-reducer";
import {getMovieLocalStorage, removeSaveMovie} from "../redux/saveMovies-reducer";
import { withRouter } from 'react-router';

class ContainerSaveMovies extends Component {
  componentDidMount(){
    this.props.getMovieLocalStorage()
  }
  
  openFilm = (id) => {
    this.props.getMovieIdThunk(id);
    this.props.getRecommendationsMoviesThunk(id);
    this.props.history.push(`/movie/${id}`)
  }

  removeSaveMovie = (i) => {
    this.props.removeSaveMovie(i)
    localStorage.removeItem(i.id);
  }

  render() {
    
    return (
      <div>
        <div className='pageSaveMovies'>
          <SaveMovies saveMovies={this.props.saveMovies}
                      allGenres={this.props.allGenres}
                      openFilm={this.openFilm}
                      removeSaveMovie={this.removeSaveMovie}/>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    saveMovies: state.likeMovies.saveMovies,
    allGenres: state.popularMovies.allGenres,
    recommendations: state.movieOne.recommendations
  }
}
export default connect(mapStateToProps, {
  getMovieIdThunk, removeSaveMovie, getRecommendationsMoviesThunk, getMovieLocalStorage})
(withRouter(ContainerSaveMovies));
