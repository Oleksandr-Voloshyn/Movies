import React from 'react';
import './save-movies.css'
import clouse from '../../image/clouse.png'


const SaveMovies = ({saveMovies, openFilm, removeSaveMovie}) => {
  return (
    <div className='save-page'>
      {
        saveMovies.map(i => {
          return <div key={i.id} className="movie-card">
            <div className="info-section">
              <div className='image-block'>
                <img
                  className="image"
                  alt=''
                  src={`https://image.tmdb.org/t/p/original${i.poster_path}`}
                  onClick={() => openFilm(i.id)}/>
                <div className='text'>
                  <h2 className='name-movie'>{i.original_title}</h2>
                  <img 
                  className='remove-movie' 
                  src={clouse}
                  alt=''
                  onClick={() => removeSaveMovie(i)}/>               
                </div>
              </div>
            </div>
            <img
              alt=''
              className="blur-back bright-back"
              src={`https://image.tmdb.org/t/p/original${i.backdrop_path}`}/>
          </div>
        })
      }
    </div>
  );
}

export default SaveMovies;
