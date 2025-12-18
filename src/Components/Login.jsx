import React from 'react'
import { useState } from 'react'
import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import LBanner from '../assets/login-banner.png';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    // Handle login logic here
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
  }

 return(
  <main className='main'>
    <div className=" relative flex h-screen w-full">

      {/* Left Side: Login Form */}
      <div className="flex w-full items-center justify-center px-8 md:w-1/2 lg:px-24">
        <div className="w-full max-w-md">
           <div className='m-auto'>
             <h2 className='text-xl family-plus-bold font-bold'>Hi there, . . . </h2>
             <p className="text-sm">Get started with Appointments.</p>
           </div>
             
           <form className="space-y-6">
          
             {/* Full Name */}
           <div className="space-y-2 mb-9">
            <label className="text-xs font-medium text-gray-400 " >Full name</label>
              <div className="relative">
              <CiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[#ABB8C4] w-5 h-5" />
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full bg-[#1A1D21] border border-[#363A3D] rounded-md py-3 pl-10 pr-4 focus:outline-none focus:border-[#24AE7C] transition-colors"
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#ABB8C4]">Email address</label>
            <div className="relative">
              <CiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#ABB8C4] w-5 h-5" />
              <input 
                type="email" 
                placeholder="johndoe@gmail.com"
                className="w-full bg-[#1A1D21] border border-[#363A3D] rounded-md py-3 pl-10 pr-4 focus:outline-none focus:border-[#24AE7C] transition-colors"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <label className="text-sm font-medium py-2 text-[#ABB8C4]">Phone number</label>
            <div className="relative">
              <FaPhoneAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-[#ABB8C4] w-5 h-5" />
              <input 
                type="tel" 
                placeholder="+1 234 567 890"
                className="w-full bg-[#1A1D21] border border-[#363A3D] rounded-md py-3 pl-10 pr-4 focus:outline-none focus:border-[#24AE7C] transition-colors"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-[#24AE7C] hover:bg-[#1f946a] text-white font-semibold py-3 rounded-md transition-colors"
          >
            Get Started
          </button>
        </form>
        </div>
      </div>
      {/* Right Side: Image */} 

      <div className="relative -top-10 hidden  md:flex  h-150 w-180 md:w-1/2 ">
        <img src={LBanner} alt="Login Banner" className='  rounded ' />
      </div>
    </div>
  </main>
 )
}

export default Login
