import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Appointments = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { doctor } = location.state || {};  // Retrieve doctor data passed from Doctors page

  if (!doctor) {
    navigate('/doctors'); // If no doctor data, redirect to Doctors page
    return null;
  }

  const [step, setStep] = useState(1); // Manage steps: 1 = appointment confirmation, 2 = success
  const [bookingStatus, setBookingStatus] = useState('idle'); // 'idle', 'pending', 'confirmed'

  const handleBookAppointment = () => {
    setBookingStatus('pending');
    // Simulate booking process
    setTimeout(() => {
      setBookingStatus('confirmed');
      setStep(2); // Move to the confirmation step
    }, 2000); // Simulate API call
  };

  const handleCancelBooking = () => {
    navigate('/doctors'); // Navigate back to Doctors page if user cancels
  }

  return (
    <div className="p-4 max-w-lg mx-auto text-center">
      <h2 className="text-2xl font-semibold">Appointment Details</h2>

      <div className="doctor-info mt-6">
        <div className="container">
          <img src={doctor.img} alt={doctor.title} className="w-32 h-32 mx-auto rounded-full" />
        </div>
        <h3>{doctor.title}</h3>
        <p><strong>Experience:</strong> {doctor.exp}</p>
        <p><strong>Designation:</strong> {doctor.designation}</p>
        <p><strong>Description:</strong> {doctor.description}</p>
        <p><strong>Languages:</strong> {doctor.lang}</p>
        <p><strong>Timings:</strong> {doctor.timing}</p>

        {/* Step 1: Confirm Appointment */}
        {step === 1 && bookingStatus === 'idle' && (
          <>
            <p>Are you sure you want to book an appointment with Dr. {doctor.title}?</p>
            <button
              onClick={handleBookAppointment}
              className="mt-3 py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
            >
              Book Appointment
            </button>
          </>
        )}

        {bookingStatus === 'pending' && <p>Booking your appointment...</p>}

        {/* Step 2: Show Confirmation */}
        {step === 2 && bookingStatus === 'confirmed' && (
          <p className="text-green-600 font-semibold">Your appointment with Dr. {doctor.title} has been confirmed!</p>
        )}
      </div>
    </div>
  );
};

export default Appointments;
