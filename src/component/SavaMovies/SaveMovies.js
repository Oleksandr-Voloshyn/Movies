import React from 'react';
import './SaveMovies.css'
import Genres from "../Dodatok/Genres/Genres";

const SaveMovies = (props) => {
  return (
    <div className='savePage'>
      {
        props.saveMovies.map(i => {
          return <div className="movie_card">
            <div className="info_section">
              <div className='aaa'>
                <img
                  className="image"
                  alt=''
                  src={`https://image.tmdb.org/t/p/original${i.poster_path}`}
                  onClick={() => props.openFilm(i.id)}/>
                <div className='text'>
                  <h2 className='nameMovie'>{i.original_title}</h2>
                  <Genres movie={i} allGenres={props.allGenres}/>
                  <button className='removeMovie' onClick={() => props.removeSaveMovie(i)}>sss</button>
                </div>
              </div>
            </div>
            <img
              alt=''
              className="blur_back bright_back"
              src={`https://image.tmdb.org/t/p/original${i.backdrop_path}`}/>
          </div>
        })
      }
    </div>
  );
}

export default SaveMovies;
