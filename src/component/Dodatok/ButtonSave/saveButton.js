import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import './saveButton.css'

import {removeSaveMovie, setSaveMovies} from "../../../redux/saveMovies-reducer";

import save from '../../../image/save.svg';
import remove from '../../../image/remove.svg';


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
      }
    }
  }, [props.film])

  let addToLike = () => {
    setLike(true);
    props.setSaveMovies(props.movie)
  }
  let removeLikeMovie = () => {
    setLike(false)
    props.removeSaveMovie(props.movie)
  }

  let displayFav = () => {
    if (!like) {
      return (
        <img
          className='save'
          src={remove}
          alt=''
          onClick={() => addToLike()}/>
      )
    } else {
      return (
        <img
          className='save'
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
