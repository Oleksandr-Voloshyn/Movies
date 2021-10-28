import React from 'react';
import { connect } from 'react-redux';
import './genres.css';


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
          >
            {i}
          </span>
        )
      })}
      
    </div>
  )
}

let mapStateToProps = (state) => {
  return {
    allGenres: state.popularMovies.allGenres,
  }
}

export default connect(mapStateToProps, null)(Genres);
