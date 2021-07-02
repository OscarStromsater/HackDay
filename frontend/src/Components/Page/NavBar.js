import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar">

        <li className="navbar__link navbar__link--first">
          <Link to='/'>Home</Link>
        </li>
        <li className="navbar__link">
          <Link className="link" to='/restaurants'>Restaurants</Link>
        </li>
        <li className="navbar__link">
          <Link className="link" to='/bookings'>Bookings</Link>
        </li>
        <li className="navbar__link">
          <Link className="link" to='/profile'>Log out</Link>
        </li>
    </nav>
  )
}

export default NavBar;
