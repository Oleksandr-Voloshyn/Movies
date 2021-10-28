import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import {getMovieByGenre} from '../../redux/movies-by-genres-reducer'
import './sidebar-genres.css'

import {setGenreId} from '../../redux/movies-by-genres-reducer'




const ViewGenre = ({genre, genresId}) => {
    
    const [electGenre, setElectGenre] = useState(false)
    useEffect(() => {
        setElectGenre(false)
    
    }, [genresId])

    const chooseGenre = (id) => {
       (genresId.includes(id)) ? genresId.splice(genresId.indexOf(id), 1) : genresId.push(id)
        setElectGenre(!electGenre)
    }
    return(
            <span 
                key={genre.id}
                onClick={() => chooseGenre(genre.id)}
                className={(electGenre ? 'elect' : 'no-elect')}
                >{genre.name} 
            </span>
    )
}

const SidebarGenres = ({allGenres, getMovieByGenre, setGenreId, ...props}) => {

    let genresId = [];

    const movieGenre = (id) => {
        setGenreId(id)
        getMovieByGenre(id);
        props.history.push('/moviesByGenre')
    }

        return (
            <div className='menu'>
                <h2 className="title-genres">Genres</h2>
                {allGenres.map(genre => {
                return (
                    <ViewGenre key={genre.id} genre={genre} genresId={genresId}/>

                )})}
            <div className='button-search-by-genres'>
                <button
                className='button-ads' 
                onClick={() => movieGenre(genresId)}> Search</button>
            </div>
                </div>
        )
    }

    const mapstateToProps = (state) => {
        return {
            allGenres: state.popularMovies.allGenres,
        }
    }

export default connect(mapstateToProps,{getMovieByGenre, setGenreId})(withRouter(SidebarGenres));

