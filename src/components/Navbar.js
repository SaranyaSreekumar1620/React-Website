import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
  <nav className='navbar'>
      <div className='container'>
      <div className='head-contact'>
                <a href='mailto:curryleafwellington@gmail.com'>
                    <i className='fa fa-envelope colorgreen'></i>
                    <span>info.curyleafwellington@gmail.com</span>
                </a>
                <a href='tel:04-478-3134'>
                <i className='fa fa-phone colorgreen'></i>
                    <span>04-478 3134</span>
                </a>
            </div>
          <div className='head-menu'>
            <a href='/Home'><img src='https://www.curryleaf.nz/assets/images/Curry-Leaf-logo.png' alt='logo'></img></a>
          </div>
          <div className='content'>
            <div className='nav'>
                <ul>
                    <li>
                        <Link to='/Home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/About'>About</Link>
                    </li>
                    <li>
                        <Link to='/Menu'>Menu</Link>
                    </li>
                    <li>
                        <Link to='/Gallery'>Gallery</Link>
                    </li>
                    <li>
                        <Link to='/Contact'>Contact</Link>
                    </li>
                </ul>
            </div>
            <h3 className='colorgreen1'>BOOK TABLE</h3>
        </div>

      </div>
    </nav>
  )
};

export default Navbar;
