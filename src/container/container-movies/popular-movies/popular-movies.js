import React, {useEffect} from 'react'
import '../container-movies.css'
import CardMovie from '../card-movie/card-movie'
import Pagination from '../../../dodatok/pagination/pagination'
import { withRouter } from 'react-router'

const PopularMovies = (props) => {
    
    return (
         <div className="popular">    
        {props.movies && 
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
        }
        </div>
        )
}

export default withRouter(PopularMovies);
