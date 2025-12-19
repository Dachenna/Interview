import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Login from './Components/Login.jsx'
import Dashboard from './Components/Dashboard.jsx'
import Footer from './Components/Footer.jsx'
import ScheduleModal from './Components/Appointments.jsx'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <BrowserRouter>
      <div>
        <Navbar onOpenSchedule={() => setIsModalOpen(true)} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
        <ScheduleModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </BrowserRouter>
  )
}

export default App
