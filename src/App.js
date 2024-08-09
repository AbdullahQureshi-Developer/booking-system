import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import AddTour from './components/AddTour/AddTour'
import Tour from './components/Tour'
import ExploreTour from './components/ExploreTour'
import MyTour from './components/MyTour'

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
          </Routes>
        </Router>
      </header>
    </div>
  )
}

export default App
