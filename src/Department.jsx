import React from 'react'
import Navbar from './Navbar'

function Department() {
  return (
    <>
      
      <section className="relative bg-blue-600 text-white py-24 px-6 sm:px-12 lg:px-24">
        <div className="absolute inset-0 bg-cover bg-center bg-opacity-50" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}></div>
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
    </>
  )
}

export default Department