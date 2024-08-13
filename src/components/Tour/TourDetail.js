import React from 'react'
import Navbar from '../Navbar'
import { useLocation } from 'react-router-dom'
import './TourDetail.css'
import tick from '../Images/tick.png'
import cloud from '../Images/cloud.png'
import sun from '../Images/sun.png'


function TourDetail() {
  const location = useLocation()
  const { state } = location
  const { name, image, para } = state || {}

  return (
    <>
      {/* <div className='page'> */}
        <div className='nav' >
          <Navbar />
        </div>
        {name && para && (
          <div className="sec-1">
            <h1>{name}</h1>
            {image && image.length > 0 && (
              <div className='pic'>
                {image.map((image, index) => {
                  const className = `image image${index + 1}`
                  return (
                    <img
                      key={index}
                      src={image}
                      alt={`Profile ${index + 1}`}
                      className={className} 
                    />
                  )
                })}
              </div>
            )}
            <p>{para}</p>
            <div className="sec-2" l>
              <h2>What's Included</h2>
              <div className="el1">
                <h1>Destination</h1>
                <h2>Miami</h2>
              </div>
              <div className="el2">
                <h1>Departure Location</h1>
                <h2>2000 Brush St, Detroit, MI 48226, United States</h2>
              </div>
              <div className="el3">
                <h1>Return</h1>
                <h2>7:00PM on Day 3</h2>
              </div>
              <div className="el4">
                <h1>Return</h1>
                <div className="i1">
                  <img src={tick} alt="" />
                  <h2>Basic first aid kit</h2>
                </div>
                <div className="i2">
                  <img src={tick} alt="" />
                  <h2>Comfortable Private Booked Transport</h2>
                </div>
                <div className="i3">
                  <img src={tick} alt="" />
                  <h2>Fuel Expense</h2>
                </div>
                <div className="i4">
                  <img src={tick} alt="" />
                  <h2>Mess Tent, Kitchen Utensils, and Cook</h2>
                </div>
                <div className="i5">
                  <img src={tick} alt="" />
                  <h2>Detail Guided Maps</h2>
                </div>
                <div className="i6">
                  <img src={tick} alt="" />
                  <h2>Waterproof Tents on twin/triple Sharing</h2>
                </div>
              </div>
            </div>
            <div className="sec-3">
              <h1>Itinerary Schedule</h1>
              <div className="box">
                <div className="box1">
                  <div className="fl">
                  <h1>Day 1</h1>
                  <img src={sun} alt="" />
                    <h2>18*C</h2>
                  </div>
                  <ul>
                    <li>Tours with American Sign Language</li>
                    <li>Audio description group tours</li>
                    <li>Large-print gallery notes</li>
                    <li>Launch included.</li>
                  </ul>
                </div>
                <div className="box1">
                  <div className="fl">
                  <h1>Day 2</h1>
                  <img src={cloud} alt="" />
                    <h2>14*C</h2>
                  </div>
                  <ul>
                    <li>Tours with American Sign Language</li>
                    <li>Audio description group tours</li>
                    <li>Large-print gallery notes</li>
                    <li>Launch included.</li>
                  </ul>
                </div>
                <div className="box1">
                  <div className="fl">
                  <h1>Day 3</h1>
                  <img src={sun} alt="" />
                    <h2>17*C</h2>
                  </div>
                  <ul>
                    <li>Tours with American Sign Language</li>
                    <li>Audio description group tours</li>
                    <li>Large-print gallery notes</li>
                    <li>Launch included.</li>
                  </ul>
                </div>
              </div>
              <button><span className='btn-text'>Book Now</span></button>
            </div>
          </div>
        )}
    </>
  )
}
export default TourDetail
