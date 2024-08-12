import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import AddTour from './components/AddTour/AddTour'
import {Tour, TourDetail} from './components/Tour'
import ExploreTour from './components/ExploreTour'
import MyTour from './components/MyTour'
import NotFound from './components/ExploreTour/NotFound'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" Component={LandingPage} />
            <Route path="/AddTour" Component={AddTour} />
            <Route path="/Tour" Component={Tour} />
            <Route path="/MyTour" Component={MyTour} />
            <Route path="/ExploreTour" Component={ExploreTour} />
            <Route path="/TourDetail" Component={TourDetail} />
            <Route path="/NotFound" Component={NotFound} />
          </Routes>
        </Router>
      </header>
    </div>
  )
}

export default App
