import React from 'react'
import '../container-popular-movies.css'
import CardMovie from '../card-movie/card-movie'
import Pagination from '../../../dodatok/pagination/pagination'
import { withRouter } from 'react-router'

const PopularMovies = (props) => {

    return (
        <div className="popular">    
            <div>
                <CardMovie
                    setSaveMovies={props.setSaveMovies}
                    movies={props.movies}
                    openFilm={props.openFilm}
                    allGenres={props.allGenres}
                    saveMovies={props.saveMovies}
                />
            </div>
            <div>
                <Pagination onPageChange={props.onPageChange}
                            currentPage={props.currentPage}
                        />
            </div>
        </div>
        )
}

export default withRouter(PopularMovies);
