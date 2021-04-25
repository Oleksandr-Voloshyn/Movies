import React, {Component} from 'react';
import {connect} from "react-redux";

import './SaveMovies.css'

import SaveMovies from "./SaveMovies";

import {getMovieIdThunk, getRecommendationsMoviesThunk} from "../../redux/movieId-reducer";
import {removeSaveMovie} from "../../redux/saveMovies-reducer";

class ContainerSaveMovies extends Component {
  openFilm = (id) => {
    this.props.getMovieIdThunk(id);
    this.props.getRecommendationsMoviesThunk(id);
    this.props.history.push(`/movie`)
  }


  render() {
    return (
      <div>
        <div className='pageSaveMovies'>
          <SaveMovies saveMovies={this.props.saveMovies}
                      allGenres={this.props.allGenres}
                      openFilm={this.openFilm}
                      removeSaveMovie={this.props.removeSaveMovie}/>
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
  getMovieIdThunk, removeSaveMovie, getRecommendationsMoviesThunk})
(ContainerSaveMovies);
