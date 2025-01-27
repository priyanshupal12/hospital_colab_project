import React from 'react'
import { Button } from 'flowbite-react'
// import down-arrow-backup-2-svgrepo-com (1).png from 'src\assets\down-arrow-backup-2-svgrepo-com (1).svg'
// import { ReactComponent as MyIcon } from './assets/my-icon.svg';
function Doctors() {

  const info = [
     {
      img:'https://cdn.askapollo.com/live/images/doctors/internal-medicine/dr-venkata-rao-abbineni-internal-medicine-in-hyderabad.png',
      title:'Dr Venkata Rao Abbineni',
      exp:'40 years, Internal Medicine',
      designation:'MBBS, MD',
      discription:'Dr Venkata Rao Abbineni is an experienced Interventional Internal Medicine specialist based in Hyderabad. He graduated from XYZ Medical School.',
      lang:'Languages: English, Telugu',
     },
     {
      img:'https://cdn.askapollo.com/live/images/doctors/internal-medicine/dr-rajib-paul-internal-medicine-in-hyderabad.png',
      title:'Dr Rajib Paul',
      exp:'20 years, Internal Medicine',
      designation:'MBBS; MD (General Medicine)',
      discription:'Dr Rajib Paul is an experienced Interventional based in Hyderabad. Dr Rajib Paul graduated from MBBS; MD (General Medicine)',
      lang:'Language: English,Hindi,Telugu,Tamil',
     },
     {
      img:'https://cdn.askapollo.com/live/images/doctors/internal-medicine/dr-s-ananth-kumar-internal-medicine-in-hyderabad.png',
      title:'Dr S Ananth Kumar',
      exp:'41 years, Internal Medicine',
      designation:'MBBS, MD',
      discription:'Dr S Ananth Kumar is an experienced Interventional based in Hyderabad. Dr S Ananth Kumar graduated from MBBS; MD',
      lang:'Language: English,Hindi,Telugu',
     },
     {
      img:'https://cdn.askapollo.com/live/images/doctors/internal-medicine/dr-alok-kumar-agarwal-internal-medicine-in-delhi.png',
      title:'Dr S K Agarwal',
      exp:'43 years, Internal Medicine',
      designation:'MD, MNAMS, FICP',
      discription:'Dr S K Agarwal is an experienced Interventional based in Delhi. Dr S K Agarwal graduated from MD, MNAMS, FICP',
      lang:'Languages: English, Telugu',
     },
     {
      img:'https://cdn.askapollo.com/live/images/doctors/internal-medicine/dr-satish-khanna-internal-medicine-in-delhi.png',
      title:'Dr Satish Khanna',
      exp:'32 years, Internal Medicine',
      designation:'MBBS, MD (MEDICINE)',
      discription:'Dr Satish Khanna is an experienced Interventional based in Delhi. Dr Satish Khanna graduated from MBBS, MD (MEDICINE)',
      lang:'Language: English,Hindi,Punjabi',
     },
     {
      img:'https://cdn.askapollo.com/live/images/doctors/internal-medicine/dr-rakesh-gupta-internal-medicine-in-delhi.png',
      title:'Dr Rakesh Gupta',
      exp:'25 years, Internal Medicine',
      designation:'MBBS, MD(Medicine), FIACM',
      discription:'Dr Rakesh Gupta is an experienced Interventional based in Delhi. Dr Rakesh Gupta graduated from MBBS, MD(Medicine), FIACM',
      lang:'Language: English,Hindi',
     }

  ]
   
  
  return (
    <>
      <section>
        <div className="grid grid-cols-12 gap-4">          
          <div className="col-span-full sm:col-span-3 p-4">
            <h1 className="text-xl font-semibold md:pl-7 sm:ml-7">Filters</h1>
            <div className="mt-6 ">
              <ul className="space-y-4 md:pl-10 md:ml-10">

                <li className="flex justify-between">
                  <select className="bg-white border p-2 rounded-md shadow-md w-full sm:w-40">
                    <option value="">City</option>
                    <option value="city1">Mumbai</option>
                    <option value="city2">Delhi</option>
                    <option value="city3">Bangluru</option>
                  </select>
                </li>
                <li className="flex justify-between">
                  <select className="bg-white border p-2 rounded-md shadow-md w-full sm:w-40">
                    <option value="">Spaciality</option>
                    <option value="city1">Cardiology</option>
                    <option value="city2">Orthopidiology</option>
                    <option value="city3">neurology</option>
                  </select>
                </li>
                <li className="flex justify-between">
                  <select className="bg-white border p-2 rounded-md shadow-md w-full sm:w-40">
                    <option value="">Gender</option>
                    <option value="city1">Male</option>
                    <option value="city2">Female</option>                  
                  </select>
                </li>
                <li className="flex justify-between">
                  <select className="bg-white border p-2 rounded-md shadow-md w-full sm:w-40">
                    <option value="">Language</option>
                    <option typeof='checkbox' value="city1">English</option>
                    <option value="city2">Hindi</option>
                    <option value="city3">Marathi</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>


          <div className="col-span-12 sm:col-span-9 bg-gray-50 p-4">
            <h2 className="text-2xl font-semibold p-3">Best Doctors in India</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
              {info.map((_, index) => (
                <div key={index} className="col-span-full bg-white p-3 rounded-lg shadow-lg">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                    {/* Left side: Doctor image and details */}
                    <div className="flex p-3 w-full sm:w-auto sm:max-w-xl">
                      <img
                        src={info[index].img}
                        alt="Doctor"
                        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mr-4 mb-4 sm:mb-0"
                      />
                      <div className="p-2">
                        <h2 className="text-lg font-semibold mb-3">{info[index].title}</h2>
                        <span className="text-xs p-2 bg-sky-100 text-sky-700 rounded-sm font-semibold">
                          {info[index].exp}
                        </span>
                        <p className="mt-3 text-sm font-semibold">{info[index].designation}</p>
                        <p className="text-xs lg:text-base mt-2 max-w-xs sm:max-w-none">
                          {info[index].discription}
                        </p>
                        <p className="text-xs lg:text-base mt-2">{info[index].lang}</p>
                      </div>
                    </div>

                    {/* Vertical divider */}
                    <hr className="sm:h-40 border-l-2 border-gray-200 mx-4 sm:mx-0 my-4 sm:my-0" />

                    {/* Right side: Working hours */}
                    <div className="flex flex-col items-center justify-center text-center mx-auto">
                      <h3 className="font-semibold text-lg">Mon - Sat</h3>
                      <h4 className="text-sm">(13:00 - 15:00)</h4>
                      <button
                        type="button"
                        className="mt-3 py-2 px-4 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition duration-200 md:text-sm"
                      >
                        Book Appointment
                      </button>
                    </div>
                  </div>
                  <hr className="my-3" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section >
      <img src="photo" alt="" />

    </>
  )
}

export default Doctors