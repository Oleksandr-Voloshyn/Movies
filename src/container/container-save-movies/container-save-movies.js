import React, {Component} from 'react';
import {connect} from "react-redux";

import './save-movies.css'

import SaveMovies from "./save-movies";

import {getMovieIdThunk, getRecommendationsMoviesThunk} from "../../redux/movie-id-reducer";
import {getMovieLocalStorage, removeSaveMovie} from "../../redux/save-movies-reducer";
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
    const {saveMovies, allGenres} = this.props
    const {openFilm,removeSaveMovie} = this
    return (
      <div>
          <SaveMovies saveMovies={saveMovies}
                      allGenres={allGenres}
                      openFilm={openFilm}
                      removeSaveMovie={removeSaveMovie}
          />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    saveMovies: state.likeMovies.saveMovies,
    allGenres: state.popularMovies.allGenres,
  }
}
export default connect(mapStateToProps, {
  getMovieIdThunk, removeSaveMovie, getRecommendationsMoviesThunk, getMovieLocalStorage})
(withRouter(ContainerSaveMovies));
