import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeRoutes from './Components/HomePageComponents/HomeRoutes'
import { Routes, Route } from 'react-router-dom'
import NavigationBar from './Components/NavigationBar/NavigationBar'
function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomeRoutes />} />
      </Routes>
    </>
  )
}

export default App
