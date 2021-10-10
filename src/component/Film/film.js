import React from 'react';
import './film.css'
import SaveButton from "../../Dodatok/ButtonSave/saveButton";



const Film = (props) => {
  const {movie} = props

  return (
    <div className='movieDetails'>

      <div className='viewFilm'>
        <img
          className={'filmm'}
          alt=''
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        />
      </div>

      <div className='qwe'>
        <h2 className='title'>{movie.original_title}</h2>
        <p><b>Genres:</b> {movie.genres && movie.genres.map(i => <span key={i.id}>{i.name} </span>)}
        </p>
        <p><b>Release date:</b> {movie.release_date}</p>
        <p><b>Vote average:</b> {movie.vote_average}</p>
        <p><b>Budget:</b> {movie.budget}$</p>
        <p><b>Overview:</b> {movie.overview}</p>
      </div>
      <SaveButton movie={movie} showButton={true}/>
    </div>
  );
}                  


export default Film;
