import React, {useEffect} from 'react'
import { withRouter } from 'react-router'

import '../container-movies.css'

import CardMovie from '../card-movie/card-movie'
import Pagination from '../../../dodatok/pagination/pagination'

const MoviesByGenres = (props) => {

    return (
    <div className='popular-movies'>
        <>
            <div>
                <CardMovie
                    movies={props.movies}
                />
            </div>
            <div>
                <Pagination 
                    onPageChange={props.onPageChange}
                    currentPage={props.currentPage}
                />
            </div>
        </>
    </div>
    )
}

export default withRouter(MoviesByGenres);