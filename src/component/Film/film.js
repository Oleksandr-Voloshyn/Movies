import React, {Component} from 'react';
import './film.css'
import Genres from "../Dodatok/Genres/Genres";
import SaveButton from "../Dodatok/ButtonSave/saveButton";


const Film = (props) => {
  return (
    <div className='movieDetails'>
      <div className='viewFilm'>
        <img
          className={'filmm'}
          alt=''
          src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`}
        />
      </div>

      <div className='qwe'>
        {/*<Genres movie={props.movie} allGenres={props.allGenres} aaa={'sss'}/>*/}
        <h2 className='title'>{props.movie.original_title}</h2>
        <p><b>Release date:</b> {props.movie.release_date}</p>
        <p><b>Vote average:</b> {props.movie.vote_average}</p>
        <p><b>Budget:</b> {props.movie.budget}$</p>
        <p><b>Overview:</b> {props.movie.overview}</p>
      </div>
      <SaveButton movie={props.movie} showButton={true}/>
    </div>
  );
}


export default Film;
