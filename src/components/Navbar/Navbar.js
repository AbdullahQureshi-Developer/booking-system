import React from 'react'
import Tourbay from './Images/Tourbay.png'
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav>
        <img src={Tourbay} alt="tourbay" />
        <ul>
          <span>
            <Link to="/">Tour</Link>
          </span>
          <span>
            <Link to="/AddTour">Add Tour</Link>
          </span>
          <span>
            <Link to="/Tour">My Tour</Link>
          </span>
        </ul>
        <button>Explore Now</button>
      </nav>
    </>
  )
}
export default Navbar
