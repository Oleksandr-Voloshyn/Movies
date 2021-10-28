import React, {Component} from 'react';
import { Link} from "react-router-dom";

import './header.css'
import Search from '../dodatok/search/search.js';



class Header extends Component {
  render() {
    return (
      <nav className='header'>
        <div className='menu-button'>
          <div className='buttons-margin'>
          <Link to='/' className="button-header"> Popular Movies </Link>
          <Link to='/saveMovies' className="button-header"> Save Movies</Link>
          </div>
        </div>
          <Search/>
      </nav>
    );
  }
}

export default Header;
