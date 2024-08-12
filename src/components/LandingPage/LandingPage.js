import React from 'react'
import Navbar from '../Navbar'
import './landingPage.css'
import vector from '../Images/Vector 1.png'
import slide from '../Images/Group-2.png'
import scene1 from '../Images/Rectangle-8.png'
import scene2 from '../Images/Rectangle-7.png'
import scene3 from '../Images/Rectangle-6.png'
// import ExploreTour from '../ExploreTour'
import { Link } from 'react-router-dom';

function LandingPage() {
  var hh = ' '

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <h1>
          Explore
        <span class="underline"></span>
        {hh}The New World
        <br />
        With Tourbay
      </h1>
      <p>
        No matter where in the world you want to go, we can help get you there
        and make your tour a stupendous memory.
      </p>
        <button className="btn-2">
          <Link to="/ExploreTour" style={{ textDecoration: 'none' , color:'rgba(255, 255, 255, 1)'}}>Explore Tour</Link>
        {/* Explore Now */}
        </button>
      </div>
      <div>
        <img className='img-1' src={vector} alt="" />
        <img className='img-2' src={slide} alt="" />
        <img className='img-3' src={scene1} alt="" />
        <img className='img-4' src={scene2} alt="" />
        <img className='img-5' src={scene3} alt="" />
      </div>
    </>
  )
}
export default LandingPage
