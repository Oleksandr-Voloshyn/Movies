import React, {useEffect} from 'react'
import CardMovie from '../CardMovie'
import '../movies.css'
import Pagination from '../../../Dodatok/Pagination/Pagination'
import { withRouter } from 'react-router'

const SearcMovies = (props) => {

useEffect(() => {
    return () => {
        props.clearSearchMovies()
        
        
    }
}, [props.match.path])

    return (
    <div className='popular'>
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