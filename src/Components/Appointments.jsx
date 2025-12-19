import React, { useState } from 'react';
import { LuX } from "react-icons/lu";

const ScheduleModal = ({ isOpen, onClose, onSave }) => {
  // If isOpen is false, don't render anything
  if (!isOpen) return null;

  return (
    // Overlay Backdrop: bg-black/70 creates the darkened background effect
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      
      {/* Modal Container */}
      <div className="bg-[#1A1D21] border border-white/10 w-full max-w-lg rounded-2xl p-8 shadow-2xl relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <LuX size={24} />
        </button>

        <h2 className="text-2xl font-bold text-white mb-2">New Appointment</h2>
        <p className="text-gray-400 mb-6">Fill in the details to schedule a new appointment.</p>

        <form className="space-y-4">
          {/* Patient Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Patient Name</label>
            <input type="text" className="w-full bg-[#0D0F11] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-green-500" placeholder="e.g. John Doe" />
          </div>

          {/* Appointment Reason/Description */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Reason for appointment</label>
            <textarea className="w-full bg-[#0D0F11] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-green-500 h-24" placeholder="Brief description..." />
          </div>

          {/* Row for Date and Price */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Date</label>
              <input type="date" className="w-full bg-[#0D0F11] border border-white/10 rounded-lg p-3 text-white focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Price ($)</label>
              <input type="number" className="w-full bg-[#0D0F11] border border-white/10 rounded-lg p-3 text-white focus:outline-none" placeholder="0.00" />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 rounded-lg mt-4 transition-colors"
          >
            Schedule Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default ScheduleModal;