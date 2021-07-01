import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <li className="navbar__link">
          <Link to='/'>Home</Link>
        </li>
        <li className="navbar__link">
          <Link to='/restaurants'>Restaurants</Link>
        </li>
        <li className="navbar__link">
          <Link to='/bookings'>Bookings</Link>
        </li>
        <li className="navbar__link">
          <Link to='/profile'>Profile</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
