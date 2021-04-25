import axios from "axios";
let URL = "https://api.themoviedb.org/3/movie/popular?api_key=3dc50b2d5f561b313e8133997a870eaf"

export const popularMovies = (page) => {
  return axios.get(`${URL}&page=${page}`)
}

export const genresMovies = () => {
  return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=3dc50b2d5f561b313e8133997a870eaf&language=en-US`)
}

export const searchMovies = (movies) => {
  return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3dc50b2d5f561b313e8133997a870eaf&language=en-US&query=${movies}&page=1&include_adult=false`)
}
export const movieId = (id) => {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=3dc50b2d5f561b313e8133997a870eaf&language=en-US`)
}

export const recommendationsMovies = (id) => {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=3dc50b2d5f561b313e8133997a870eaf&language=en-US&page=1`)
}
