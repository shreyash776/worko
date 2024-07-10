import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/NavBar'
import Signup from './components/SignUp'
import Login from './components/LogIn'
import Home from './components/Home'
import RequestedList from './components/RequestedList'
import ReferralPage from './components/ReferralPage'
import './App.css'

function App() {

  return (
    <>
     <div className="relative bg-custom-gradient min-h-screen overflow-y-hidden w-full">
   
     <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="requestedlist" element={<RequestedList />} />
            <Route path="referralpage" element={<ReferralPage />} />

      </Routes>
     </BrowserRouter>
     </div>
    </>
  )
}

export default App
