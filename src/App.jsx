import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeRoutes from './Components/HomePageComponents/HomeRoutes'
import { Routes, Route } from 'react-router-dom'
import NavigationBar from './Components/NavigationBar/NavigationBar'
import Branding from './Components/OtherComponents/Branding/Branding'
import OurStory from './Components/OtherComponents/AboutUs/OurStory/OurStory'
function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomeRoutes />} />
        {/* <Route path="/aboutus" element={<AboutUs />} /> */}
        <Route path="/branding" element={<Branding />} />
        <Route path="/ourstory" element={<OurStory />} />
      </Routes>
    </>
  )
}

export default App
