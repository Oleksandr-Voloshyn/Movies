import React from 'react';
import '../../container/container-popular-movies/container-popular-movies.css'


const Genres = (props) => {

  let arr = []
  let arrGenres = (movie) => {
    for (let b in movie.genre_ids) {
      for (let a of props.allGenres) {
        if (movie.genre_ids[b] === a.id) {
          arr.push(a.name)
        }
      }
    }
  }

  return (
    <div className='genres'>

      {arrGenres(props.movie)}

      {arr.map(i => {
        return (
          <span className='genre'
                key={i.id}
          >
            {i}
          </span>
        )
      })}
      
    </div>
  )
}

export default Genres;
