import React from 'react'
import Navbar from '../Navbar'
import './Explore.css'
import building from '../Images/building.png'
import date from '../Images/calender.png'
import location from '../Images/location.png'
import dollar from '../Images/$.png'

function ExploreTour() {
  return (
    <>
      <div>
        <div className="nav">
          <Navbar />
        </div>
        <img className="imgbuilding" src={building} alt="building" />
        <div className="booking">
          <div className="setlocation">
            <img src={location} alt="location" />
            <h1>Location</h1>
            <p>Where you want to go?</p>
          </div>
          <div className="setDate">
            <img src={date} alt="Date" />
            <h1>Choose Date</h1>
          </div>
          <div className="setPrice">
            <img src={dollar} alt="Price" />
            <h1>Price Range</h1>
          </div>
        </div>
      </div>
    </>
  )
}
export default ExploreTour
