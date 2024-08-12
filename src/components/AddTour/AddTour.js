import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import './AddTour.css'
import tower from '../Images/tower.png'

function AddTour() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [adults, setAdults] = useState('')
  const [children, setChildren] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
  const [errors, setErrors] = useState({})
  const [isFormValid, setIsFormValid] = useState(false)
  const [areaCode, setAreaCode] = useState('+1')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    validateForm()
  }, [name, email, phone, adults, children, paymentMethod])

  const validateForm = () => {
    const newErrors = {}

    const namePattern = /^[A-Za-z\s-]+$/
    if (!namePattern.test(name) || name.length > 50) {
      newErrors.name =
        'Name must contain only alphabets, spaces, hyphens and be up to 50 characters.'
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailPattern.test(email)) {
      newErrors.email = 'Invalid email format.'
    }

    const phonePattern = /^\d{11}$/
    if (!phonePattern.test(phone)) {
      newErrors.phone = 'Phone number must be 11 digits.'
    }

    const numberPattern = /^[1-9]$/
    if (!numberPattern.test(adults)) {
      newErrors.adults = 'Number of adults must be between 1 and 9.'
    }

    if (children && !numberPattern.test(children)) {
      newErrors.children = 'Number of children must be between 1 and 9.'
    }

    if (!paymentMethod) {
      newErrors.paymentMethod = 'Payment method is required.'
    }

    setErrors(newErrors)
    setIsFormValid(Object.keys(newErrors).length === 0)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (isFormValid) {
      alert('Form submitted successfully!')
    }
  }
  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <div className="head">
        <h1>Confirm Your Booking</h1>
      </div>
      <div className="confirm">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
          </div>
          <div>
            <label>Phone</label>
            <div className="phone-input-container">
              <select
                className="area-code-select"
                value={areaCode}
                onChange={(e) => setAreaCode(e.target.value)}
              >
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+91">+91</option>
              </select>
              <input
                type="text"
                className="phone-number-input"
                placeholder="205 2526 678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
          </div>
          <div>
            <label>Numbers of Adults</label>
            <input
              type="text"
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
            />
            {errors.adults && (
              <div style={{ color: 'red' }}>{errors.adults}</div>
            )}
          </div>

          <div>
            <label>Numbers of Children</label>
            <input
              type="text"
              value={children}
              onChange={(e) => setChildren(e.target.value)}
            />
            {errors.children && (
              <div style={{ color: 'red' }}>{errors.children}</div>
            )}
          </div>

          <div>
            <label>Payment Method</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="" disabled selected>
                Select a payment method
              </option>
              <option value="Master Card">Master Card</option>
              <option value="Visa">Visa</option>
            </select>
            {errors.paymentMethod && (
              <div style={{ color: 'red' }}>{errors.paymentMethod}</div>
            )}
          </div>

          <button type="submit" disabled={!isFormValid}>
            <span>Confirm</span>
          </button>
        </form>
      </div>
      <img className="imgs" src={tower} alt="" />
    </>
  )
}
export default AddTour
