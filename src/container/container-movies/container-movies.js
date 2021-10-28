import React, {Component} from 'react';
import {connect} from "react-redux";
import { withRouter } from 'react-router';

import './container-movies.css'
import SearcMovies from './found-movies/found-movies';
import PopularMovies from './popular-movies/popular-movies';
import MoviesByGenres from './movies-by-genres/movies-by-genres'
import SidebarGenres from "../../sidebar/sidebar-genres/sidebar-genres";

import {
  getGenresMovies,getPopularMovies, getSearchMovies,
  clearSearchMovies} from "../../redux/popular-movies-reducer";
import {
  clearMovie, getMovieIdThunk, 
  getRecommendationsMoviesThunk} from "../../redux/movie-id-reducer";
import {getMovieLocalStorage, setSaveMovies} from "../../redux/save-movies-reducer"

import {getMovieByGenre} from '../../redux/movies-by-genres-reducer'





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
  onPageMivieByGenres = (page) => {
    this.setState({current: page})
    this.props.getMovieByGenre(this.props.genresId, page)
  }


  render() {
    const {movies, moviesSearch, movieByGenres} = this.props
    
    return (
      <div className='sidebar-content'>
         <div>
          <SidebarGenres/>
        </div>
      <div className='popular-movies'>
      
        { (this.props.history.location.pathname === '/') ?
        (
          <PopularMovies
          movies={movies}
          onPageChange={this.onPageChange}
          currentPage={this.state.current}
          getPopularMovies={this.props.getPopularMovies}
          />)
          : (this.props.history.location.pathname === '/search') ?
          (<SearcMovies
          movies={moviesSearch}
          currentPage={this.state.current}
          onPageChange={this.onPageSearchMovies}
          clearSearchMovies={this.props.clearSearchMovies}
          />
        ) : ( <MoviesByGenres
          movies={movieByGenres}
          currentPage={this.state.current}
          onPageChange={this.onPageMivieByGenres}
        />) 
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
    value:state.popularMovies.value,
    movieByGenres: state.moviesByGenres.movieByGenres,
    genresId: state.moviesByGenres.genresId
  }
}

export default connect(mapStateToProps, {
  getPopularMovies, getGenresMovies, getSearchMovies, getMovieIdThunk, getRecommendationsMoviesThunk,
  clearMovie, setSaveMovies, getMovieLocalStorage, clearSearchMovies, getMovieByGenre   
})(withRouter (PopularMoviesContainer));
