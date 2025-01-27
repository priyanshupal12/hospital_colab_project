import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Home() {

    // carousel images priyanshu_images
    const backgroundImage1 = 'https://cdn.apollohospitals.com/dev-apollohospitals/2024/12/LungLife_banner_Web.jpg';

    //this images are not in use
    {/* const backgroundImage2 = 'https://cdn.apollohospitals.com/dev-apollohospitals/2024/12/Desktop.jpg';
    const backgroundImage3 = 'https://cdn.apollohospitals.com/dev-apollohospitals/2024/12/emergency_banner_web-674e9396b809b.jpg';
    const backgroundImage4 = 'https://cdn.apollohospitals.com/dev-apollohospitals/2024/12/proton_cancer_banner_web-674e93cac64aa.jpg';
    const backgroundImage5 = 'https://cdn.apollohospitals.com/dev-apollohospitals/2024/12/41Anniversary_banner_web-674e92be572f3.jpg'; */}


    //symboles images for cards priyanshu_card_symboles
    const symbole1 = 'https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookappt_icon.svg';
    const symbole2 = 'https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/finddoctor_icon.svg';
    const symbole3 = 'https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/findhsptl_icon.svg';
    const symbole4 = 'https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookhelathcheck_icon.svg';
    const symbole5 = 'https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/buymedicines_icon.svg';
    const symbole6 = 'https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/consultonline_icon.svg';

    // photos priyanshu_photos
    const photo1 = 'https://cdn.apollohospitals.com/apollohospitals/apollo-prohealth/ah/explore.jpg';
    const photo2 = 'https://cdn.apollohospitals.com/apollohospitals/assets/icons/AnyConv.com__bangalore-2.webp';
    const photo3 = 'https://cdn.apollohospitals.com/dev-apollohospitals/2023/05/ProHealth.jpg';


    // state for toggling
    const [specialties, setSpecialties] = useState(true);
    const [procedures, setProcedures] = useState(false);
    const [proHealth, setProHealth] = useState(false);

    // Toggling functions priyanshu_toggling_specialties
    const handleSpecialtiesClick = () => {
        setSpecialties(true);
        setProcedures(false);
        setProHealth(false);
    };

    // Toggling functions priyanshu_toggling_procedures
    const handleProceduresClick = () => {
        setSpecialties(false);
        setProcedures(true);
        setProHealth(false);
    };

    // Toggling functions priyanshu_toggling_proHealth
    const handleProHealthClick = () => {
        setSpecialties(false);
        setProcedures(false);
        setProHealth(true);
    };

    return (
        <>
            {/* // carousel_section */}
            <div className="container sm:max-w-full h-100">
                <div className="h-full">
                    <img src={backgroundImage1} className="object-cover" alt="..." />
                </div>
            </div>

            {/* // 1st card section */}
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

            {/* // 3 buttons */}
            <section>
                <div className="flex container mx-auto lg:max-w-7xl bg-sky-200 justify-center gap-18 lg:gap-20 py-2">
                    <div className="items-center justify-center">
                        <button onClick={handleSpecialtiesClick} className={`${specialties ? 'bg-transparent hover:border-blue-800 text-blue-500 border-sky-200 border-2 border-b-4 border-b-blue-800 font-medium py-2 px-3 rounded-t-lg' : 'bg-transparent hover:border-blue-800 text-blue-500 border-sky-200 border-2 border-b-4 font-medium py-2 px-3 rounded-t-lg'}`}>
                            Specialties
                        </button>
                    </div>
                    <div className="items-center justify-center" >
                        <button onClick={handleProceduresClick} className={`${procedures ? 'bg-transparent hover:border-blue-800 text-blue-500 border-sky-200 border-2 border-b-4 border-b-blue-800 font-medium py-2 px-3 rounded-t-lg' : 'bg-transparent hover:border-blue-800 text-blue-500 border-sky-200 border-2 border-b-4 font-medium py-2 px-3 rounded-t-lg'}`}>
                            Procedure
                        </button>
                    </div>
                    <div className="items-center justify-center">
                        <button onClick={handleProHealthClick} className={`${proHealth ? 'bg-transparent hover:border-blue-800 text-blue-500 border-sky-200 border-2 border-b-4 border-b-blue-800 font-medium py-2 px-3 rounded-t-lg' : 'bg-transparent hover:border-blue-800 text-blue-500 border-sky-200 border-2 border-b-4 font-medium py-2 px-3 rounded-t-lg'}`}>
                            ProHealth
                        </button>
                    </div>
                </div>
            </section>

            {/* // 1 onclick sections */}
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
                            <img
                                className="rounded-xl md:relative top-0 object-cover col-span-full md:col-span-5 h-full sm:col-span-12 md:order-1 md:object-contain lg:object-cover"
                                src={photo1}
                                alt=""
                            />
                            <div className="container md:col-span-7 col-span-full grid grid-cols-3 xl:grid-cols-5 grid-rows-4 px-1 gap-5 md:order-2">
                                {[...Array(20)].map((_, index) => (
                                    <div
                                        key={index}
                                        className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900"
                                    >
                                        <img className="h-7 md:h-10" src={symbole6} alt="" />
                                        <Link to="" className="text-center">
                                            <h5 className="mb-2 text-xs md:text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">
                                                Need a help in Claim?
                                            </h5>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* // 2 onclick sections */}
            <section className={`${procedures ? 'block' : 'hidden'} lg`}>
                <div className="container px-10 py-9 mx-auto">
                    <h1 className='text-3xl font-extrabold text-center montserrat my-2 text-black'>
                        Best Doctors in India
                    </h1>
                    <h5 className="text-xs lg:text-lg max-w-full text-center my-4">
                        Learn about the world class health care we provide
                    </h5>
                    <div className="container mx-auto my-10">
                        <div className="grid grid-cols-12 gap-4">
                            <img className='rounded-xl md:relative top-0 object-cover col-span-full md:col-span-5 h-full sm:col-span-12 md:order-1 md:object-contain lg:object-cover' src={photo2} alt="" />
                            <div className="container md:col-span-7 col-span-full grid grid-cols-3 xl:grid-cols-5 grid-rows-4 gap-5 md:order-2">
                                {[...Array(20)].map((_, index) => (
                                    <div key={index}
                                        className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                        <img className='h-7 md:h-10' src={symbole6} alt="" />
                                        <Link to="" className="text-center">
                                            <h5 className="mb-2 text-xs md:text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                        </Link>
                                    </div>))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* // 3 onclick sections */}
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
                            <img className='rounded-xl md:relative top-0 object-cover col-span-full md:col-span-5 h-full sm:col-span-12 md:order-1 md:object-contain lg:object-cover' src={photo3} alt="" />
                            <div className="container md:col-span-7 col-span-full grid grid-cols-3 md:grid-cols-5 grid-rows-4 gap-5 md:order-2">
                                {[...Array(20)].map((_, index) => (
                                    <div key={index}
                                        className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900">
                                        <img className='h-7 md:h-10' src={symbole6} alt="" />
                                        <Link to="" className="text-center">
                                            <h5 className="mb-2 text-xs md:text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">Need a help in Claim?</h5>
                                        </Link>
                                    </div>
                                ))}

                            </div>
                        </div>

                    </div>
                </div>
            </section>



        </>
    );
}

export default Home;
