import React, {Component} from 'react';
import {connect} from "react-redux";
import { withRouter } from 'react-router';

import Film from "./film";
import Recommendations from "./Recommendations";

import './Containerfilm.css';

import {getMovieIdThunk, getRecommendationsMoviesThunk} from "../../redux/movieId-reducer";
import {getMovieLocalStorage} from "../../redux/saveMovies-reducer";



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

  render() {
    return (
      <div className='www'>
        <Film movie={this.props.movie} allGenres={this.props.allGenres}/>
        <Recommendations recommendations={this.props.recommendations}
                         openFilm={this.openFilm}/>
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
  getMovieIdThunk,
  getRecommendationsMoviesThunk, getMovieLocalStorage
}) (withRouter(ContainerFilm));
 