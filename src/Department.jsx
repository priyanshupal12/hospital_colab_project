import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartbeat,
  faBone,
  faXRay,
  faBrain,
  faUserMd,
  faLungs,
  faRibbon,
  faHospital,
  faAmbulance,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';


function Department() {
  const [activeTab, setActiveTab] = useState("section1");

  const handleToggle = (section) => {
    setActiveTab(section);
  };

  return (
    <>
      <section>
        <div className="w-full h-auto justify-center flex md:flex-row flex-col my-5">
          <div className="flex flex-col gap-y-5 mb-5 ">
            <Menu as="div" className="relative inline-block text-left px-12 max-w-sm">
              <div className="">
                <MenuButton
                  onClick={() => handleToggle("section1")}
                  className={` ${activeTab === "section1"
                      ? "bg-green-500"
                      : "bg-gray-300 hover:bg-gray-400"
                    } place-items-center inline-flex w-full md:min-w-80 justify-evenly md:justify-end md:gap-x-[93px] gap-x-14 px-5 py-1 rounded-md bg-white text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-blue-300`}
                >
                  <FontAwesomeIcon
                    icon={faHeartbeat}
                    className="w-8 h-8 text-red-600"
                  />
                  HEART
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-3 h-3 text-blue-500 hover:text-white"
                  />
                </MenuButton>
              </div>

              {/* <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Healthy Heart Program
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Treatments
                    </a>
                  </MenuItem>
                </div>
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Facilities
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Clinical Team
                    </a>
                  </MenuItem>
                </div>
              </MenuItems> */}
            </Menu>
            <Menu as="div" className="relative inline-block text-left px-12 max-w-sm">
              <div>
                <MenuButton
                  onClick={() => handleToggle("section2")}
                  className={`${activeTab === "section2"
                      ? "bg-green-500"
                      : "bg-gray-300 hover:bg-gray-400"
                    } place-items-center inline-flex w-full md:min-w-80 justify-evenly md:justify-end px-5 py-1 md:gap-x-[68px] gap-x-8 rounded-md bg-white text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-blue-300`}
                >
                  <FontAwesomeIcon
                    icon={faBone}
                    className="text-yellow-400 w-8 h-8"
                  />
                  ORTHOPEDICS
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-3 h-3 text-blue-500 hover:text-white"
                  />
                </MenuButton>
              </div>

              {/* <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Healthy Heart Program
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Treatments
                    </a>
                  </MenuItem>
                </div>
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Facilities
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Clinical Team
                    </a>
                  </MenuItem>
                </div>
              </MenuItems> */}
            </Menu>
            <Menu as="div" className="relative inline-block text-left px-12 max-w-sm">
              <div className="">
                <MenuButton
                  onClick={() => handleToggle("section3")}
                  className={` ${activeTab === "section3"
                      ? "bg-green-500"
                      : "bg-gray-300 hover:bg-gray-400"
                    } place-items-center inline-flex w-full md:min-w-80 justify-evenly md:justify-end px-5 py-1 md:gap-x-24 gap-x-16 rounded-md bg-white text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-blue-300`}
                >
                  <FontAwesomeIcon
                    icon={faXRay}
                    className="text-yellow-300 w-8 h-8"
                  />
                  SPINE
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-3 h-3 text-blue-500 hover:text-white"
                  />
                </MenuButton>
              </div>

              {/* <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Healthy Heart Program
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Treatments
                    </a>
                  </MenuItem>
                </div>
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Facilities
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Clinical Team
                    </a>
                  </MenuItem>
                </div>
              </MenuItems> */}
            </Menu>
            <Menu as="div" className="relative inline-block text-left px-12 max-w-sm">
              <div>
                <MenuButton
                  onClick={() => handleToggle("section4")}
                  className={` ${activeTab === "section4"
                      ? "bg-green-500"
                      : "bg-gray-300 hover:bg-gray-400"
                    } place-items-center inline-flex w-full md:min-w-80 md:justify-end justify-evenly px-5 py-1 md:gap-x-16 gap-x-7 rounded-md bg-white text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-blue-300`}
                >
                  <FontAwesomeIcon
                    icon={faBrain}
                    className="text-blue-500 text-4xl w-8 h-8"
                  />
                  NEUROSURGERY
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-3 h-3 text-blue-500 hover:text-white"
                  />
                </MenuButton>
              </div>

              {/* <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Healthy Heart Program
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Treatments
                    </a>
                  </MenuItem>
                </div>
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Facilities
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Clinical Team
                    </a>
                  </MenuItem>
                </div>
              </MenuItems> */}
            </Menu>
            <Menu as="div" className="relative inline-block text-left px-12 max-w-sm">
              <div>
                <MenuButton
                  onClick={() => handleToggle("section5")}
                  className={` ${activeTab === "section5"
                      ? "bg-green-500"
                      : "bg-gray-300 hover:bg-gray-400"
                    } place-items-center inline-flex w-full md:min-w-80 md:justify-end justify-evenly px-5 py-1 md:gap-x-12 gap-x-5 rounded-md bg-white text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-blue-300`}
                >
                  <FontAwesomeIcon
                    icon={faUserMd}
                    className="text-blue-500 w-8 h-8"
                  />
                  GASTROENTEROLOGY
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-3 h-3 text-blue-500 hover:text-white"
                  />
                </MenuButton>
              </div>

              {/* <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Healthy Heart Program
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Treatments
                    </a>
                  </MenuItem>
                </div>
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Facilities
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Clinical Team
                    </a>
                  </MenuItem>
                </div>
              </MenuItems> */}
            </Menu>
            <Menu as="div" className="relative inline-block text-left px-12 max-w-sm">
              <div>
                <MenuButton
                  onClick={() => handleToggle("section6")}
                  className={` ${activeTab === "section6"
                      ? "bg-green-500"
                      : "bg-gray-300 hover:bg-gray-400"
                    } md:text-nowrap place-items-center inline-flex w-full md:min-w-80 md:justify-end justify-evenly gap-x-3 text-nowrap md:gap-x-[40px] rounded-md bg-white px-5 py-1 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-blue-300`}
                >
                  <FontAwesomeIcon
                    icon={faLungs}
                    className="text-blue-500 w-8 h-8"
                  />
                  TRANSPLANT INSTITUTE
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-3 h-3 text-blue-500 hover:text-white"
                  />
                </MenuButton>
              </div>

              {/* <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Healthy Heart Program
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Treatments
                    </a>
                  </MenuItem>
                </div>
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Facilities
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Clinical Team
                    </a>
                  </MenuItem>
                </div>
              </MenuItems> */}
            </Menu>
            <Menu as="div" className="relative inline-block text-left px-12 max-w-sm">
              <div>
                <MenuButton
                  onClick={() => handleToggle("section7")}
                  className={` ${activeTab === "section7"
                      ? "bg-green-500"
                      : "bg-gray-300 hover:bg-gray-400"
                    } place-items-center inline-flex w-full md:min-w-80 justify-evenly md:justify-end md:gap-x-16 gap-x-10 rounded-md bg-white px-5 py-1 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-blue-300`}
                >
                  <FontAwesomeIcon
                    icon={faRibbon}
                    className="text-blue-500 w-8 h-8"
                  />
                  CANCER CENTER
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-3 h-3 text-blue-500 hover:text-white"
                  />
                </MenuButton>
              </div>

              {/* <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Healthy Heart Program
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Treatments
                    </a>
                  </MenuItem>
                </div>
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Facilities
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Clinical Team
                    </a>
                  </MenuItem>
                </div>
              </MenuItems> */}
            </Menu>
            <Menu as="div" className="relative inline-block text-left px-12 max-w-sm">
              <div>
                <MenuButton
                  onClick={() => handleToggle("section8")}
                  className={` ${activeTab === "section8"
                      ? "bg-green-500"
                      : "bg-gray-300 hover:bg-gray-400"
                    } place-items-center inline-flex w-full md:min-w-80 md:justify-end justify-evenly gap-x-[74px] md:gap-x-[110px] rounded-md bg-white px-5 py-1 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-blue-300`}
                >
                  <FontAwesomeIcon
                    icon={faHospital}
                    className="text-blue-500 w-8 h-8"
                  />
                  ICU
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-3 h-3 text-blue-500 hover:text-white"
                  />
                </MenuButton>
              </div>

              {/* <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Healthy Heart Program
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Treatments
                    </a>
                  </MenuItem>
                </div>
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Facilities
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Clinical Team
                    </a>
                  </MenuItem>
                </div>
              </MenuItems> */}
            </Menu>
            <Menu as="div" className="relative inline-block text-left px-12 max-w-sm">
              <div>
                <MenuButton
                  onClick={() => handleToggle("section9")}
                  className={` ${activeTab === "section9"
                      ? "bg-green-500"
                      : "bg-gray-300 hover:bg-gray-400"
                    } place-items-center inline-flex w-full md:min-w-80 justify-evenly  md:justify-end gap-x-10 md:gap-x-[83px] rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-blue-300`}
                >
                  <FontAwesomeIcon
                    icon={faAmbulance}
                    className="text-blue-500 w-8 h-8"
                  />
                  EMERGENCY
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="w-3 h-3 text-blue-500 hover:text-white"
                  />
                </MenuButton>
              </div>

              
            </Menu>
          </div>

          <div className="w-full px-4 text-xs">
            <div
              className={`container mx-auto h-auto ${activeTab === "section1" ? "block" : "hidden"
                } `}
            >
              <div className="grid grid-cols-11 gap-3 justify-center">
                <img
                  className="h-[600px] rounded-xl md:relative top-0 object-cover col-span-full md:col-span-4 md:order-1 md:object-contain lg:object-cover w-full"
                  src="https://images.unsplash.com/photo-1618939304347-e91b1f33d2ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
                  alt=""
                />
                <div className="container md:col-span-7 col-span-full grid grid-cols-3 md:grid-cols-3 gap-3 md:order-2">
                  {[...Array(9)].map((_, index) => (
                    <figure
                      key={index}
                      className="w-full h-auto flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-sky-400"
                    >
                      <div className="place-items-center pt-2 font-serif">
                        <h5>A Diet to Work with if You have Anorexia</h5>
                      </div>
                      <div className="text-indigo-700 dark:text-indigo-400 hover:text-white font-medium pt-1">
                        <p>Anorexia nervosa or anorexia is a sever</p>
                      </div>
                      <div>
                        <img
                          src="https://cdn.apollohospitals.com/dev-apollohospitals/2024/10/logo.svg"
                          alt="Apollo Hospitals"
                          className="max-w-10 p-1"
                        />
                      </div>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
            <div
              className={`container mx-auto ${activeTab === "section2" ? "block" : "hidden"
                } `}
            >
              <div className="grid grid-cols-12 gap-4">
                <img
                  className="rounded-xl md:relative top-0 object-cover col-span-full md:col-span-5 h-full sm:col-span-12 md:order-1 md:object-contain lg:object-cover"
                  src="https://plus.unsplash.com/premium_photo-1661375309290-81a388c5417c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3J0aG9wZWRpY3N8ZW58MHx8MHx8fDA%3D"
                  alt=""
                />
                <div className="container md:col-span-7 col-span-full grid grid-cols-3 md:grid-cols-3 grid-rows-4 gap-3 md:order-2">
                  {[...Array(10)].map((_, index) => (
                    <div
                      key={index}
                      className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-sky-500"
                    >
                      <img
                        className="h-7 md:h-10 rounded"
                        src="https://plus.unsplash.com/premium_photo-1726880466207-d85def51628f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b3J0aG9wZWRpY3N8ZW58MHx8MHx8fDA%3D"
                        alt=""
                      />
                      <div to="" className="text-center">
                        <h5 className="mb-2 text-xs md:text-base font-semibold tracking-tight text-gray-900 dark:text-white  hover:text-white max-w-36">
                          Need a help in Claim?
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className={`container mx-auto ${activeTab === "section3" ? "block" : "hidden"
                } `}
            >
              <div className="grid grid-cols-12 gap-4">
                <img
                  className="rounded-xl md:relative top-0 object-cover col-span-full md:col-span-5 h-full sm:col-span-12 md:order-1 md:object-contain lg:object-cover"
                  src="https://plus.unsplash.com/premium_photo-1722653229824-3c72c2ee9511?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BpbmV8ZW58MHx8MHx8fDA%3D"
                  alt=""
                />
                <div className="container md:col-span-7 col-span-full grid grid-cols-3 md:grid-cols-3 grid-rows-4 gap-5 md:order-2">
                  {[...Array(10)].map((_, index) => (
                    <div
                      key={index}
                      className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-sky-400"
                    >
                      <img
                        className="h-7 md:h-10 rounded"
                        src="https://media.istockphoto.com/id/1195605020/photo/central-organ-of-human-nervous-system-brain-anatomy.webp?a=1&b=1&s=612x612&w=0&k=20&c=UWvTskqT_NHf-806Z-EoXO7uaHsSyVf6xsHjkOsO_7U="
                        alt=""
                      />
                      <div to="" className="text-center">
                        <h5 className="mb-2 text-xs md:text-base font-semibold tracking-tight text-gray-900 dark:text-white  hover:text-white max-w-36">
                          Need a help in Claim?
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className={`container mx-auto ${activeTab === "section4" ? "block" : "hidden"
                } `}
            >
              <div className="grid grid-cols-12 gap-4">
                <img
                  className="rounded-xl md:relative top-0 object-cover col-span-full md:col-span-5 h-full sm:col-span-12 md:order-1 md:object-contain lg:object-cover"
                  src="https://plus.unsplash.com/premium_photo-1681488009790-e4f681a2d1d9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <div className="container md:col-span-7 col-span-full grid grid-cols-3 md:grid-cols-3 grid-rows-4 gap-5 md:order-2">
                  {[...Array(10)].map((_, index) => (
                    <div
                      key={index}
                      className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-sky-400"
                    >
                      <img
                        className="h-7 md:h-10 rounded"
                        src="https://plus.unsplash.com/premium_photo-1681487555001-a91ab40e6e87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5ldXJvfGVufDB8fDB8fHww"
                        alt=""
                      />
                      <div to="" className="text-center">
                        <h5 className="mb-2 text-xs md:text-base font-semibold tracking-tight text-gray-900 dark:text-white max-w-36 hover:text-white">
                          Need a help in Claim?
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className={`container mx-auto ${activeTab === "section5" ? "block" : "hidden"
                } `}
            >
              <div className="grid grid-cols-12 gap-4">
                <img
                  className="rounded-xl md:relative top-0 object-cover col-span-full md:col-span-5 h-full sm:col-span-12 md:order-1 md:object-contain lg:object-cover"
                  src="https://plus.unsplash.com/premium_photo-1702598804759-8fb687f774fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <div className="container md:col-span-7 col-span-full grid grid-cols-3 md:grid-cols-3 grid-rows-4 gap-5 md:order-2">
                  {[...Array(10)].map((_, index) => (
                    <div
                      key={index}
                      className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-sky-400"
                    >
                      <img
                        className="h-7 md:h-10 rounded"
                        src="https://plus.unsplash.com/premium_photo-1722658473477-0c8ab1b79acf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3RvbWFjaHxlbnwwfHwwfHx8MA%3D%3D"
                        alt=""
                      />
                      <div to="" className="text-center">
                        <h5 className="mb-2 text-xs md:text-base font-semibold tracking-tight text-gray-900 dark:text-white  hover:text-white max-w-36">
                          Need a help in Claim?
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className={`container mx-auto ${activeTab === "section6" ? "block" : "hidden"
                } `}
            >
              <div className="grid grid-cols-12 gap-4">
                <img
                  className="rounded-xl md:relative top-0 object-cover col-span-full md:col-span-5 h-full sm:col-span-12 md:order-1 md:object-contain lg:object-cover"
                  src="https://images.unsplash.com/photo-1550831106-0994fe8abcfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYW5zcGxhbnQlMjBzdXJnZXJ5fGVufDB8fDB8fHww"
                  alt=""
                />
                <div className="container md:col-span-7 col-span-full grid grid-cols-3 md:grid-cols-3 grid-rows-4 gap-5 md:order-2">
                  {[...Array(10)].map((_, index) => (
                    <div
                      key={index}
                      className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-sky-400"
                    >
                      <img
                        className="h-7 md:h-10 rounded"
                        src="https://media.istockphoto.com/id/89487296/photo/christmas-tree-fir.webp?a=1&b=1&s=612x612&w=0&k=20&c=Jel9l9J4AMG94mX8KoEYJmNi1zLDwaAtSJvbSNR9NlI="
                        alt=""
                      />
                      <div to="" className="text-center">
                        <h5 className="mb-2 text-xs md:text-base font-semibold tracking-tight text-gray-900 dark:text-white  hover:text-white max-w-36">
                          Need a help in Claim?
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className={`container mx-auto ${activeTab === "section7" ? "block" : "hidden"
                } `}
            >
              <div className="grid grid-cols-12 gap-4">
                <img
                  className="rounded-xl md:relative top-0 object-cover col-span-full md:col-span-5 h-full sm:col-span-12 md:order-1 md:object-contain lg:object-cover"
                  src="https://images.unsplash.com/photo-1582719202047-76d3432ee323?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbmNlciUyMGRpc2Vhc2V8ZW58MHx8MHx8fDA%3D"
                  alt=""
                />
                <div className="container md:col-span-7 col-span-full grid grid-cols-3 md:grid-cols-3 grid-rows-4 gap-5 md:order-2">
                  {[...Array(10)].map((_, index) => (
                    <div
                      key={index}
                      className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-sky-400"
                    >
                      <img
                        className="h-7 md:h-10 rounded"
                        src="https://images.unsplash.com/photo-1598885159329-9377168ac375?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FuY2VyfGVufDB8fDB8fHww"
                        alt=""
                      />
                      <div to="" className="text-center">
                        <h5 className="mb-2 text-xs md:text-base font-semibold tracking-tight text-gray-900 dark:text-white  hover:text-white max-w-36">
                          Need a help in Claim?
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className={`container mx-auto ${activeTab === "section8" ? "block" : "hidden"
                } `}
            >
              <div className="grid grid-cols-12 gap-4">
                <img
                  className="rounded-xl md:relative top-0 object-cover col-span-full md:col-span-5 h-full sm:col-span-12 md:order-1 md:object-contain lg:object-cover"
                  src="https://images.unsplash.com/photo-1550831106-f8d5b6f1abe9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGljdXxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
                <div className="container md:col-span-7 col-span-full grid grid-cols-3 md:grid-cols-3 grid-rows-4 gap-5 md:order-2">
                  {[...Array(10)].map((_, index) => (
                    <div
                      key={index}
                      className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-sky-400"
                    >
                      <img
                        className="h-7 md:h-10 rounded"
                        src="https://images.unsplash.com/photo-1513224502586-d1e602410265?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aWN1fGVufDB8fDB8fHww"
                        alt=""
                      />
                      <div to="" className="text-center">
                        <h5 className="mb-2 text-xs md:text-base font-semibold tracking-tight text-gray-900 dark:text-white  hover:text-white max-w-36">
                          Need a help in Claim?
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className={`container mx-auto ${activeTab === "section9" ? "block" : "hidden"
                } `}
            >
              <div className="grid grid-cols-12 gap-4">
                <img
                  className="rounded-xl md:relative top-0 object-cover col-span-full md:col-span-5 h-full sm:col-span-12 md:order-1 md:object-contain lg:object-cover"
                  src="https://plus.unsplash.com/premium_photo-1664304341769-5cbee1b0a7e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW1lcmdlbmN5fGVufDB8fDB8fHww"
                  alt=""
                />
                <div className="container md:col-span-7 col-span-full grid grid-cols-3 md:grid-cols-3 grid-rows-4 gap-5 md:order-2">
                  {[...Array(10)].map((_, index) => (
                    <div
                      key={index}
                      className="w-full flex items-center justify-center flex-col shadow-lg p-2 bg-white border border-gray-200 rounded-lg hover:shadow-slate-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-sky-400"
                    >
                      <img
                        className="h-7 md:h-10 rounded"
                        src="https://plus.unsplash.com/premium_photo-1661391674538-d1a2bf90a490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGVtZXJnZW5jeXxlbnwwfHwwfHx8MA%3D%3D"
                        alt=""
                      />
                      <div to="" className="text-center">
                        <h5 className="mb-2 text-xs md:text-base font-semibold tracking-tight text-gray-900 dark:text-white  hover:text-white max-w-36">
                          Need a help in Claim?
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Department;
