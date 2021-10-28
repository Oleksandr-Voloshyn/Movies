import React, {Component} from 'react';
import {connect} from "react-redux";
import { withRouter } from 'react-router';

import Film from "./movie/film";
import Recommendations from "./recommendations/recommendations";

import './container-movie.css';

import {getMovieIdThunk, getRecommendationsMoviesThunk, clearMovie} from "../../redux/movie-id-reducer";
import {getMovieLocalStorage} from "../../redux/save-movies-reducer";


class ContainerFilm extends Component {
  componentDidMount(){
    this.props.getMovieIdThunk(this.props.itemId);
    this.props.getRecommendationsMoviesThunk(this.props.itemId);
    this.props.getMovieLocalStorage();
  }
  openFilm = (id) => {
    this.props.getMovieIdThunk(id);
    this.props.getRecommendationsMoviesThunk(id);
    this.props.history.push(`/movie/${id}`)
  }
  componentWillUnmount = () => {
    this.props.clearMovie();
  }

  render() {
    return (
      <div className='selected-movie'>

        <Film movie={this.props.movie} 
              allGenres={this.props.allGenres}
        />

        <Recommendations  recommendations={this.props.recommendations}
                          openFilm={this.openFilm}
        />
      </div>
    );
  }
}

let mapDispatchToProps = (state) => {
  return {
    movie: state.movieOne.movie,
    recommendations: state.movieOne.recommendations,
    allGenres: state.popularMovies.allGenres,
  }
}

export default connect(mapDispatchToProps, {
  getMovieIdThunk, clearMovie,
  getRecommendationsMoviesThunk, getMovieLocalStorage}) 
  (withRouter(ContainerFilm));