import React from 'react';
import { Carousel } from 'flowbite';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import App from './App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight,faPhone} from '@fortawesome/free-solid-svg-icons';


function Home() {
    // carousel images
    const backgroundImage1 = 'https://cdn.apollohospitals.com/dev-apollohospitals/2024/12/LungLife_banner_Web.jpg';
    const backgroundImage2 = 'https://cdn.apollohospitals.com/dev-apollohospitals/2024/12/Desktop.jpg';
    const backgroundImage3 = 'https://cdn.apollohospitals.com/dev-apollohospitals/2024/12/emergency_banner_web-674e9396b809b.jpg';
    const backgroundImage4 = 'https://cdn.apollohospitals.com/dev-apollohospitals/2024/12/proton_cancer_banner_web-674e93cac64aa.jpg';
    const backgroundImage5 = 'https://cdn.apollohospitals.com/dev-apollohospitals/2024/12/41Anniversary_banner_web-674e92be572f3.jpg';

    //symboles images for cards
    const symbole1 = 'https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookappt_icon.svg';
    const symbole2 = 'https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/finddoctor_icon.svg';
    const symbole3 = 'https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/findhsptl_icon.svg';
    const symbole4 = 'https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookhelathcheck_icon.svg';
    const symbole5 = 'https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/buymedicines_icon.svg';
    const symbole6 = 'https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/consultonline_icon.svg';

    // photos
    const photo1 = 'https://cdn.apollohospitals.com/apollohospitals/apollo-prohealth/ah/explore.jpg';
    const photo2 = 'https://cdn.apollohospitals.com/apollohospitals/assets/icons/AnyConv.com__bangalore-2.webp';
    const photo3 = 'https://cdn.apollohospitals.com/dev-apollohospitals/2023/05/ProHealth.jpg';


    // state
    const [specialties, setSpecialties] = useState(true);
    const [procedures, setProcedures] = useState(false);
    const [proHealth, setProHealth] = useState(false);

    // Toggling functions
    const handleSpecialtiesClick = () => {
        setSpecialties(true);
        setProcedures(false);
        setProHealth(false);
    };

    const handleProceduresClick = () => {
        setSpecialties(false);
        setProcedures(true);
        setProHealth(false);
    };

    const handleProHealthClick = () => {
        setSpecialties(false);
        setProcedures(false);
        setProHealth(true);
    };
    return (
        <>
            <div id="animation-carousel" className="relative w-full" data-carousel="slide">

                <div className="relative h-[100vh] md:h-[80vh] sm:h-auto lg:h-144">

                    <div className="hidden duration-600 ease-linear" data-carousel-item="active">
                        <img src={backgroundImage1} className="w-full h-full max-w-full max-h-full object-cover" alt="..." />
                    </div>

                    <div className="hidden duration-600 ease-linear" data-carousel-item>
                        <img src={backgroundImage2} className="w-full h-full max-w-full max-h-full object-cover" alt="..." />
                    </div>

                    <div className="hidden duration-600 ease-linear" data-carousel-item>
                        <img src={backgroundImage3} className="w-full h-full max-w-full max-h-full object-cover" alt="..." />
                    </div>

                    <div className="hidden duration-600 ease-linear" data-carousel-item>
                        <img src={backgroundImage4} className="w-full h-full max-w-full max-h-full object-cover" alt="..." />
                    </div>

                    <div className="hidden duration-600 ease-linear" data-carousel-item>
                        <img src={backgroundImage5} className="w-full h-full max-w-full max-h-full object-cover" alt="..." />
                    </div>
                </div>
            </div>
            <section>
                <div className="grid  max-w-7xl grid-cols-3 gap-3 py-8 mx-auto sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 place-items-center px-2">
                    <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                        <img className='h-10' src={symbole1} alt="" />
                        <Link to="" className="text-center">
                            <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                        </Link>

                    </div>
                    <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                        <img className='h-10' src={symbole2} alt="" />
                        <Link to="" className="text-center">
                            <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                        </Link>

                    </div>
                    <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                        <img className='h-10' src={symbole3} alt="" />
                        <Link to="" className="text-center">
                            <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                        </Link>
                    </div>
                    <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                        <img className='h-10' src={symbole4} alt="" />
                        <Link to="" className="text-center">
                            <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                        </Link>

                    </div>
                    <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                        <img className='h-10' src={symbole5} alt="" />
                        <Link to="" className="text-center">
                            <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                        </Link>

                    </div>
                    <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                        <img className='h-10' src={symbole6} alt="" />
                        <Link to="" className="text-center">
                            <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                        </Link>
                    </div>
                </div>
            </section>
            <section>
                <div className="flex container mx-auto lg:max-w-7xl bg-sky-200 justify-center gap-18 lg:gap-20 py-2">
                    <div className="items-center justify-center">
                        <button onClick={handleSpecialtiesClick} className="bg-transparent hover:border-blue-800 text-blue-500 border-sky-200 border-2 border-b-4 font-medium py-2 px-3 rounded-t-lg">
                            Specialties
                        </button>
                    </div>
                    <div className="items-center justify-center" >
                        <button onClick={handleProceduresClick} className="bg-transparent hover:border-blue-800 text-blue-500 border-sky-200 border-2 border-b-4 font-medium py-2 px-3 rounded-t-lg">
                            Procedure
                        </button>
                    </div>
                    <div className="items-center justify-center">
                        <button onClick={handleProHealthClick} className="bg-transparent hover:border-blue-800 text-blue-500 border-sky-200 border-2 border-b-4 font-medium py-2 px-3 rounded-t-lg">
                            ProHealth
                        </button>
                    </div>
                </div>
            </section>
            <section className={`${specialties ? 'block' : 'hidden'} lg`}>
                <div className="container px-10 py-9 mx-auto">
                    <h1 className='text-3xl font-extrabold text-center montserrat my-2 text-black'>
                        Explore our Centres of Clinical Excellence
                    </h1>
                    <p className="text-xs lg:text-lg max-w-full text-center my-4 ">
                        Apollo Hospitals has dedicated Centres of Excellence for several key specialties and super specialties. They are unique and state of the art facilities spread across several of the Apollo hospital locations and each Centre of Excellence stands out as a citadel of world class clinical outcomes.
                    </p>
                    <h5 className="text-xs lg:text-lg max-w-full text-center my-4 ">
                        Learn about the world class health care we provide
                    </h5>
                    <div className="container mx-auto my-10">
                        <div className="grid grid-cols-12 gap-4">
                            <img className='rounded-xl object-cover col-span-full md:col-span-5 h-full sm:col-span-12 md:order-1' src={photo1} alt="" />
                            <div className="container md:col-span-7 col-span-full grid grid-cols-3 md:grid-cols-5 grid-rows-4 gap-5 md:order-2">
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className={`${procedures ? 'block' : 'hidden'} lg`}>
                <div className="container px-10 py-9 mx-auto">
                    <h1 className='text-3xl font-extrabold text-center montserrat my-2 text-black'>
                        Best Doctors in India
                    </h1>
                    <h5 className="text-xs lg:text-lg max-w-full text-center my-4 ">
                        Learn about the world class health care we provide
                    </h5>
                    <div className="container mx-auto my-10">
                        <div className="grid grid-cols-12 gap-4">
                            <img className='rounded-xl object-cover col-span-full md:col-span-5 h-full sm:col-span-12 md:order-1' src={photo2} alt="" />
                            <div className="container md:col-span-7 col-span-full grid grid-cols-3 md:grid-cols-5 grid-rows-4 gap-5 md:order-2">
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className={`${proHealth ? 'block' : 'hidden'} lg`}>
            <div className="container px-10 py-9 mx-auto">
                    <h1 className='text-3xl font-extrabold text-center montserrat my-2 text-black'>
                        Best Doctors in India
                    </h1>
                    <h5 className="text-xs lg:text-lg max-w-full text-center my-4 ">
                        Learn about the world class health care we provide
                    </h5>
                    <div className="container mx-auto my-10">
                        <div className="grid grid-cols-12 gap-4">
                            <img className='rounded-xl object-cover col-span-full md:col-span-5 h-full sm:col-span-12 md:order-1' src={photo3} alt="" />
                            <div className="container md:col-span-7 col-span-full grid grid-cols-3 md:grid-cols-5 grid-rows-4 gap-5 md:order-2">
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                    <img className='h-10' src={symbole6} alt="" />
                                    <Link to="" className="text-center">
                                        <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className="w-full h-auto bg-sky-100 justify-center place-items-center">
                <div className="py-5 place-items-center justify-center">
                    <div className="text-semibold">
                        <p>The Apollo World of Care</p>
                    </div>
                    <div className="font-bold text-xl">
                        <big>International Patient Care</big>
                    </div>
                    <div className="font-semibold overflow-auto">
                        <small>“Bringing healthcare of International standards within the reach of every individual.”</small>
                    </div>
                </div>
                <div className='grid grid-cols-2 w-full h-auto justify-center place-items-center p-10'>
                    <div className='w-full h-auto justify-center place-items-center'>
                        <div className='w-full h-auto mx-auto grid lg:grid-cols-3 md:grid-cols-3 grid-cols-3 justify-center place-items-center'>
                            <figure className="bg-slate-100 rounded-xl shadow-2xl dark:bg-slate-800 h-[23vh] w-[150px] justify-center text-center hover:bg-indigo-300 hover:text-white">
                                <div className='place-items-center pt-3'>
                                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_hsptl.svg" alt="icon" />
                                </div>
                                <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pt-3">
                                    <small>Hospitals</small>
                                </div>
                            </figure>
                            <figure className="bg-slate-100 rounded-xl shadow-2xl px-1 dark:bg-slate-800 h-[23vh] w-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                                <div className='place-items-center pt-3'>
                                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_speciality.svg" alt="" />
                                </div>
                                <div className="text-sky-500 dark:text-sky-400 hover:text-white pt-3 font-medium">
                                    <small>Speciality</small>
                                </div>
                            </figure>
                            <figure className="bg-slate-100 rounded-xl shadow-2xl px-1 dark:bg-slate-800 h-[23vh] w-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                                <div className='place-items-center pt-3'>
                                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_planyourtrip.svg" alt="icon" />
                                </div>
                                <div className="text-sky-500 dark:text-sky-400 hover:text-white pt-3 font-medium">
                                    <small>Plan Your Trip</small>
                                </div>
                            </figure>
                            <figure className="bg-slate-100 rounded-xl shadow-2xl px-1 dark:bg-slate-800 h-[23vh] w-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                                <div className='place-items-center pt-3'>
                                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_testimonials.svg" alt="icon" />
                                </div>
                                <div className="text-sky-500 dark:text-sky-400 hover:text-white pt-3 font-medium">
                                    <small>Testimonials</small>
                                </div>
                            </figure>
                            <figure className="bg-slate-100 rounded-xl shadow-2xl px-1 dark:bg-slate-800 h-[23vh] w-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                                <div className='place-items-center pt-3'>
                                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_faq.svg" alt="icon" />
                                </div>
                                <div className="text-sky-500 dark:text-sky-400 hover:text-white pt-3 font-medium">
                                    <small>FAQ’s</small>
                                </div>
                            </figure>
                            <figure className="bg-slate-100 rounded-xl shadow-2xl px-1 dark:bg-slate-800 h-[23vh] w-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                                <div className='place-items-center pt-3'>
                                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_doctor.svg" alt="icon" />
                                </div>
                                <div className="text-sky-500 dark:text-sky-400 hover:text-white pt-3 font-medium">
                                    <small>Find A Doctor</small>
                                </div>
                            </figure>
                            <figure className="bg-slate-100 rounded-xl shadow-2xl px-1 dark:bg-slate-800 h-[23vh] w-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                                <div className='place-items-center pt-3'>
                                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_onlineconsultation.svg" alt="icon" />
                                </div>
                                <div className="text-sky-500 dark:text-sky-400 hover:text-white pt-3 font-medium">
                                    <small>Online Consultation</small>
                                </div>
                            </figure>
                            <figure className="bg-slate-100 rounded-xl shadow-2xl px-1 dark:bg-slate-800 h-[23vh] w-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                                <div className='place-items-center pt-3'>
                                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_Apollo Insurance.svg" alt="icon" />
                                </div>
                                <div className="text-sky-500 dark:text-sky-400 hover:text-white pt-3 font-medium">
                                    <small>Apollo Insurance</small>
                                </div>
                            </figure>
                            <figure className="bg-slate-100 rounded-xl shadow-2xl px-1 dark:bg-slate-800 h-[23vh] w-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                                <div className='place-items-center pt-3'>
                                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_visa.svg" alt="icon" />
                                </div>
                                <div className="text-sky-500 dark:text-sky-400 hover:text-white pt-3 font-medium">
                                    <small>Visa</small>
                                </div>
                            </figure>
                        </div>
                        <div className='p-5 gap-x-10 border-2 rounded-md bg-white shadow border-green-800 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900 hover:text-white grid grid-cols-2 justify-items-center place-items-end'>
                            <div className='font-light text-gray-700 hover:text-white'>
                                <code>International Number</code>
                            </div>
                            <div>
                                <h4><FontAwesomeIcon icon={faPhone} className="text-blue-500 text-xl" /> (+91) 40 4344 1066</h4>
                            </div>
                        </div>
                    </div>
                    <div className='place-items-center shadow-2xl border-8 rounded-xl border-white w-auto'>
                        <img src="https://cdn.apollohospitals.com/apollohospitals/international.png" alt="Apollo Heart Institute Expertise" className='rounded w-auto h-[90vh]' />
                    </div>
                </div> 
            </div>

            <div className="w-full h-auto justify-center text-center bg-slate-100 py-5 md:justify-center">
                <div className="font-black text-3xl py-5">
                    <h1>Disclaimer</h1>
                </div>

                <div className="w-full md:w-[50rem] h-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 justify-center items-center m-auto gap-y-5 px-5">
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4 border border-slate-500 rounded-3xl">
                        <img className="w-24 h-24 md:w-[20rem] md:h-auto md:rounded rounded-2xl mx-auto" src="https://cdn.apollohospitals.com/dev-apollohospitals/2024/05/transplant-disclaimer-min-m.webp" alt="" width="384" height="512" />
                        <div className="text-sky-500 dark:text-sky-400 font-medium text-center shadow">
                        Transplant Disclaimer <FontAwesomeIcon icon={faArrowRight} className='bg-indigo-800 text-white rounded-full'/>
                        </div>
                    </div>
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4 border border-slate-500 rounded-3xl">
                        <img className="w-24 h-24 md:w-[20rem] md:h-auto md:rounded rounded-2xl mx-auto" src="https://cdn.apollohospitals.com/dev-apollohospitals/2024/05/recruitment-disclaimer-min-m.webp" alt="" width="384" height="512" />
                        <div className="text-sky-500 dark:text-sky-400 font-medium text-center shadow">
                         Recruitment Disclaimer <FontAwesomeIcon icon={faArrowRight} className='bg-indigo-800 text-white rounded-full'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-violet-500 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900 w-full h-auto  gap-x-5 text-center justify-center m-auto place-items-center'>
                <blockquote>
                    <h1 className='text-white font-bold py-3 text-3xl'>What Would You Like To Do Today?</h1>
                </blockquote>
                <div className='w-full h-auto gap-x-1 gap-y-1 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 justify-center shadow mx-auto place-items-center px-28'>
                    <figure className="bg-slate-100 rounded-xl shadow dark:bg-slate-800 md:h-[20vh] w-[150px] justify-center text-center hover:bg-indigo-300 hover:text-white">
                        <div className='place-items-center pt-3'>
                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookappt_icon.svg" alt="icon" width="64" />
                        </div>
                        <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pt-3">
                            <small>Book Appointment</small>
                        </div>
                    </figure>
                    <figure className="bg-slate-100 rounded-xl shadow px-1 dark:bg-slate-800 md:h-[20vh] w-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                        <div className='place-items-center pt-3'>
                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/finddoctor_icon.svg" alt="icon" /> 
                        </div>
                        <div className="text-sky-500 dark:text-sky-400 hover:text-white pt-3 font-medium">
                            <small>Find Doctor</small>
                        </div>
                    </figure>
                    <figure className="bg-slate-100 rounded-xl shadow px-1 dark:bg-slate-800 md:h-[20vh] w-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                        <div className='place-items-center pt-3'>
                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/findhsptl_icon.svg" alt="icon" />
                        </div>
                        <div className="text-sky-500 dark:text-sky-400 hover:text-white pt-3 font-medium">
                            <small>Find Hospital</small>
                        </div>  
                    </figure>
                    <figure className="bg-slate-100 rounded-xl shadow px-1 dark:bg-slate-800 md:h-[20vh] w-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                        <div className='place-items-center pt-3'>
                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookhelathcheck_icon.svg" alt="icon" />
                        </div>
                        <div className="text-sky-500 dark:text-sky-400 hover:text-white pt-3 font-medium">
                            <small>Book Health Check-Up</small>
                        </div> 
                    </figure>
                    <figure className="bg-slate-100 rounded-xl shadow px-1 dark:bg-slate-800 md:h-[20vh] w-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                        <div className='place-items-center pt-3'>
                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/buymedicines_icon.svg" alt="icon" />
                        </div>
                        <div className="text-sky-500 dark:text-sky-400 hover:text-white pt-3 font-medium">
                            <small>Consult Online</small>
                        </div>   
                    </figure>
                    <figure className="bg-slate-100 rounded-xl shadow px-1 dark:bg-slate-800 md:h-[20vh] w-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                        <div className='place-items-center pt-3'>
                            <img src="https://cdn.apollohospitals.com/apollohospitals/View%20Health%20Record.svg" alt="icon" />
                        </div>
                        <div className="text-sky-500 dark:text-sky-400 hover:text-white pt-3 font-medium">
                            <small>View Health Record</small>
                        </div>
                    </figure>
                    
                </div>
                
            </div>
        </>
    );
}

export default Home;
