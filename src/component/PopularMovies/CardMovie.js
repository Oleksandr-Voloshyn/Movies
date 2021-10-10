import React from 'react';
import './CardMovie.css'
import Genres from "../../Dodatok/Genres/Genres";
import SaveButton from "../../Dodatok/ButtonSave/saveButton";

const CardMovie = (props) => {

  return (
    <div>
      <div className='allFilm'>
        {props.movies.map(s => {
          return <div className='fontFilm' key={s.id}>

            {s.backdrop_path == null
              ? <img
                className='film'
                alt=''
                src={`https://i.stack.imgur.com/y9DpT.jpg`}
                onClick={() => props.openFilm(s.id)}/>
              : <img
                className='film'
                alt=''
                src={`https://image.tmdb.org/t/p/original${s.poster_path}`}
                onClick={() => props.openFilm(s.id)}/>
            }
            
            <p className='title'>{s.original_title}</p>

            <div>
              <Genres movie={s} allGenres={props.allGenres}/>
            </div>

            <div className='buttonSave'>
              <SaveButton movie={s} showButton={true}/>
            </div>
            
          </div>
        })}
      </div>
    </div>
  );
}


export default (CardMovie);
