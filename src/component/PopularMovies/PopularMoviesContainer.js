import React, {Component} from 'react';
import {connect} from "react-redux";

import './movies.css'
import CardMovie from "./CardMovie";
import Pagination from "../Dodatok/Pagination/Pagination";
import {
  genres, getGenresMovies,
  getPopularMovies, getSearchMovies,
  setCurrentPage} from "../../redux/popularMovies-reducer";
import {clearMovie, getMovieIdThunk, getRecommendationsMoviesThunk} from "../../redux/movieId-reducer";
import {setSaveMovies} from "../../redux/saveMovies-reducer";







class PopularMoviesContainer extends Component {
  componentDidMount() {
    this.props.getPopularMovies(this.props.currentPage);
    this.props.getGenresMovies();
    this.props.clearMovie();
  }

  onPageChange = (page) => {
    this.props.setCurrentPage(page);
    this.props.getPopularMovies(page);
  };
  openFilm = (id) => {
    this.props.getMovieIdThunk(id);
    this.props.getRecommendationsMoviesThunk(id);
    this.props.history.push(`/movie`)
  }

  render() {
    return (
      <div className='popular'>
        <div className='cardMovie'>
          <CardMovie
            setSaveMovies={this.props.setSaveMovies}
            movies={this.props.movies}
            openFilm={this.openFilm}
            allGenres={this.props.allGenres}
            saveMovies={this.props.saveMovies}
          />
        </div>
        <div>
          <Pagination onPageChange={this.onPageChange}
                      currentPage={this.props.currentPage}/>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    movies: state.popularMovies.movies,
    allGenres: state.popularMovies.allGenres,
    currentPage: state.popularMovies.currentPage,
    saveMovies: state.likeMovies.saveMovies,
  }
}
export default connect(mapStateToProps, {
  getPopularMovies, getGenresMovies, genres,
  getSearchMovies, getMovieIdThunk, getRecommendationsMoviesThunk,
  clearMovie, setSaveMovies, setCurrentPage
})(PopularMoviesContainer);
