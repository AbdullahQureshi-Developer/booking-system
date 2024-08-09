import React from 'react'
import Navbar from '../Navbar'
import './Tour.css'
import building2 from '../Images/building2.png'
// import dollar from '../Images/$.png'
// import clockicon from '../Images/clockicon.png'
import building3 from '../Images/building3.png'
import building4 from '../Images/building4.png'
import building5 from '../Images/building5.png'
import building6 from '../Images/building6.png'
import building7 from '../Images/building7.png'


function Tour() {
  return (
    <>
      <div className="upper">
        <Navbar />
      </div>
      <div className="lower">
        <h1>Top Destination At "Miami"</h1>
        <div className="cards">
          <div className="card">
            <img className="building" src={building2} alt="building2" />
            <h1>Pérez Art Museum Miami</h1>
            <p className="p1">
              The Pérez Art Museum Miami —officially known as the Jorge M. Pérez
              Art Museum of Miami......
            </p>
            {/* <img className="price0" src={dollar} alt="dollar" />
          <p className="p2">$50 - $200</p>
          <img className="clock0" src={clockicon} alt="clockicon" />
          <p className="p3">3 Days</p> */}
          </div>
          <div className="card">
            <img className="building" src={building3} alt="building3" />
            <h1>Hard Rock Stadium</h1>
            <p className="p1">
              Hard Rock Stadium is a multi-purpose stadium located in Miami
              Gardens, Florida, a city......
            </p>
            {/* <img className="price1" src={dollar} alt="dollar" />
          <p className="p22">$50 - $200</p>
          <img className="clock1" src={clockicon} alt="clockicon" />
          <p className="p33">3 Days</p> */}
          </div>
          <div className="card">
            <img className="building" src={building4} alt="building4" />
            <h1>Matheson Hammock Park</h1>
            <p className="p1">
              Matheson Hammock Park is a 630 acres urban park in metropolitan
              Miami at 9610 Old .....
            </p>
            {/* <img className="price1" src={dollar} alt="dollar" />
          <p className="p22">$50 - $200</p>
          <img className="clock1" src={clockicon} alt="clockicon" />
          <p className="p33">3 Days</p> */}
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <img className="building" src={building5} alt="building" />
            <h1>Pérez Art Museum Miami</h1>
            <p className="p1">
              The Pérez Art Museum Miami —officially known as the Jorge M. Pérez
              Art Museum of Miami......
            </p>
            {/* <img className="price0" src={dollar} alt="dollar" />
          <p className="p2">$50 - $200</p>
          <img className="clock0" src={clockicon} alt="clockicon" />
          <p className="p3">3 Days</p> */}
          </div>
          <div className="card">
            <img className="building" src={building6} alt="building" />
            <h1>Hard Rock Stadium</h1>
            <p className="p1">
              Hard Rock Stadium is a multi-purpose stadium located in Miami
              Gardens, Florida, a city......
            </p>
            {/* <img className="price1" src={dollar} alt="dollar" />
          <p className="p22">$50 - $200</p>
          <img className="clock1" src={clockicon} alt="clockicon" />
          <p className="p33">3 Days</p> */}
          </div>
          <div className="card">
            <img className="building" src={building7} alt="building" />
            <h1>Matheson Hammock Park</h1>
            <p className="p1">
              Matheson Hammock Park is a 630 acres urban park in metropolitan
              Miami at 9610 Old .....
            </p>
            {/* <img className="price1" src={dollar} alt="dollar" />
          <p className="p22">$50 - $200</p>
          <img className="clock1" src={clockicon} alt="clockicon" />
          <p className="p33">3 Days</p> */}
          </div>
        </div>
      </div>
    </>
  )
}
export default Tour
