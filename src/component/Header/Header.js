import React, {Component} from 'react';
import './Header.css'
import Search from "../Dodatok/Search/Search";
import {NavLink} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav className='header'>
        <div className='menuButton'>
          <NavLink to='/'> Popular Movies </NavLink>
          <NavLink to='/saveMovies' > Save Movies</NavLink>
        </div>

        <Search/>
      </nav>
    );
  }
}

export default Header;
