import React, {Component} from 'react';
import {connect} from "react-redux";
import { withRouter } from 'react-router';

import './container-popular-movies.css'
import SearcMovies from './found-movies/found-movies';
import PopularMovies from './popular-movies/popular-movies';

import {
  getGenresMovies,getPopularMovies, getSearchMovies,
  clearSearchMovies} from "../../redux/popular-movies-reducer";
import {
  clearMovie, getMovieIdThunk, 
  getRecommendationsMoviesThunk} from "../../redux/movie-id-reducer";
import {getMovieLocalStorage, setSaveMovies} from "../../redux/save-movies-reducer"





class PopularMoviesContainer extends Component {

state = {
  current: 1
};

  componentDidMount() {
    this.props.getMovieLocalStorage()
    this.props.getPopularMovies(this.state.current);
    this.props.getGenresMovies();
    this.props.clearMovie()
    this.props.history.push('/')
    this.props.clearSearchMovies();
   
  }

  componentDidUpdate(prevProps){
    if (this.props.movies.length === 0) {
      this.props.getPopularMovies(this.state.current);
    }
    if(this.props.match.path === '/' && this.state.current !== prevProps.current){
      this.props.getPopularMovies(this.state.current);   
    }
  };

  componentWillUnmount(){
    this.setState({current: 1})
  };

  onPageChange = (page) => {
    this.setState({current: page})
    this.props.getPopularMovies(page);  
  };

  onPageSearchMovies = (page) => {
    this.setState({current: page})
    this.props.getSearchMovies(this.props.value, page) 
    this.props.history.push(`/search`)
  };

  openFilm = (id) => {
    this.props.getMovieIdThunk(id);
    this.props.getRecommendationsMoviesThunk(id);
    this.props.history.push(`/movie/${id}`)
  };




  render() {
    const {movies, moviesSearch} = this.props

    return (
      <div className='popular-movies'>
        <div>
        { (moviesSearch.length === 0) ?
        (
          <PopularMovies
          openFilm={this.openFilm}
          setSaveMovies={this.props.setSaveMovies}
          saveMovies={this.props.saveMovies}
          movies={movies}
          onPageChange={this.onPageChange}
          currentPage={this.state.current}
          allGenres={this.props.allGenres}
          clearMovies={this.props.clearMovies}
          />)
          : (<SearcMovies
          movies={moviesSearch}
          openFilm={this.openFilm}
          setSaveMovies={this.props.setSaveMovies}
          saveMovies={this.props.saveMovies}
          currentPage={this.state.current}
          onPageChange={this.onPageSearchMovies}
          allGenres={this.props.allGenres}
          clearSearchMovies={this.props.clearSearchMovies}
          getMovieLocalStorage={this.props.getMovieLocalStorage}
          />
        )
  }
        </div>
      </div>
    
    );
    
}
}

let mapStateToProps = (state) => {
  return {
    movies: state.popularMovies.movies,
    allGenres: state.popularMovies.allGenres,
    saveMovies: state.likeMovies.saveMovies,
    moviesSearch: state.popularMovies.moviesSearch,
    value:state.popularMovies.value
  }
}
export default connect(mapStateToProps, {
  getPopularMovies, getGenresMovies, getSearchMovies, getMovieIdThunk, getRecommendationsMoviesThunk,
  clearMovie, setSaveMovies, getMovieLocalStorage, clearSearchMovies   
})(withRouter (PopularMoviesContainer));
