import React from 'react'
import Navbar from '../Navbar'
import './test.css'
import building2 from '../Images/building2.png'
import building201 from '../Images/building201.png'
import building202 from '../Images/building202.png'
import building203 from '../Images/building203.png'
import building204 from '../Images/building204.png'
import filter from '../Images/filter.png'
import dollar from '../Images/$.png'
import clockicon from '../Images/clockicon.png'
import building3 from '../Images/building3.png'
import building4 from '../Images/building4.png'
import building5 from '../Images/building5.png'
import building6 from '../Images/building6.png'
import building7 from '../Images/building7.png'
import { Link } from 'react-router-dom'
// import TourDetail from './TourDetail'
// import { useNavigate } from 'react-router-dom'

function Tour() {
  const card01 = {
    name: 'Pérez Art Museum Miami',
    image: [building2, building201, building202, building203, building204],
    para: `The Pérez Art Museum Miami —officially known as the Jorge M. Pérez Art Museum of Miami-Dade County—is a contemporary art museum that relocated in 2013 to the \n Museum Park in Downtown Miami, Florida.\n Founded in 1984 as the Center for the Fine Arts, it became known as the Miami Art Museum from 1996 until it was renamed in 2013 upon the opening its new building\ndesigned by Herzog & de Meuron at 1103 Biscayne Boulevard.\nPAMM, along with the \$275 million Phillip and Patricia Frost Museum of Science and a city park which are being built in the area with completion in 2017, is part of the 20-\nacre Museum Park.`,
  }
  const card02 = {
    name: 'Hard Rock Stadium',
    image: [building3, building201, building202, building203, building204],
    para: `The Hard Rock Stadium —officially known as the Jorge M.Hard Rock Sdatium County—is a contemporary art museum that relocated in 2016 to the \n Museum Park in Downtown Miami, Florida.\n Founded in 1984 as the Center for the Fine Arts, it became known as the Miami Art Museum from 1996 until it was renamed in 2013 upon the opening its new building\ndesigned by Herzog & de Meuron at 1103 Biscayne Boulevard.\nPAMM, along with the \$275 million Phillip and Patricia Frost Museum of Science and a city park which are being built in the area with completion in 2017, is part of the 20-\nacre Museum Park.`,
  }
  const card03 = {
    name: 'Matheson Hammock Park',
    image: [building4, building201, building202, building203, building204],
    para: `The Matheson Hammock Park —officially known as the Jorge M.Matheson Hammock Park County—is a contemporary art museum that relocated in 2016 to the \n Museum Park in Downtown Miami, Florida.\n Founded in 1984 as the Center for the Fine Arts, it became known as the Miami Art Museum from 1996 until it was renamed in 2013 upon the opening its new building\ndesigned by Herzog & de Meuron at 1103 Biscayne Boulevard.\nPAMM, along with the \$275 million Phillip and Patricia Frost Museum of Science and a city park which are being built in the area with completion in 2017, is part of the 20-\nacre Museum Park.`,
  }
  const card04 = {
    name: 'The Wharf Miami',
    image: [building5, building201, building202, building203, building204],
    para: `The Wharf Miami —officially known as the Jorge M. Wharf Miami Park County—is a contemporary art museum that relocated in 2016 to the \n Museum Park in Downtown Miami, Florida.\n Founded in 1984 as the Center for the Fine Arts, it became known as the Miami Art Museum from 1996 until it was renamed in 2013 upon the opening its new building\ndesigned by Herzog & de Meuron at 1103 Biscayne Boulevard.\nPAMM, along with the \$275 million Phillip and Patricia Frost Museum of Science and a city park which are being built in the area with completion in 2017, is part of the 20-\nacre Museum Park.`,
  }
  const card05 = {
    name: 'Miami Tower',
    image: [building5, building201, building202, building203, building204],
    para: `The Miami Tower —officially known as the Jorge M. Miami Tower Park County—is a contemporary art museum that relocated in 2016 to the \n Museum Park in Downtown Miami, Florida.\n Founded in 1984 as the Center for the Fine Arts, it became known as the Miami Art Museum from 1996 until it was renamed in 2013 upon the opening its new building\ndesigned by Herzog & de Meuron at 1103 Biscayne Boulevard.\nPAMM, along with the \$275 million Phillip and Patricia Frost Museum of Science and a city park which are being built in the area with completion in 2017, is part of the 20-\nacre Museum Park.`,
  }
  const card06 = {
    name: 'Skyviews Miami',
    image: [building5, building201, building202, building203, building204],
    para: `The Skyviews Miami —officially known as the Jorge M.Skyviews Miami County—is a contemporary art museum that relocated in 2016 to the \n Museum Park in Downtown Miami, Florida.\n Founded in 1984 as the Center for the Fine Arts, it became known as the Miami Art Museum from 1996 until it was renamed in 2013 upon the opening its new building\ndesigned by Herzog & de Meuron at 1103 Biscayne Boulevard.\nPAMM, along with the \$275 million Phillip and Patricia Frost Museum of Science and a city park which are being built in the area with completion in 2017, is part of the 20-\nacre Museum Park.`,
  }

  return (
    <>
      <div className="upper">
        <Navbar />
      </div>
      <div className="lower">
        <h1>Top Destination At "Miami"</h1>
        <button className='b'><img className='i' src={filter} alt="" /><span className='t'>Filter</span></button>

        <div className="cards">
          <div className="tour-card">
            <img className="building" src={building2} alt="building2" />
            <h1 className="h">Pérez Art Museum Miami</h1>
            <p className="p1">
              The Pérez Art Museum Miami —officially known as the Jorge M. Pérez
              Art Museum of Miami......
            </p>
            <Link
              to="/TourDetail"
              state={card01}
              style={{
                textDecoration: 'none',
                color: 'rgba(255, 255, 255, 1)',
              }}
            >
              <button>
                <span className="btn-text">View Details</span>
              </button>
            </Link>
            {/* <button onClick={() => showDetail()}><span className='btn-text'>View Details</span></button> */}
            <div className="icon">
              <div className="first">
                <img className="price0" src={dollar} alt="dollar" />
                <p className="p2">$50 - $200</p>
              </div>
              <div className="second">
                <img className="clock0" src={clockicon} alt="clockicon" />
                <p className="p3">3 Days</p>
              </div>
            </div>
          </div>
          <div className="tour-card">
            <img className="building" src={building3} alt="building3" />
            <h1 className="h">Hard Rock Stadium</h1>
            <p className="p1">
              Hard Rock Stadium is a multi-purpose stadium located in Miami
              Gardens, Florida, a city......
            </p>
            <Link
              to={'/TourDetail'}
              state={card02}
              style={{
                textDecoration: 'none',
                color: 'rgba(255, 255, 255, 1)',
              }}
            >
              <button>
                <span className="btn-text">View Details</span>
              </button>
            </Link>
            <div className="icon">
              <div className="first">
                <img className="price0" src={dollar} alt="dollar" />
                <p className="p2">$60 - $300</p>
              </div>
              <div className="second">
                <img className="clock0" src={clockicon} alt="clockicon" />
                <p className="p3">6 Days</p>
              </div>
            </div>
          </div>
          <div className="tour-card">
            <img className="building" src={building4} alt="building4" />
            <h1 className="h">Matheson Hammock Park</h1>
            <p className="p1">
              Matheson Hammock Park is a 630 acres urban park in metropolitan
              Miami at 9610 Old .....
            </p>
            <Link
              to={'/TourDetail'}
              state={card03}
              style={{
                textDecoration: 'none',
                color: 'rgba(255, 255, 255, 1)',
              }}
            >
              <button>
                <span className="btn-text">View Details</span>
              </button>
            </Link>
            <div className="icon">
              <div className="first">
                <img className="price0" src={dollar} alt="dollar" />
                <p className="p2">$250 - $800</p>
              </div>
              <div className="second">
                <img className="clock0" src={clockicon} alt="clockicon" />
                <p className="p3">15 Days</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="tour-card">
            <img className="building" src={building5} alt="building" />
            <h1 className="h">The Wharf Miami</h1>
            <p className="p1">
              An all new outdoor pop-up event space anchored with live music,
              eats, cocktails.
            </p>
            <Link
              to={'/TourDetail'}
              state={card04}
              style={{
                textDecoration: 'none',
                color: 'rgba(255, 255, 255, 1)',
              }}
            >
              <button>
                <span className="btn-text">View Details</span>
              </button>
            </Link>
              <div className='icon'>
              <div className="first">
                <img className="price0" src={dollar} alt="dollar" />
                <p className="p2">$90 - $250</p>
              </div>
              <div className="second">
                <img className="clock0" src={clockicon} alt="clockicon" />
                <p className="p3">5 Days</p>
              </div>
            </div>
          </div>
          {/* <Link to="./TourDetail.js"> */}
          <div className="tour-card">
            <img className="building" src={building6} alt="building" />
            <h1 className="h">Miami Tower</h1>
            <p className="p1">
              The Miami Tower is a 47-story, landmark office skyscraper in
              Miami, Florida, United States.
            </p>
            <Link
              to={'/TourDetail'}
              state={card05}
              style={{
                textDecoration: 'none',
                color: 'rgba(255, 255, 255, 1)',
              }}
            >
              <button>
                <span className="btn-text">View Details</span>
              </button>
            </Link>
            <div className="icon">
              <div className="first">
                <img className="price0" src={dollar} alt="dollar" />
                <p className="p2">$150 - $500</p>
              </div>
              <div className="second">
                <img className="clock0" src={clockicon} alt="clockicon" />
                <p className="p3">9 Days</p>
              </div>
            </div>
          </div>
          <div className="tour-card">
            <img className="building" src={building7} alt="building" />
            <h1 className="h">Skyviews Miami</h1>
            <p className="p1">
              Views of Biscayne Bay & the skyline from climate-controlled glass
              gondolas.
            </p>
            <Link
              to={'/TourDetail'}
              state={card06}
              style={{
                textDecoration: 'none',
                color: 'rgba(255, 255, 255, 1)',
              }}
            >
              <button>
                <span className="btn-text">View Details</span>
              </button>
            </Link>
            <div className="icon">
              <div className="first">
                <img className="price0" src={dollar} alt="dollar" />
                <p className="p2">$70 - $300</p>
              </div>
              <div className="second">
                <img className="clock0" src={clockicon} alt="clockicon" />
                <p className="p3">7 Days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Tour
