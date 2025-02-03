import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function Doctors() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    city: '',
    specialty: '',
    gender: '',
  });
  
  // State for API data
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('https://6798c2efbe2191d708b0c161.mockapi.io/hospital/users');
        if (!response.ok) throw new Error('Failed to fetch doctors');
        const data = await response.json();
        console.log('API Response Data:', data);
        setDoctors(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
      
    };

    fetchDoctors();
  }, []);

  // Dynamic filters from API data
  const CITIES = useMemo(() => [...new Set(doctors.map(doctor => doctor.location))], [doctors]);
  const SPECIALTIES = useMemo(() => [...new Set(doctors.map(doctor => doctor.specialty))], [doctors]);
  const GENDERS = useMemo(() => [...new Set(doctors.map(doctor => doctor.gender))], [doctors]);

  const filteredDoctors = useMemo(() => {
    return doctors.filter(doctor => (
      (!filters.city || doctor.location === filters.city) &&
      (!filters.specialty || doctor.specialty === filters.specialty) &&
      (!filters.gender || doctor.gender === filters.gender)
    ));
  }, [filters, doctors]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  const handleBookAppointment = (doctor) => {
    navigate('/appointments', { state: { doctor } });
  };

  return (
    <section className="p-4 md:p-6 lg:p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filters Section */}
        <div className="md:col-span-1 space-y-6">
          <h1 className="text-xl font-semibold mb-4">Filters</h1>
          <SelectFilter
            label="City"
            options={CITIES}
            value={filters.location}
            onChange={(value) => handleFilterChange('city', value)}
          />
          <SelectFilter
            label="Specialty"
            options={SPECIALTIES}
            value={filters.specialty}
            onChange={(value) => handleFilterChange('specialty', value)}
          />
          <SelectFilter
            label="Gender"
            options={GENDERS}
            value={filters.gender}
            onChange={(value) => handleFilterChange('gender', value)}
          />
        </div>

        {/* Doctors List */}
        <div className="md:col-span-3">
          <h2 className="text-2xl font-semibold mb-6">Best Doctors in India</h2>
          {isLoading ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500">Loading doctors...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-red-500">{error}</p>
            </div>
          ) : filteredDoctors.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500">No doctors found matching your filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {filteredDoctors.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  doctor={doctor}
                  onBookAppointment={handleBookAppointment}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Update the SelectFilter component's option mapping
const SelectFilter = ({ label, options, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <select
      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">All {label}</option>
      {options.map((option, index) => (
        <option key={`${label}-${option}-${index}`} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const DoctorCard = ({ doctor, onBookAppointment }) => (
  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
    <div className="p-4 flex flex-col md:flex-row gap-4">
      <img
        src={doctor.image}
        alt={`${doctor.name} profile`}
        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-2">{doctor.name}</h3>
        <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-2">
          {doctor.age}
        </span>
        <p className="text-sm text-gray-600 mb-2">{doctor.designation}</p>
        <p className="text-sm text-gray-700 mb-2">{doctor.description}</p>
        <p className="text-sm text-gray-600">{doctor.language}</p>
      </div>
      <div className="border-l border-gray-200 md:mx-4" />
      <div className="flex flex-col items-center justify-center space-y-2 min-w-[120px]">
        <div className="text-center">
          <p className="text-sm font-medium">{doctor.timing}</p>
        </div>
        <button
          onClick={() => onBookAppointment(doctor)}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm"
          aria-label={`Book appointment with ${doctor.name}`}
        >
          Book Now
        </button>
      </div>
    </div>
  </div>
  
);

export default Doctors;