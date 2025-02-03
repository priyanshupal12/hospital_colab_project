import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPhone } from "@fortawesome/free-solid-svg-icons";

function Home() {
  // carousel images
  const backgroundImage1 =
    "https://cdn.apollohospitals.com/dev-apollohospitals/2024/12/LungLife_banner_Web.jpg";


  //symboles images for cards
  const symbole1 =
    "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookappt_icon.svg";
  const symbole2 =
    "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/finddoctor_icon.svg";
  const symbole3 =
    "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/findhsptl_icon.svg";
  const symbole4 =
    "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookhelathcheck_icon.svg";
  const symbole5 =
    "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/buymedicines_icon.svg";
  const symbole6 =
    "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/consultonline_icon.svg";

  // photos
  const photo1 =
    "https://cdn.apollohospitals.com/apollohospitals/apollo-prohealth/ah/explore.jpg";
  const photo2 =
    "https://cdn.apollohospitals.com/apollohospitals/assets/icons/AnyConv.com__bangalore-2.webp";
  const photo3 =
    "https://cdn.apollohospitals.com/dev-apollohospitals/2023/05/ProHealth.jpg";

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
      {/* // carousel_section */}
      <div className="container sm:max-w-full">
        <div className="h-full">
          <img src={backgroundImage1} className="object-contain md:object-cover" alt="..." />
        </div>
      </div>

      {/* // 1st card section */}
      <section>
        <div className="grid  max-w-7xl grid-cols-3 gap-3 py-8 mx-auto sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 place-items-center px-2">
          <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-indigo-300">
            <img className="h-10" src={symbole1} alt="" />
            <Link to="" className="text-center">
              <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">
                Need a help in Claim?
              </h5>
            </Link>
          </div>
          <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-indigo-300">
            <img className="h-10" src={symbole2} alt="" />
            <Link to="" className="text-center">
              <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">
                Need a help in Claim?
              </h5>
            </Link>
          </div>
          <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-indigo-300">
            <img className="h-10" src={symbole3} alt="" />
            <Link to="" className="text-center">
              <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">
                Need a help in Claim?
              </h5>
            </Link>
          </div>
          <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-indigo-300">
            <img className="h-10" src={symbole4} alt="" />
            <Link to="" className="text-center">
              <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">
                Need a help in Claim?
              </h5>
            </Link>
          </div>
          <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-indigo-300">
            <img className="h-10" src={symbole5} alt="" />
            <Link to="" className="text-center">
              <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">
                Need a help in Claim?
              </h5>
            </Link>
          </div>
          <div className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-indigo-300">
            <img className="h-10" src={symbole6} alt="" />
            <Link to="" className="text-center">
              <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36">
                Need a help in Claim?
              </h5>
            </Link>
          </div>
        </div>
      </section>

      {/* // 3 buttons */}
      <section>
        <div className="flex container mx-auto lg:max-w-7xl bg-sky-200 justify-center gap-18 lg:gap-20 py-2">
          <div className="items-center justify-center">
            <button
              onClick={handleSpecialtiesClick}
              className={`${specialties
                ? "bg-transparent hover:border-blue-800 text-blue-500 border-sky-200 border-2 border-b-4 border-b-blue-800 font-medium py-2 px-3 rounded-t-lg"
                : "bg-transparent hover:border-blue-800 text-blue-500 border-sky-200 border-2 border-b-4 font-medium py-2 px-3 rounded-t-lg"
                }`}
            >
              Specialties
            </button>
          </div>
          <div className="items-center justify-center">
            <button
              onClick={handleProceduresClick}
              className={`${procedures
                ? "bg-transparent hover:border-blue-800 text-blue-500 border-sky-200 border-2 border-b-4 border-b-blue-800 font-medium py-2 px-3 rounded-t-lg"
                : "bg-transparent hover:border-blue-800 text-blue-500 border-sky-200 border-2 border-b-4 font-medium py-2 px-3 rounded-t-lg"
                }`}
            >
              Procedure
            </button>
          </div>
          <div className="items-center justify-center">
            <button
              onClick={handleProHealthClick}
              className={`${proHealth
                ? "bg-transparent hover:border-blue-800 text-blue-500 border-sky-200 border-2 border-b-4 border-b-blue-800 font-medium py-2 px-3 rounded-t-lg"
                : "bg-transparent hover:border-blue-800 text-blue-500 border-sky-200 border-2 border-b-4 font-medium py-2 px-3 rounded-t-lg"
                }`}
            >
              ProHealth
            </button>
          </div>
        </div>
      </section>

      {/* // 1 onclick sections */}
      <section className={`${specialties ? "block" : "hidden"} lg`}>
        <div className="container px-10 py-9 mx-auto">
          <h1 className="text-3xl font-extrabold text-center montserrat my-2 text-black">
            Explore our Centres of Clinical Excellence
          </h1>
          <p className="text-xs lg:text-lg max-w-full text-center my-4 ">
            Apollo Hospitals has dedicated Centres of Excellence for several key
            specialties and super specialties. They are unique and state of the
            art facilities spread across several of the Apollo hospital
            locations and each Centre of Excellence stands out as a citadel of
            world class clinical outcomes.
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
              <div className="container md:col-span-7 col-span-full grid grid-cols-3 grid-rows-4 px-1 gap-5 md:order-2">
                {[...Array(12)].map((_, index) => (
                  <div
                    key={index}
                    className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-indigo-300"
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
      <section className={`${procedures ? "block" : "hidden"} lg`}>
        <div className="container px-10 py-9 mx-auto">
          <h1 className="text-3xl font-extrabold text-center montserrat my-2 text-black">
            Best Doctors in India
          </h1>
          <h5 className="text-xs lg:text-lg max-w-full text-center my-4">
            Learn about the world class health care we provide
          </h5>
          <div className="container mx-auto my-10">
            <div className="grid grid-cols-12 gap-4">
              <img
                className="rounded-xl md:relative top-0 object-cover col-span-full md:col-span-5 h-full sm:col-span-12 md:order-1 md:object-contain lg:object-cover"
                src={photo2}
                alt=""
              />
              <div className="container md:col-span-7 col-span-full grid grid-cols-3 grid-rows-4 gap-5 md:order-2">
                {[...Array(12)].map((_, index) => (
                  <div
                    key={index}
                    className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-indigo-300"
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

      {/* // 3 onclick sections */}
      <section className={`${proHealth ? "block" : "hidden"} lg`}>
        <div className="container px-10 py-9 mx-auto">
          <h1 className="text-3xl font-extrabold text-center montserrat my-2 text-black">
            Best Doctors in India
          </h1>
          <h5 className="text-xs lg:text-lg max-w-full text-center my-4 ">
            Learn about the world class health care we provide
          </h5>
          <div className="container mx-auto my-10">
            <div className="grid grid-cols-12 gap-4">
              <img
                className="rounded-xl md:relative top-0 object-cover col-span-full md:col-span-5 h-full sm:col-span-12 md:order-1 md:object-contain lg:object-cover"
                src={photo3}
                alt=""
              />
              <div className="container md:col-span-7 col-span-full grid grid-cols-3 grid-rows-4 gap-5 md:order-2">
                {[...Array(12)].map((_, index) => (
                  <div
                    key={index}
                    className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-indigo-300"
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

      <div className="w-full h-auto bg-sky-100 justify-center place-items-center">
        <div className="py-5 place-items-center justify-center min-w-80">
          <div className="text-semibold">
            <p>The Apollo World of Care</p>
          </div>
          <div className="font-bold text-xl">
            <big>International Patient Care</big>
          </div>
          <div className="font-semibold text-center">
            <small className="md:text-xl">
              “Bringing healthcare of International standards within the reach
              of every individual.”
            </small>
          </div>
        </div>
        <div className="w-full h-auto md:grid md:grid-cols-2 justify-center place-items-center md:p-10 p-2">
          <div className="w-full h-auto justify-center place-items-center">
            <div className="w-full h-auto mx-auto grid lg:grid-cols-3 md:grid-cols-3 grid-cols-3 justify-center place-items-center gap-x-1">
              <figure className="bg-slate-100 rounded-xl shadow-2xl dark:bg-slate-800 w-full max-w-[150px] max-h-[150px] justify-center text-center hover:bg-indigo-300 hover:text-white">
                <div className="place-items-center pt-1">
                  <img
                    src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_hsptl.svg"
                    className="h-16"
                    alt="icon"
                  />
                </div>
                <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pb-2">
                  <small>Hospitals</small>
                </div>
              </figure>
              <figure className="bg-slate-100 rounded-xl shadow-2xl dark:bg-slate-800 w-full max-w-[150px] max-h-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                <div className="place-items-center pt-1">
                  <img
                    src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_speciality.svg"
                    className="h-16"
                    alt=""
                  />
                </div>
                <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pb-2">
                  <small>Speciality</small>
                </div>
              </figure>
              <figure className="bg-slate-100 rounded-xl shadow-2xl dark:bg-slate-800 w-full max-w-[150px] max-h-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white overflow-auto">
                <div className="place-items-center pt-1">
                  <img
                    src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_planyourtrip.svg"
                    className="h-16"
                    alt="icon"
                  />
                </div>
                <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pb-2">
                  <small>Plan Your Trip</small>
                </div>
              </figure>
              <figure className="bg-slate-100 rounded-xl shadow-2xl  dark:bg-slate-800 w-full max-w-[150px] max-h-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                <div className="place-items-center pt-1">
                  <img
                    src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_testimonials.svg"
                    className="h-16"
                    alt="icon"
                  />
                </div>
                <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pb-2">
                  <small>Testimonials</small>
                </div>
              </figure>
              <figure className="bg-slate-100 rounded-xl shadow-2xl  dark:bg-slate-800 w-full max-w-[150px] max-h-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                <div className="place-items-center pt-1">
                  <img
                    src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_faq.svg"
                    className="h-16"
                    alt="icon"
                  />
                </div>
                <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pb-2">
                  <small>FAQ’s</small>
                </div>
              </figure>
              <figure className="bg-slate-100 rounded-xl shadow-2xl  dark:bg-slate-800 w-full max-w-[150px] max-h-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                <div className="place-items-center pt-1">
                  <img
                    src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_doctor.svg"
                    className="h-16"
                    alt="icon"
                  />
                </div>
                <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pb-2">
                  <small>Find A Doctor</small>
                </div>
              </figure>
              <figure className="bg-slate-100 rounded-xl shadow-2xl dark:bg-slate-800 w-full max-w-[150px] max-h-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                <div className="place-items-center pt-1">
                  <img
                    src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_onlineconsultation.svg"
                    className="h-16"
                    alt="icon"
                  />
                </div>
                <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pb-2">
                  <small>Online Consultation</small>
                </div>
              </figure>
              <figure className="bg-slate-100 rounded-xl shadow-2xl dark:bg-slate-800 w-full max-w-[150px] max-h-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                <div className="place-items-center pt-1">
                  <img
                    src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_Apollo Insurance.svg"
                    className="h-16"
                    alt="icon"
                  />
                </div>
                <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pb-2">
                  <small>Apollo Insurance</small>
                </div>
              </figure>
              <figure className="bg-slate-100 rounded-xl shadow-2xl dark:bg-slate-800 w-full max-w-[150px] max-h-[150px] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
                <div className="place-items-center pt-1">
                  <img
                    src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_visa.svg"
                    className="h-16"
                    alt="icon"
                  />
                </div>
                <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pb-2">
                  <small>Visa</small>
                </div>
              </figure>
            </div>

            <div className="max-w-[500px] p-5 gap-x-10 border-2 rounded-md bg-white shadow border-green-800 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900 hover:text-white md:grid md:grid-cols-2 justify-items-center place-items-end">
              <div className="font-light text-gray-700 hover:text-white">
                <code>International Number</code>
              </div>
              <div>
                <h4>
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-blue-500 text-start"
                  />
                  (+91) 40 4344 1066
                </h4>
              </div>
            </div>
          </div>
          <div className="place-items-center shadow-2xl border-8 rounded-xl border-white w-auto">
            <img
              src="https://cdn.apollohospitals.com/apollohospitals/international.png"
              alt="Apollo Heart Institute Expertise"
              className="rounded w-auto"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-auto justify-center text-center bg-slate-100 py-5 md:justify-center">
        <div className="font-black text-3xl py-5">
          <h1>Disclaimer</h1>
        </div>

        <div className="w-full md:w-[50rem] h-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 justify-center items-center m-auto gap-y-5 px-5">
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4 border border-slate-500 rounded-3xl">
            <img
              className="w-24 h-24 md:w-[20rem] md:h-auto md:rounded rounded-2xl mx-auto"
              src="https://cdn.apollohospitals.com/dev-apollohospitals/2024/05/transplant-disclaimer-min-m.webp"
              alt=""
              width="384"
              height="512"
            />
            <div className="text-sky-500 dark:text-sky-400 font-medium text-center shadow">
              Transplant Disclaimer{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="bg-indigo-800 text-white rounded-full"
              />
            </div>
          </div>
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4 border border-slate-500 rounded-3xl">
            <img
              className="w-24 h-24 md:w-[20rem] md:h-auto md:rounded rounded-2xl mx-auto"
              src="https://cdn.apollohospitals.com/dev-apollohospitals/2024/05/recruitment-disclaimer-min-m.webp"
              alt=""
              width="384"
              height="512"
            />
            <div className="text-sky-500 dark:text-sky-400 font-medium text-center shadow">
              Recruitment Disclaimer{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="bg-indigo-800 text-white rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-violet-500 hover:bg-gradient-to-r from-sky-500 via-sky-700 to-blue-900 w-full h-auto text-center justify-center m-auto place-items-center">
        <blockquote>
          <h1 className="text-white font-bold py-3 text-3xl">
            What Would You Like To Do Today?
          </h1>
        </blockquote>
        <div className="w-full h-auto gap-x-3 gap-y-3 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-3 justify-center shadow mx-auto place-items-center px-5 sm:px-10">
          {/* Book Appointment Card */}
          <figure className="bg-slate-100 rounded-xl shadow px-1 dark:bg-slate-800 w-full max-w-[150px] h-[21vh] justify-center text-center hover:bg-indigo-300 hover:text-white">
            <div className="place-items-center pt-3">
              <img
                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookappt_icon.svg"
                alt="icon"
                width="64"
                className=""
              />
            </div>
            <div className="text-sky-500 dark:text-sky-400 hover:text-white font-medium pt-3">
              <small>Book Appointment</small>
            </div>
          </figure>

          {/* Find Doctor Card */}
          <figure className="bg-slate-100 rounded-xl shadow px-1 dark:bg-slate-800 w-full max-w-[150px] h-[21vh] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
            <div className="place-items-center pt-3">
              <img
                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/finddoctor_icon.svg"
                alt="icon"
              />
            </div>
            <div className="text-sky-500 dark:text-sky-400 hover:text-white pt-3 font-medium">
              <small>Find Doctor</small>
            </div>
          </figure>

          {/* Find Hospital Card */}
          <figure className="bg-slate-100 rounded-xl shadow px-1 dark:bg-slate-800 w-full max-w-[150px] h-[21vh] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
            <div className="place-items-center pt-3">
              <img
                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/findhsptl_icon.svg"
                alt="icon"
              />
            </div>
            <div className="text-sky-500 dark:text-sky-400 hover:text-white pt-3 font-medium">
              <small>Find Hospital</small>
            </div>
          </figure>

          {/* Book Health Check-Up Card */}
          <figure className="bg-slate-100 rounded-xl shadow px-1 dark:bg-slate-800 w-full max-w-[150px] h-[21vh] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
            <div className="place-items-center pt-3">
              <img
                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookhelathcheck_icon.svg"
                alt="icon"
              />
            </div>
            <div className="text-sky-500 dark:text-sky-400 hover:text-white pt-3 font-medium">
              <small>Book Health Check-Up</small>
            </div>
          </figure>

          {/* Consult Online Card */}
          <figure className="bg-slate-100 rounded-xl shadow px-1 dark:bg-slate-800 w-full max-w-[150px] h-[21vh] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
            <div className="place-items-center pt-3">
              <img
                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/buymedicines_icon.svg"
                alt="icon"
              />
            </div>
            <div className="text-sky-500 dark:text-sky-400 hover:text-white pt-3 font-medium">
              <small>Consult Online</small>
            </div>
          </figure>

          {/* View Health Record Card */}
          <figure className="bg-slate-100 rounded-xl shadow px-1 dark:bg-slate-800 w-full max-w-[150px] h-[21vh] justify-center text-center my-5 hover:bg-indigo-300 hover:text-white">
            <div className="place-items-center pt-3">
              <img
                src="https://cdn.apollohospitals.com/apollohospitals/View%20Health%20Record.svg"
                alt="icon"
              />
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
