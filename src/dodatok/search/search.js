import React, {useState} from 'react';
import './search.css'
import {connect} from "react-redux";
import {getSearchMovies} from "../../redux/popular-movies-reducer";
import { withRouter } from 'react-router';


const Search = (props) => {
  const [value, setValue] = useState('');
  let search = () => {
    props.getSearchMovies(value)
    setValue('')
    props.history.push("/search")
  }

  return (
    <div className='search'>

        <input type="text"
               className='input'
               value={value}
               onChange={(e) => setValue(e.target.value)}
               placeholder="Search"
        />
        <button className='buttonSearch' onClick={search}> Search </button>

    </div>
  );
}


export default connect(null, {getSearchMovies })(withRouter(Search));

