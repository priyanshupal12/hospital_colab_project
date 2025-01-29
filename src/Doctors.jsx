import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Doctors() {
  const navigate = useNavigate();
  // const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [cityFilter, setCityFilter] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const info = [
    {
      img: 'https://cdn.askapollo.com/live/images/doctors/internal-medicine/dr-venkata-rao-abbineni-internal-medicine-in-hyderabad.png',
      title: 'Dr Venkata Rao Abbineni',
      exp: '40 years, Internal Medicine',
      designation: 'MBBS, MD',
      description: 'Dr Venkata Rao Abbineni is an experienced Interventional Internal Medicine specialist based in Hyderabad.',
      lang: 'English, Telugu',
      city: 'Kolkata',
      specialty: 'cardiology',
      gender: 'Male',
      timing: 'Mon-Sat: 9 AM - 5 PM',
    },
    {
      img: 'https://cdn.askapollo.com/live/images/doctors/internal-medicine/dr-rajib-paul-internal-medicine-in-hyderabad.png',
      title: 'Dr Rajib Paul',
      exp: '20 years, Internal Medicine',
      designation: 'MBBS; MD (General Medicine)',
      description: 'Dr Rajib Paul is an experienced Internal Medicine specialist based in Hyderabad.',
      lang: 'English, Hindi, Telugu, Tamil',
      city: 'Lacknow',
      specialty: 'orthopedics',
      gender: 'Male',
      timing: 'Mon-Sat: 9 AM - 5 PM',
    },
    {
      img: 'https://cdn.askapollo.com/live/images/doctors/internal-medicine/dr-s-ananth-kumar-internal-medicine-in-hyderabad.png',
      title: 'Dr S Ananth Kumar',
      exp: '41 years, Internal Medicine',
      designation: 'MBBS, MD',
      description: 'Dr S Ananth Kumar is an experienced Internal Medicine specialist based in Hyderabad.',
      lang: 'Languages: English, Hindi, Telugu',
      city: 'Prayag',
      specialty: 'neurology',
      gender: 'Male',
      timing: 'Mon-Sat: 9 AM - 5 PM',
    },
    {
      img: 'https://cdn.askapollo.com/live/images/doctors/internal-medicine/dr-alok-kumar-agarwal-internal-medicine-in-delhi.png',
      title: 'Dr S K Agarwal',
      exp: '43 years, Internal Medicine',
      designation: 'MD, MNAMS, FICP',
      description: 'Dr S K Agarwal is an experienced Internal Medicine specialist based in Delhi.',
      lang: 'Languages: English, Telugu',
      city: 'Delhi',
      specialty: 'orthopedics',
      gender: 'Male',
      timing: 'Mon-Sat: 9 AM - 5 PM',
    },
    {
      img: 'https://cdn.askapollo.com/live/images/doctors/internal-medicine/dr-satish-khanna-internal-medicine-in-delhi.png',
      title: 'Dr Satish Khanna',
      exp: '32 years, Internal Medicine',
      designation: 'MBBS, MD (MEDICINE)',
      description: 'Dr Satish Khanna is an experienced Internal Medicine specialist based in Delhi.',
      lang: 'Languages: English, Hindi, Punjabi',
      city: 'Mumbai',
      specialty: 'neurology',
      gender: 'Male',
      timing: 'Mon-Sat: 9 AM - 5 PM',
    },
    {
      img: 'https://cdn.askapollo.com/live/images/doctors/internal-medicine/dr-rakesh-gupta-internal-medicine-in-delhi.png',
      title: 'Dr Rakesh Gupta',
      exp: '25 years, Internal Medicine',
      designation: 'MBBS, MD (Medicine), FIACM',
      description: 'Dr Rakesh Gupta is an experienced Internal Medicine specialist based in Delhi.',
      lang: 'Languages: English, Hindi',
      city: 'Hyderabad',
      specialty: 'cardiology',
      gender: 'Male',
      timing: 'Mon-Sat: 9 AM - 5 PM',
    }
  ];

  const filteredDoctors = info.filter((doctor) => {
    return (
      (!cityFilter || doctor.city === cityFilter) &&
      (!specialtyFilter || doctor.specialty === specialtyFilter) &&
      (!genderFilter || doctor.gender === genderFilter)
    );
  });

  const handleBookAppointment = (doctor) => {
    // Navigate to Appointments page and pass the selected doctor as state
    navigate('/appointments', { state: { doctor } });
  };

  return (
    <>
      <section>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-full sm:col-span-3 p-4">
            <h1 className="text-xl font-semibold md:pl-7 sm:ml-7">Filters</h1>
            <div className="mt-6">
              <ul className="space-y-4 md:pl-10 md:ml-10">
                {/* Filters like city, specialty */}
                <li className="flex justify-between">
                  <select
                    className="bg-white border p-2 rounded-md shadow-md w-full sm:w-40"
                    value={cityFilter}
                    onChange={(e) => setCityFilter(e.target.value)}
                  >
                    <option value="">City</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bangalore">Bangalore</option>
                  </select>
                </li>
                <li className="flex justify-between">
                  <select
                    className="bg-white border p-2 rounded-md shadow-md w-full sm:w-40"
                    value={specialtyFilter}
                    onChange={(e) => setSpecialtyFilter(e.target.value)}
                  >
                    <option value="">Specialty</option>
                    <option value="Internal Medicine">Internal Medicine</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Orthopedics">Orthopedics</option>
                  </select>
                </li>
                <li className="flex justify-between">
                  <select
                    className="bg-white border p-2 rounded-md shadow-md w-full sm:w-40"
                    value={genderFilter}
                    onChange={(e) => setGenderFilter(e.target.value)}
                  >
                    <option value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-9">
            <h2 className="text-2xl font-semibold p-3">Best Doctors in India</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
              {filteredDoctors.length === 0 ? (
                <div>No doctors found matching your filters</div>
              ) : (
                filteredDoctors.map((doctor, index) => (
                  <div
                    key={index}
                    className="col-span-full bg-white p-3 rounded-lg shadow-lg"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                      {/* Left side: Doctor image and details */}
                      <div className="flex p-3 w-full sm:w-auto sm:max-w-xl">
                        <img
                          src={doctor.img}
                          alt="Doctor"
                          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mr-4 mb-4 sm:mb-0"
                        />
                        <div className="p-2">
                          <h2 className="text-lg font-semibold mb-3">{doctor.title}</h2>
                          <span className="text-xs p-2 bg-sky-100 text-sky-700 rounded-sm font-semibold">
                            {doctor.exp}
                          </span>
                          <p className="mt-3 text-sm font-semibold">{doctor.designation}</p>
                          <p className="text-xs lg:text-base mt-2 max-w-xs sm:max-w-none">
                            {doctor.description}
                          </p>
                          <p className="text-xs lg:text-base mt-2">{doctor.lang}</p>
                        </div>
                      </div>

                      {/* Vertical divider */}
                      <hr className="sm:h-40 border-l-2 border-gray-200 mx-4 sm:mx-0 my-4 sm:my-0" />

                      {/* Right side: Working hours */}
                      <div className="flex flex-col items-center justify-center text-center mx-auto">
                        <h3 className="font-semibold text-lg">Mon - Sat</h3>
                        <h4 className="text-sm">{doctor.timing}</h4>
                        <button
                          onClick={() => handleBookAppointment(doctor)} // Trigger booking flow
                          className="mt-3 py-2 px-4 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition duration-200"
                        >
                          Book Appointment
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Doctors;
