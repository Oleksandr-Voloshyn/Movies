import React from 'react';
import './card-movie.css'
import Genres from "../../../dodatok/genres/genres";
import SaveButton from "../../../dodatok/button-save/save-button";

const CardMovie = ({movies, openFilm, allGenres}) => {

  return (
    <div>
      <div className='all-film'>
        {movies.map(s => {
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


export default (CardMovie);


