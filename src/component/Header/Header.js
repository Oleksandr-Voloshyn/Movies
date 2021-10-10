import React, {Component} from 'react';
import { Link} from "react-router-dom";

import './Header.css'
import Search from "../../Dodatok/Search/Search";




class Header extends Component {
  render() {
    return (
      <nav className='header'>
        <div className='menuButton'>
          <Link to='/' className="button"> Popular Movies </Link>
          <Link to='/saveMovies' > Save Movies</Link>
        </div>
          <Search/>
      </nav>
    );
  }
}

export default Header;
