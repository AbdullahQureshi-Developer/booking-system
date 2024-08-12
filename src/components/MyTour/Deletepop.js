// DeletePopup.js
import React from 'react'
import './DeletePopup.css'

const Deletepop = ({ tourName, onCancel, onDelete }) => {
  // const Tourname = { tourName };
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Delete Tour</h2>
        <p>
          Are you sure you want to delete
          <strong>{" "+tourName+" "}</strong>?
          
        </p>
        <div className="popup-actions">
          <button className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
          <button className="delete-button" onClick={onDelete}>
            Delete
          </button>
          {/* <button className="update-button" onClick={onUpdate}>
            Update
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default Deletepop
