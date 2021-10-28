import React from 'react';
import './card-movie.css'
import Genres from "../../../dodatok/genres/genres";
import SaveButton from "../../../dodatok/button-save/save-button";
import { connect } from 'react-redux';
import {getMovieIdThunk, getRecommendationsMoviesThunk} from '../../../redux/movie-id-reducer'
import { withRouter } from 'react-router';

const CardMovie = ({movies, allGenres, ...props}) => {
  
const openFilm = (id) => {
    props.getMovieIdThunk(id);
    props.getRecommendationsMoviesThunk(id);
    props.history.push(`/movie/${id}`)
  };
  return (
    <div>
      <div className='all-film'>
        {movies.length > 0 && movies.map(s => {
          return <div className='card-film' key={s.id}>

            {s.backdrop_path == null
              ? <img
                className='image-film'
                alt=''
                src={`https://i.stack.imgur.com/y9DpT.jpg`}
                onClick={() => openFilm(s.id)}/>
              : <img
                className='image-film'
                alt=''
                src={`https://image.tmdb.org/t/p/original${s.poster_path}`}
                onClick={() => openFilm(s.id)}/>
            }
            <div className='font-film' >
            <p className='title'>{s.original_title}</p>

            <div className='all-genres'>
              <Genres movie={s} allGenres={allGenres}/>
            </div>

            <div className='fon-button-save'>
              <div className='button-save'>
                <SaveButton movie={s} showButton={true}/>
              </div>
            </div>
            </div>
          </div>
        })}
      </div>
    </div>
  );
}


export default connect(null,{getMovieIdThunk, getRecommendationsMoviesThunk})(withRouter(CardMovie));


