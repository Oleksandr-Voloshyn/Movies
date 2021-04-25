import React, {useState} from 'react';
import './Search.css'
import lupa from '../../../image/loupe.svg'
import {connect} from "react-redux";
import {getSearchMovies} from "../../../redux/popularMovies-reducer";


const Search = (props) => {
  const [value, setValue] = useState('');
  let search = () => {
    props.getSearchMovies(value)
  }

  return (
    <div className='search'>

        <input type="text"
               className='input'
               value={value}
               onChange={(e) => setValue(e.target.value)}
               placeholder="Search"
        />
        <img src={lupa} alt='' className='button' onClick={search}/>

    </div>
  );
}


export default connect(null, {getSearchMovies})(Search);

