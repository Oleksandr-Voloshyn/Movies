import React, {Component} from 'react';
import {connect} from "react-redux";
import Film from "./film";
import Recommendations from "./Recommendations";

import {getMovieIdThunk, getRecommendationsMoviesThunk} from "../../redux/movieId-reducer";

import './Containerfilm.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



class ContainerFilm extends Component {
  openFilm = (id) => {
    this.props.getMovieIdThunk(id);
    this.props.getRecommendationsMoviesThunk(id);
    this.props.history.push(`/movie`)
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
  getRecommendationsMoviesThunk
})(ContainerFilm);
