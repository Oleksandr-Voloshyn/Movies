import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import './save-button.css'

import {removeSaveMovie, setSaveMovies} from "../../redux/save-movies-reducer";

import save from '../../image/save.png';
import remov from "../../image/remov.png"


const SaveButton = (props) => {

const [like, setLike] = useState(false);

  useEffect(() => {
    if (props.saveMovies !== []) {
      for (let i of props.saveMovies) {
        if (i.id === props.movie.id) {
          setLike(true)
          break;
        } else setLike(false)
      }
    }
  }, [props.movies])

  useEffect(() => {  
    for (let i of props.saveMovies) {
      if (i.id === props.film.id) {
        setLike(true)
        break;
      } else setLike(false)
    }
  }, [props.film])

  let addToLike = () => {
    setLike(true);
    props.setSaveMovies(props.movie)
    const data_from_JSON = JSON.stringify(props.movie)
    localStorage.setItem(props.movie.id, data_from_JSON);

  }
  let removeLikeMovie = () => {
    setLike(false)
    props.removeSaveMovie(props.movie)
    localStorage.removeItem(props.movie.id);
  }

  let displayFav = () => {
    if (!like) {
      return (
        <img
          className='save-image'
          src={remov}
          alt=''
          onClick={() => addToLike()}/>
      )
    } else {
      return (
        <img
          className='save-image'
          alt=''
          src={save}
          onClick={() => removeLikeMovie()}/>
      )
    }
  }

  return (
    <div>
      <p> {props.showButton ? displayFav() : null}</p>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    saveMovies: state.likeMovies.saveMovies,
    movies: state.popularMovies.movies,
    film: state.movieOne.movie,
  }
}
export default connect(mapStateToProps, {setSaveMovies, removeSaveMovie})(SaveButton)
