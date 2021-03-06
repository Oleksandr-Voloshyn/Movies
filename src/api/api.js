import axios from "axios";

let URL = "https://api.themoviedb.org/3/"
let KEY = "?api_key=3dc50b2d5f561b313e8133997a870eaf"
let LANGUAGE = "&language=en-US"


export const popularMovies = (page) => {
    return axios.get(`${URL}movie/popular${KEY}&page=${page}`)
  }
  

  export const genresMovies = () => {
    return axios.get(`${URL}genre/movie/list${KEY}${LANGUAGE}`)
  }

  export const searchMovies = (movies, page) => {
    return axios.get(`${URL}search/movie${KEY}${LANGUAGE}&query=${movies}&page=${page}&include_adult=false`)
  }
  export const movieId = (id) => {
    return axios.get(`${URL}movie/${id}${KEY}${LANGUAGE}`)
  }
  
  export const recommendationsMovies = (id) => {
    return axios.get(`${URL}movie/${id}/recommendations${KEY}${LANGUAGE}&page=1`)
  }

  export const moviesByGenre = (genre, page) => {
    return axios.get(`${URL}discover/movie${KEY}${LANGUAGE}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genre}&with_watch_monetization_types=flatrate`)
  }