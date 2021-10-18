import React, {useEffect} from 'react'
import { withRouter } from 'react-router'

import '../container-popular-movies.css'

import CardMovie from '../card-movie/card-movie'
import Pagination from '../../../dodatok/pagination/pagination'

const SearcMovies = (props) => {

useEffect(() => {
    return () => {
        props.clearSearchMovies()
        
        
    }
}, [props.match.path])

    return (
    <div className='popular-movies'>
        {props.movies && 
        <>
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
                <Pagination 
                    onPageChange={props.onPageChange}
                    currentPage={props.currentPage}
                />
            </div>
        </>
        }
    </div>
    )
}

export default withRouter(SearcMovies);