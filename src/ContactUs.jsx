import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    city: '',
    hospital: '',
    doctor: '',
    message: '',
    captcha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Form submitted');
  };

  return (
    <>
      <section >
        <nav className='bg-[#007c9d] w-full h-auto place-items-start px-32'>
          <ul className='flex flex-row justify-center gap-5 text-gray-700'>
            <li className=' hover:text-white'>Home</li>
            <li className=' hover:text-white'>Contact Us</li>
          </ul>
        </nav>
        <div className='bg-[#007c9d] w-full h-auto justify-center flex md:flex-row flex-col p-[100px] overflow-auto place-items-center'>
          <div className='text-white outline-none px-5 mb-5'>
            <div>
              <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets/images/icons/contact-find-dr.svg" alt="" width="32" />
              <h2 className='text-2xl font-bold mt-2'>Apollo Lifeline</h2>
              <p className='font-semibold mt-2 mb-5 text-wrap overflow-auto'>Can be dialed irrespective of the telecom operator and location in India.</p>
            </div>
            <a className='text-yellow-300 underline' href="tel:778916651525" title="7412 785 8754">7952 852 8515</a>
          </div>
          <hr className='md:w-1 md:h-44 md:bg-yellow-300 w-full h-1 bg-[#007c9d] my-5 mx-10' />
          <div className='text-white outline-none px-5'>
            <div>
              <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets/images/icons/contact-find-dr.svg" alt="" width="32" />
              <h2 className='text-2xl font-bold mt-2'>Apollo Lifeline</h2>
              <p className='font-semibold mt-2 mb-5 text-wrap overflow-auto'>Can be dialed irrespective of the telecom operator and location in India.</p>
            </div>
            <a className='text-yellow-300 underline' href="tel:778916651525" title="7412 785 8754">7952 852 8515</a>
          </div>
          <hr className='md:w-1 md:h-44 md:bg-yellow-300 w-full h-1 bg-[#007c9d] my-5 mx-10' />
          <div className='text-white outline-none px-5'>
            <div>
              <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets/images/icons/contact-find-dr.svg" alt="" width="32" />
              <h2 className='text-2xl font-bold mt-2'>Apollo Lifeline</h2>
              <p className='font-semibold mt-2 mb-5 text-wrap overflow-auto'>Can be dialed irrespective of the telecom operator and location in India.</p>
            </div>
            <a className='text-yellow-300 underline' href="tel:778916651525" title="7412 785 8754">7952 852 8515</a>
          </div>
          <hr className='md:w-1 md:h-44 md:bg-yellow-300 w-full h-1 bg-[#007c9d] my-5 mx-10' />
          <div className='text-white outline-none px-5'>
            <div>
              <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets/images/icons/contact-find-dr.svg" alt="" width="32" />
              <h2 className='text-2xl font-bold mt-2'>Apollo Lifeline</h2>
              <p className='font-semibold mt-2 mb-5 text-wrap overflow-auto'>Can be dialed irrespective of the telecom operator and location in India.</p>
            </div>
            <a className='text-yellow-300 underline' href="tel:778916651525" title="7412 785 8754">7952 852 8515</a>
          </div>
        </div>
      </section>
      <section className='grid md:grid-cols-2 sm:grid-cols-1 w-full h-auto place-items-center'>
        <div>
          <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets/images/contact-image.jpg" alt="" width="494px" />
        </div>
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg grid">
          <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email ID</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">Select City</label>
                <select
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                >
                  <option value="">Select City</option>
                  <option value="city1">City 1</option>
                  <option value="city2">City 2</option>
                  <option value="city3">City 3</option>
                </select>
              </div>

              <div>
                <label htmlFor="hospital" className="block text-sm font-medium text-gray-700">Select Hospital</label>
                <select
                  id="hospital"
                  name="hospital"
                  value={formData.hospital}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                >
                  <option value="">Select Hospital</option>
                  <option value="hospital1">Hospital 1</option>
                  <option value="hospital2">Hospital 2</option>
                  <option value="hospital3">Hospital 3</option>
                </select>
              </div>

              <div>
                <label htmlFor="doctor" className="block text-sm font-medium text-gray-700">Select Doctor</label>
                <select
                  id="doctor"
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                >
                  <option value="">Select Doctor</option>
                  <option value="doctor1">Doctor 1</option>
                  <option value="doctor2">Doctor 2</option>
                  <option value="doctor3">Doctor 3</option>
                </select>
              </div>

              <div className="col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  rows="4"
                  required
                ></textarea>
              </div>

              <div className="col-span-2 flex items-center space-x-2">
                <input
                  type="text"
                  id="captcha"
                  name="captcha"
                  value={formData.captcha}
                  onChange={handleChange}
                  className="mt-1 block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter Captcha"
                  required
                />
                <span className="text-sm font-semibold">[CAPTCHA IMAGE HERE]</span>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full py-2 px-4 bg-[#007c9d] text-white font-bold rounded-md shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </form>
        </div>
      </section>   
    </>
  );
};

export default ContactUs;
