import React from 'react'
import Navbar from '../Navbar'
import undraw from '../Images/undraw.png'
import './NotFound.css'

function NotFound() {
  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <div className="page">
        <h1>Top Destinatiojn at "Miami</h1>
        <img src={undraw} alt="files" />
        <p>Sorry, We didn’t found any tour right now at “Miami”</p>
      </div>
    </>
  )
}
export default NotFound
