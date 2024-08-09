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
          <span className="line-1"></span>
          <div className="setDate">
            <img src={date} alt="Date" />
            <h1>Choose Date</h1>
            {/* <select> */}
            <input type="date" id="date" name="birthday"></input>
            {/* </select> */}
          </div>
          <span className="line-2"></span>
          <div className="setPrice">
            <img src={dollar} alt="Price" />
            <h1>Price Range</h1>
            <select>
              <option disabled selected>
                Choose Price
              </option>
              <option className="opt" value="1">
                $50 - $200
              </option>
              <option value="2">$200 - $400</option>
              <option value="3">$400 - $500</option>
              <option value="4">$500 - $750</option>
              <option value="4">$750 - $1000</option>
              <option value="4">$1000 Above</option>
            </select>
          </div>
        </div>
        <div className='footer'>
        <div className="search">
          <h1>Popular Search</h1>
          <div className="flist">
            <span>Istanbul</span>
            <span>Dubai</span>
            <span>Miami</span>
            <span>Chicago</span>
            <span>Dallas</span>
            <span>Havana</span>
            <span>Berlin</span>
            <span>London</span>
          </div>
          <div className="slist">
            <span>Ankara</span>
            <span>Orlando</span>
            <span className="ln">Cape Town</span>
            <span>Santroni</span>
            <span>Madrid</span>
            <span>Lisbon</span>
            <span className="ln">New Orleans</span>
          </div>
          </div>
          </div>
      </div>
    </>
  )
}
export default ExploreTour
