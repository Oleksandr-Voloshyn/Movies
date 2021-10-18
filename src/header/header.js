import React, {Component} from 'react';
import { Link} from "react-router-dom";

import './header.css'
import Search from '../dodatok/search/search.js';



class Header extends Component {
  render() {
    return (
      <nav className='header'>
        <div className='menu-button'>
          <Link to='/' className="button"> Popular Movies </Link>
          <Link to='/saveMovies' > Save Movies</Link>
        </div>
          <Search/>
      </nav>
    );
  }
}

export default Header;
