import axios from "axios";

let URL = "https://api.themoviedb.org/3/"
let KEY = "?api_key=3dc50b2d5f561b313e8133997a870eaf"
let LANGUAGE = "&language=en-US"

//https://api.themoviedb.org/3/search/movie?api_key=3dc50b2d5f561b313e8133997a870eaf&language=en-US&query=sew&page=2&include_adult=false

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