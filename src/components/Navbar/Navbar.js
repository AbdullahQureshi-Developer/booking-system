import React from 'react'
import Tourbay from '../Images/Tourbay.png'
import './navbar.css'
import { Link } from 'react-router-dom'
// import ExploreTour from '../ExploreTour'

function Navbar() {

  return (
    <>
      <nav>
        <img src={Tourbay} alt="tourbay" />
        <ul>
          <div>
            <Link className='link-1' to="/" >Tour</Link>
          </div>
          <div>
            <Link className='link-1' to="/AddTour" >Add Tour</Link>
          </div>
          <div>
            <Link className='link-1' to="/Tour" >My Tour</Link>
          </div>
        </ul>
        <div>
          <button id='btn' className='btn-1' ><Link to='/ExploreTour' style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 1)' }}>Explore Now</Link></button>
          </div>
      </nav>
    </>
  )
}
export default Navbar
