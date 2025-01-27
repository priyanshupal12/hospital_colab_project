import React, { useState } from 'react'
import Navbar from './Navbar'


function Department() {

  const [selectedOption,setselectedOption] = useState('');
  const handleChange = (e) => {
    setselectedOption(e.target.value);
  };




  return (
    <>
      <section className="relative bg-blue-600 text-white py-24 px-6 sm:px-12 lg:px-24">
        <div className="absolute inset-0 bg-cover bg-center bg-opacity-50" style={{ backgroundImage: 'url(https://media.istockphoto.com/id/1452231044/photo/male-hand-holding-a-red-heart-on-a-dark-background-early-diagnosis.jpg?s=2048x2048&w=is&k=20&c=PGF503oBPdAiQI5YrgqwCkNYjxX1FuSGl2W-0NYImI4=)' }}></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Welcome to Your Amazing Website
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Build the future with us. Let's create something amazing together.
          </p>
          <div>
            <a href="#services" className="px-8 py-3 bg-yellow-500 text-black text-lg font-semibold rounded-md hover:bg-yellow-400 transition-colors duration-300">
              Get Started
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className='flex p-10'>

          <div>
            <div className='w-full h-auto max-w-2xl'>
              <label htmlFor="dropdown" className="block text-gray-700 text-lg font-medium mb-2">
                HEART
              </label>
              <select id='dropdown' value={selectedOption} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="option0">Option0</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
              <p className="mt-2 text-gray-600">
                Selected Option: {selectedOption || 'None'}
              </p>
            </div>
            <div className='w-full h-auto max-w-2xl'>
              <label htmlFor="dropdown" className="block text-gray-700 text-lg font-medium mb-2">
                HEART
              </label>
              <select id='dropdown' value={selectedOption} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="option0">Option0</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
              <p className="mt-2 text-gray-600">
                Selected Option: {selectedOption || 'None'}
              </p>
            </div>
            <div className='w-full h-auto max-w-2xl'>
              <label htmlFor="dropdown" className="block text-gray-700 text-lg font-medium mb-2">
                HEART
              </label>
              <select id='dropdown' value={selectedOption} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="option0">Option0</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
              <p className="mt-2 text-gray-600">
                Selected Option: {selectedOption || 'None'}
              </p>
            </div>
            <div className='w-full h-auto max-w-2xl'>
              <label htmlFor="dropdown" className="block text-gray-700 text-lg font-medium mb-2">
                HEART
              </label>
              <select id='dropdown' value={selectedOption} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="option0">Option0</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
              <p className="mt-2 text-gray-600">
                Selected Option: {selectedOption || 'None'}
              </p>
            </div>
            <div className='w-full h-auto max-w-2xl'>
              <label htmlFor="dropdown" className="block text-gray-700 text-lg font-medium mb-2">
                HEART
              </label>
              <select id='dropdown' value={selectedOption} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="option0">Option0</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
              <p className="mt-2 text-gray-600">
                Selected Option: {selectedOption || 'None'}
              </p>
            </div>
            <div className='w-full h-auto max-w-2xl'>
              <label htmlFor="dropdown" className="block text-gray-700 text-lg font-medium mb-2">
                HEART
              </label>
              <select id='dropdown' value={selectedOption} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="option0">Option0</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
              <p className="mt-2 text-gray-600">
                Selected Option: {selectedOption || 'None'}
              </p>
            </div>
            <div className='w-full h-auto max-w-2xl'>
              <label htmlFor="dropdown" className="block text-gray-700 text-lg font-medium mb-2">
                HEART
              </label>
              <select id='dropdown' value={selectedOption} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="option0">Option0</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
              <p className="mt-2 text-gray-600">
                Selected Option: {selectedOption || 'None'}
              </p>
            </div>
            <div className='w-full h-auto max-w-2xl'>
              <label htmlFor="dropdown" className="block text-gray-700 text-lg font-medium mb-2">
                HEART
              </label>
              <select id='dropdown' value={selectedOption} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="option0">Option0</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
              <p className="mt-2 text-gray-600">
                Selected Option: {selectedOption || 'None'}
              </p>
            </div>
            <div className='w-full h-auto max-w-2xl'>
              <label htmlFor="dropdown" className="block text-gray-700 text-lg font-medium mb-2">
                HEART
              </label>
              <select id='dropdown' value={selectedOption} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="option0">Option0</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
              <p className="mt-2 text-gray-600">
                Selected Option: {selectedOption || 'None'}
              </p>
            </div>
          </div>
        
        

        <div className='w-full h-auto mx-auto grid lg:grid-cols-3 md:grid-cols-3 grid-cols-3 justify-center place-items-center gap-1'>
              <figure className="bg-slate-100 rounded-xl shadow-2xl dark:bg-slate-800 max-w-[200px] justify-center text-center hover:bg-indigo-300 hover:text-white">
                <div className='place-items-center pt-3'>
                   <h5>A Diet to Work with if You have Anorexia</h5>
                </div>
                <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pt-3">
                  <p>Anorexia nervosa or anorexia is a sever</p>
                </div>
                <div>
                  <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2024/10/logo.svg" alt="Apollo Hospitals" className="max-w-10" />
                </div>
              </figure>
              <figure className="bg-slate-100 rounded-xl shadow-2xl dark:bg-slate-800 max-w-[200px] justify-center text-center hover:bg-indigo-300 hover:text-white">
                <div className='place-items-center pt-3'>
                   <h5>A Diet to Work with if You have Anorexia</h5>
                </div>
                <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pt-3">
                  <p>Anorexia nervosa or anorexia is a sever</p>
                </div>
                <div>
                  <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2024/10/logo.svg" alt="Apollo Hospitals" className="max-w-10" />
                </div>
              </figure>
              <figure className="bg-slate-100 rounded-xl shadow-2xl dark:bg-slate-800 max-w-[200px] justify-center text-center hover:bg-indigo-300 hover:text-white">
                <div className='place-items-center pt-3'>
                   <h5>A Diet to Work with if You have Anorexia</h5>
                </div>
                <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pt-3">
                  <p>Anorexia nervosa or anorexia is a sever</p>
                </div>
                <div>
                  <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2024/10/logo.svg" alt="Apollo Hospitals" className="max-w-10" />
                </div>
              </figure>
              <figure className="bg-slate-100 rounded-xl shadow-2xl dark:bg-slate-800 max-w-[200px] justify-center text-center hover:bg-indigo-300 hover:text-white">
                <div className='place-items-center pt-3'>
                   <h5>A Diet to Work with if You have Anorexia</h5>
                </div>
                <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pt-3">
                  <p>Anorexia nervosa or anorexia is a sever</p>
                </div>
                <div>
                  <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2024/10/logo.svg" alt="Apollo Hospitals" className="max-w-10" />
                </div>
              </figure>
              <figure className="bg-slate-100 rounded-xl shadow-2xl dark:bg-slate-800 max-w-[200px] justify-center text-center hover:bg-indigo-300 hover:text-white">
                <div className='place-items-center pt-3'>
                   <h5>A Diet to Work with if You have Anorexia</h5>
                </div>
                <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pt-3">
                  <p>Anorexia nervosa or anorexia is a sever</p>
                </div>
                <div>
                  <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2024/10/logo.svg" alt="Apollo Hospitals" className="max-w-10" />
                </div>
              </figure>
              <figure className="bg-slate-100 rounded-xl shadow-2xl dark:bg-slate-800 max-w-[200px] justify-center text-center hover:bg-indigo-300 hover:text-white">
                <div className='place-items-center pt-3'>
                   <h5>A Diet to Work with if You have Anorexia</h5>
                </div>
                <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pt-3">
                  <p>Anorexia nervosa or anorexia is a sever</p>
                </div>
                <div>
                  <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2024/10/logo.svg" alt="Apollo Hospitals" className="max-w-10" />
                </div>
              </figure>
              <figure className="bg-slate-100 rounded-xl shadow-2xl dark:bg-slate-800 max-w-[200px] justify-center text-center hover:bg-indigo-300 hover:text-white">
                <div className='place-items-center pt-3'>
                   <h5>A Diet to Work with if You have Anorexia</h5>
                </div>
                <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pt-3">
                  <p>Anorexia nervosa or anorexia is a sever</p>
                </div>
                <div>
                  <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2024/10/logo.svg" alt="Apollo Hospitals" className="max-w-10" />
                </div>
              </figure>
              <figure className="bg-slate-100 rounded-xl shadow-2xl dark:bg-slate-800 max-w-[200px] justify-center text-center hover:bg-indigo-300 hover:text-white">
                <div className='place-items-center pt-3'>
                   <h5>A Diet to Work with if You have Anorexia</h5>
                </div>
                <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pt-3">
                  <p>Anorexia nervosa or anorexia is a sever</p>
                </div>
                <div>
                  <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2024/10/logo.svg" alt="Apollo Hospitals" className="max-w-10" />
                </div>
              </figure>
              <figure className="bg-slate-100 rounded-xl shadow-2xl dark:bg-slate-800 max-w-[200px] justify-center text-center hover:bg-indigo-300 hover:text-white">
                <div className='place-items-center pt-3'>
                   <h5>A Diet to Work with if You have Anorexia</h5>
                </div>
                <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pt-3">
                  <p>Anorexia nervosa or anorexia is a sever</p>
                </div>
                <div>
                  <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2024/10/logo.svg" alt="Apollo Hospitals" className="max-w-10" />
                </div>
              </figure>
              <figure className="bg-slate-100 rounded-xl shadow-2xl dark:bg-slate-800 max-w-[200px] justify-center text-center hover:bg-indigo-300 hover:text-white">
                <div className='place-items-center pt-3'>
                   <h5>A Diet to Work with if You have Anorexia</h5>
                </div>
                <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pt-3">
                  <p>Anorexia nervosa or anorexia is a sever</p>
                </div>
                <div>
                  <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2024/10/logo.svg" alt="Apollo Hospitals" className="max-w-10" />
                </div>
              </figure>
              <figure className="bg-slate-100 rounded-xl shadow-2xl dark:bg-slate-800 max-w-[200px] justify-center text-center hover:bg-indigo-300 hover:text-white">
                <div className='place-items-center pt-3'>
                   <h5>A Diet to Work with if You have Anorexia</h5>
                </div>
                <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pt-3">
                  <p>Anorexia nervosa or anorexia is a sever</p>
                </div>
                <div>
                  <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2024/10/logo.svg" alt="Apollo Hospitals" className="max-w-10" />
                </div>
              </figure>
              <figure className="bg-slate-100 rounded-xl shadow-2xl dark:bg-slate-800 max-w-[200px] justify-center text-center hover:bg-indigo-300 hover:text-white">
                <div className='place-items-center pt-3'>
                   <h5>A Diet to Work with if You have Anorexia</h5>
                </div>
                <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pt-3">
                  <p>Anorexia nervosa or anorexia is a sever</p>
                </div>
                <div>
                  <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2024/10/logo.svg" alt="Apollo Hospitals" className="max-w-10" />
                </div>
              </figure>
              <figure className="bg-slate-100 rounded-xl shadow-2xl dark:bg-slate-800 max-w-[200px] justify-center text-center hover:bg-indigo-300 hover:text-white">
                <div className='place-items-center pt-3'>
                   <h5>A Diet to Work with if You have Anorexia</h5>
                </div>
                <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pt-3">
                  <p>Anorexia nervosa or anorexia is a sever</p>
                </div>
                <div>
                  <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2024/10/logo.svg" alt="Apollo Hospitals" className="max-w-10" />
                </div>
              </figure>
              <figure className="bg-slate-100 rounded-xl shadow-2xl dark:bg-slate-800 max-w-[200px] justify-center text-center hover:bg-indigo-300 hover:text-white">
                <div className='place-items-center pt-3'>
                   <h5>A Diet to Work with if You have Anorexia</h5>
                </div>
                <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pt-3">
                  <p>Anorexia nervosa or anorexia is a sever</p>
                </div>
                <div>
                  <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2024/10/logo.svg" alt="Apollo Hospitals" className="max-w-10" />
                </div>
              </figure>
              <figure className="bg-slate-100 rounded-xl shadow-2xl dark:bg-slate-800 max-w-[200px] justify-center text-center hover:bg-indigo-300 hover:text-white">
                <div className='place-items-center pt-3'>
                   <h5>A Diet to Work with if You have Anorexia</h5>
                </div>
                <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pt-3">
                  <p>Anorexia nervosa or anorexia is a sever</p>
                </div>
                <div>
                  <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2024/10/logo.svg" alt="Apollo Hospitals" className="max-w-10" />
                </div>
              </figure>
              <figure className="bg-slate-100 rounded-xl shadow-2xl dark:bg-slate-800 max-w-[200px] justify-center text-center hover:bg-indigo-300 hover:text-white">
                <div className='place-items-center pt-3'>
                   <h5>A Diet to Work with if You have Anorexia</h5>
                </div>
                <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pt-3">
                  <p>Anorexia nervosa or anorexia is a sever</p>
                </div>
                <div>
                  <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2024/10/logo.svg" alt="Apollo Hospitals" className="max-w-10" />
                </div>
              </figure>
              <figure className="bg-slate-100 rounded-xl shadow-2xl dark:bg-slate-800 max-w-[200px] justify-center text-center hover:bg-indigo-300 hover:text-white">
                <div className='place-items-center pt-3'>
                   <h5>A Diet to Work with if You have Anorexia</h5>
                </div>
                <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pt-3">
                  <p>Anorexia nervosa or anorexia is a sever</p>
                </div>
                <div>
                  <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2024/10/logo.svg" alt="Apollo Hospitals" className="max-w-10" />
                </div>
              </figure>
              <figure className="bg-slate-100 rounded-xl shadow-2xl dark:bg-slate-800 max-w-[200px] justify-center text-center hover:bg-indigo-300 hover:text-white">
                <div className='place-items-center pt-3'>
                   <h5>A Diet to Work with if You have Anorexia</h5>
                </div>
                <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pt-3">
                  <p>Anorexia nervosa or anorexia is a sever</p>
                </div>
                <div>
                  <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2024/10/logo.svg" alt="Apollo Hospitals" className="max-w-10" />
                </div>
              </figure>
        </div>
        </div>
      </section>
    </>
  )
}

export default Department