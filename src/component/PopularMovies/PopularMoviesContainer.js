import React, {Component} from 'react';
import {connect} from "react-redux";
import { withRouter } from 'react-router';

import './movies.css'
import SearcMovies from './searcMovies/searcMovies';
import PopularMovies from './popularMovies/popularMovies';

import {
  getGenresMovies,getPopularMovies, getSearchMovies,
  setCurrentPage, setSearchMovies, clearSearchMovies} from "../../redux/popularMovies-reducer";
import {
  clearMovie, getMovieIdThunk, 
  getRecommendationsMoviesThunk} from "../../redux/movieId-reducer";
import {getMovieLocalStorage, setSaveMovies} from "../../redux/saveMovies-reducer"





class PopularMoviesContainer extends Component {
state = {
  current: 1
}

  componentDidMount() {
    console.log('compon')
    this.props.getMovieLocalStorage()
    this.props.getPopularMovies(this.state.current);
    this.props.getGenresMovies();
    this.props.clearMovie()
    this.props.history.push('/')
    this.props.clearSearchMovies();
   
  }

  componentDidUpdate(prevState, prevProps){
    if (this.props.movies.length === 0) {
      this.props.getPopularMovies(this.state.current);
    }
    if(this.props.match.path === '/' && this.state.current !== prevProps.current){
      this.props.getPopularMovies(this.state.current);   
    }

  }

  componentWillUnmount(){
    this.setState({current: 1})
  }

  onPageChange = (page) => {
    this.setState({current: page})
    this.props.getPopularMovies(page);  
  };

  onPageSearchMovies = (page) => {
    this.setState({current: page})
    this.props.setCurrentPage(this.state.current);
    this.props.getSearchMovies(this.props.value, page) 
    this.props.history.push(`/search`)
  };

  openFilm = (id) => {
    this.props.getMovieIdThunk(id);
    this.props.getRecommendationsMoviesThunk(id);
    this.props.history.push(`/movie/${id}`)
  }




  render() {
    const {movies, moviesSearch} = this.props
  
    
    return (
      <div className='popular'>
        <div className='cardMovie'>
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
         :  (<SearcMovies
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
    currentPage: state.popularMovies.currentPage,
    saveMovies: state.likeMovies.saveMovies,
    moviesSearch: state.popularMovies.moviesSearch,
    value: state.popularMovies.value
  }
}
export default connect(mapStateToProps, {
  getPopularMovies, getGenresMovies, getSearchMovies, getMovieIdThunk, getRecommendationsMoviesThunk,
  clearMovie, setSaveMovies, setCurrentPage, getMovieLocalStorage, clearSearchMovies,
  setSearchMovies 
})(withRouter (PopularMoviesContainer));
