import React, {useEffect} from 'react'
import '../movies.css'
import CardMovie from '../CardMovie'
import Pagination from '../../../Dodatok/Pagination/Pagination'
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
