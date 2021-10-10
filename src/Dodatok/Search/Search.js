import React, {useState} from 'react';
import './Search.css'
import {connect} from "react-redux";
import {getSearchMovies} from "../../redux/popularMovies-reducer";
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
          {/* <img src={lupa} alt='' className='button' onClick={search}/> */}

    </div>
  );
}


export default connect(null, {getSearchMovies, })(withRouter(Search));

