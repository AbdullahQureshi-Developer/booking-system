import React from 'react'
import Navbar from '../Navbar'
import { useLocation } from 'react-router-dom'
import './TourDetail.css'
import tick from '../Images/tick.png'

function TourDetail() {
  const location = useLocation()
  const { state } = location
  const { name, image, para } = state || {}

  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        {name && para && (
          <div className="sec-1">
            <h1>{name}</h1>
            {image && image.length > 0 && (
              <div>
                {image.map((image, index) => {
                  // Create a class name based on the index
                  const className = `image image${index + 1}`
                  return (
                    <img
                      key={index}
                      src={image}
                      alt={`Profile ${index + 1}`}
                      className={className} // Apply the class name
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
                <img src={tick} alt="" />
                <h2>d</h2>
                <img src={tick} alt="" />
                <h2>g</h2>
                <img src={tick} alt="" />
                <h2>k</h2>
                <img src={tick} alt="" />
                <h2>g</h2>
                <img src={tick} alt="" />
                <h2>h</h2>
                <img src={tick} alt="" />
                <h2>h</h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
export default TourDetail
