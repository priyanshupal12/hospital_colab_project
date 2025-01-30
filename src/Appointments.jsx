import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Appointments = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { doctor } = location.state || {};

  if (!doctor) {
    navigate('/doctors');
    return null;
  }

  const [step, setStep] = useState(1);
  const [bookingStatus, setBookingStatus] = useState('idle');

  const handleBookAppointment = () => {
    setBookingStatus('pending');
    setTimeout(() => {
      setBookingStatus('confirmed');
      setStep(2);
    }, 2000);
  };

  const handleCancelBooking = () => {
    navigate('/doctors');
  };

  return (
    <section className="p-4 md:p-6 lg:p-8 max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Appointment Details</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Doctor Information */}
          <div className="md:border-r border-gray-200 pr-6">
            <div className="flex flex-col items-center mb-6">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-center">{doctor.name}</h3>
              <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mt-2">
                {doctor.age}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-700">Designation</p>
                <p className="text-sm text-gray-600">{doctor.designation}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Languages</p>
                <p className="text-sm text-gray-600">{doctor.lang}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Availability</p>
                <p className="text-sm text-gray-600">{doctor.timing}</p>
              </div>
            </div>
          </div>

          {/* Appointment Confirmation */}
          <div className="flex flex-col justify-between">
            {step === 1 && (
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Confirm Details</h3>
                  <p className="text-sm text-gray-600">
                    Please review the doctor's information and confirm your appointment
                  </p>
                </div>

                {bookingStatus === 'idle' && (
                  <div className="text-center">
                    <button
                      onClick={handleBookAppointment}
                      className="w-full py-3 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                    >
                      Confirm Appointment
                    </button>
                    <button
                      onClick={handleCancelBooking}
                      className="mt-4 text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
                    >
                      Choose Different Doctor
                    </button>
                  </div>
                )}

                {bookingStatus === 'pending' && (
                  <div className="text-center space-y-4">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
                    <p className="text-sm text-gray-600">Processing your appointment...</p>
                  </div>
                )}
              </div>
            )}

            {step === 2 && (
              <div className="text-center space-y-6">
                <div className="inline-block bg-green-100 p-4 rounded-full">
                  <svg 
                    className="w-12 h-12 text-green-600" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Appointment Confirmed!</h3>
                <p className="text-sm text-gray-600">
                  Your appointment with {doctor.title} has been successfully booked
                </p>
                <button
                  onClick={handleCancelBooking}
                  className="w-full py-3 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  Back to Doctors
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointments;