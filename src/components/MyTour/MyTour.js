import { React, useState } from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'
import './MyTour.css'
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
import Delete from '../Images/deleteicon.png'
import Deletepop from './Deletepop'

function MyTour() {
  // const card01 = {
  //   name: 'Pérez Art Museum Miami',
  // }
  // const card02 = {
  //   name: 'Hard Rock Stadium',
  // }
  // const card03 = {
  //   name: 'Matheson Hammock Park',
  // }
  // const card04 = {
  //   name: 'The Wharf Miami',
  // }
  // const card05 = {
  //   name: 'Miami Tower',
  // }
  // const card06 = {
  //   name: 'Skyviews Miami',
  // }
  const [showPopup, setShowPopup] = useState(false)
  const [tourName, setTourName] = useState("");
  // const [popupType, setPopupType] = useState('')
  const handleUpdateClick = () => {
    alert('Update button clicked!')
  }
  const handleDeleteClick = (newTourName) => {
    setTourName(newTourName);
    setShowPopup(true)
  }

  const handleCancel = () => {
    setShowPopup(false)
  }
  const handleDelete = () => {
    // Handle the delete action
    alert('Tour deleted!')
    // setShowPopup(false)
    setShowPopup(false)
  }
  return (
    <>
      <div className='nav'>
        <Navbar />
      </div>
      <div className="lower">
        <h1>Top Destination At "Miami"</h1>
        <button className='b'><img className='i' src={filter} alt="" /><span className='t'>Filter</span></button>
        <div className="saa">
          <div className="cart">
            <img className="building" src={building2} alt="building2" />
            <h1>Pérez Art Museum Miami</h1>
            <p className="p1">
              The Pérez Art Museum Miami —officially known as the Jorge M. Pérez
              Art Museum of Miami......
            </p>

            <img
              className="dustbin"
              onClick={handleDeleteClick}
              src={Delete}
              alt="deleteicon"
            />

            <button className="btn1" onClick={() =>handleDeleteClick("Pérez Art Museum Miami")}>
              <span className="btn-text">Details</span>
            </button>

            <button className="btn2" onClick={() =>handleDeleteClick("Pérez Art Museum Miami")}>
              <span className="btn-text">Update</span>
            </button>
            {showPopup && (
              <Deletepop
                tourName={tourName}  
                onCancel={handleCancel}
                onDelete={handleDelete}
                onUpdate={handleUpdateClick}
              />
            )}
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
          <div className="cart">
            <img className="building" src={building3} alt="building3" />
            <h1>Hard Rock Stadium</h1>
            <p className="p1">
              Hard Rock Stadium is a multi-purpose stadium located in Miami
              Gardens, Florida, a city......
            </p>

            <img
              className="dustbin"
              onClick={handleDeleteClick}
              src={Delete}
              alt="deleteicon"
            />

            <button className="btn1" onClick={() =>handleDeleteClick("Hard Rock Stadium")}>
              <span className="btn-text">Details</span>
            </button>

            <button className="btn2" onClick={() =>handleDeleteClick("Hard Rock Stadium")}>
              <span className="btn-text">Update</span>
            </button>
            {showPopup && (
              <Deletepop
                tourName={tourName}
                onCancel={handleCancel}
                onDelete={handleDelete}
                onUpdate={handleUpdateClick}
              />
            )}
            <div className="icon">
              <div className="first">
                <img className="price0" src={dollar} alt="dollar" />
                <p className="p2">$100 - $300</p>
              </div>
              <div className="second">
                <img className="clock0" src={clockicon} alt="clockicon" />
                <p className="p3">8 Days</p>
              </div>
            </div>
          </div>
          <div className="cart">
            <img className="building" src={building4} alt="building4" />
            <h1>Matheson Hammock Park</h1>
            <p className="p1">
              Matheson Hammock Park is a 630 acres urban park in metropolitan
              Miami at 9610 Old .....
            </p>

            <img
              className="dustbin"
              onClick={handleDeleteClick}
              src={Delete}
              alt="deleteicon"
            />

            <button className="btn1" onClick={() =>handleDeleteClick("Matheson Hammock Park")}>
              <span className="btn-text">Details</span>
            </button>

            <button className="btn2" onClick={() =>handleDeleteClick("Matheson Hammock Park")}>
              <span className="btn-text">Update</span>
            </button>
            {showPopup && (
              <Deletepop
                tourName={tourName}
                onCancel={handleCancel}
                onDelete={handleDelete}
                onUpdate={handleUpdateClick}
              />
            )}
                   <div className="icon">
              <div className="first">
                <img className="price0" src={dollar} alt="dollar" />
                <p className="p2">$160 - $300</p>
              </div>
              <div className="second">
                <img className="clock0" src={clockicon} alt="clockicon" />
                <p className="p3">10 Days</p>
              </div>
            </div>
          </div>
        </div>
        <div className="saa">
          <div className="cart">
            <img className="building" src={building5} alt="building" />
            <h1>The Wharf Miami</h1>
            <p className="p1">
              An all new outdoor pop-up event space anchored with live music,
              eats, cocktails.
            </p>
            <img
              className="dustbin"
              onClick={handleDeleteClick}
              src={Delete}
              alt="deleteicon"
            />

            <button className="btn1" onClick={() =>handleDeleteClick("The Wharf Miami")}>
              <span className="btn-text">Details</span>
            </button>

            <button className="btn2" onClick={() =>handleDeleteClick("The Wharf Miami")}>
              <span className="btn-text">Update</span>
            </button>
            {showPopup && (
              <Deletepop
                tourName={tourName}
                onCancel={handleCancel}
                onDelete={handleDelete}
                onUpdate={handleUpdateClick}
              />
            )}
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
          <div className="cart">
            <img className="building" src={building6} alt="building" />
            <h1>Miami Tower</h1>
            <p className="p1">
              The Miami Tower is a 47-story, landmark office skyscraper in
              Miami, Florida, United States.
            </p>
            <img
              className="dustbin"
              onClick={handleDeleteClick}
              src={Delete}
              alt="deleteicon"
            />

            <button className="btn1" onClick={() =>handleDeleteClick("Miami Tower")}>
              <span className="btn-text">Details</span>
            </button>

            <button className="btn2" onClick={() =>handleDeleteClick("Miami Tower")}>
              <span className="btn-text">Update</span>
            </button>
            {showPopup && (
              <Deletepop
                tourName={tourName}
                onCancel={handleCancel}
                onDelete={handleDelete}
                onUpdate={handleUpdateClick}
              />
            )}
            <div className="icon">
              <div className="first">
                <img className="price0" src={dollar} alt="dollar" />
                <p className="p2">$100 - $500</p>
              </div>
              <div className="second">
                <img className="clock0" src={clockicon} alt="clockicon" />
                <p className="p3">9 Days</p>
              </div>
            </div>
          </div>
          <div className="cart">
            <img className="building" src={building7} alt="building" />
            <h1>Skyviews Miami</h1>
            <p className="p1">
              Views of Biscayne Bay & the skyline from climate-controlled glass
              gondolas.
            </p>
            <img
              className="dustbin"
              onClick={handleDeleteClick}
              src={Delete}
              alt="deleteicon"
            />

            <button className="btn1" onClick={() =>handleDeleteClick("Skyviews Miami")}>
              <span className="btn-text">Details</span>
            </button>

            <button className="btn2" onClick={() =>handleDeleteClick("Skyviews Miami")}>
              <span className="btn-text">Update</span>
            </button>
            {showPopup && (
              <Deletepop
                tourName={tourName}
                onCancel={handleCancel}
                onDelete={handleDelete}
                onUpdate={handleUpdateClick}
              />
            )}
            <div className="icon">
              <div className="first">
                <img className="price0" src={dollar} alt="dollar" />
                <p className="p2">$80 - $250</p>
              </div>
              <div className="second">
                <img className="clock0" src={clockicon} alt="clockicon" />
                <p className="p3">5 Days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default MyTour
