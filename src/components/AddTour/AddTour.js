import React from 'react'
import Navbar from '../Navbar'
import './AddTour.css'
import tower from '../Images/tower.png';

function AddTour() {
  return (
    <>
      <div className='nav'>
        <Navbar />
      </div>
      <div className="head">
        <h1>Confirm Your Booking</h1>
      </div>
      <div className='confirm'>
        <p>name</p>
        <input type="text" />
        <p>Email</p>
        <input type="email" name="" id="" />
        <p>Phone</p>
        <input type="tel" name="" id="" />
        <p>Numbers of Adults</p>
        <input type="number" name="" id="" />
        <p>Numbers of childrens</p>
        <input type="number" name="" id="" />
        <p>Payment Method</p>
        <select>
          <option disabled selected>
            Select
          </option>
          <option  value="1">
            Visa Card
          </option>
          <option value="2">
            Sadapay
          </option>
          <option value="3">
            Cash
          </option>
        </select>
        <button><span>Confirm</span></button>
      </div>
      <img className='imgs' src={tower} alt="" />
    </>
  )
}
export default AddTour
