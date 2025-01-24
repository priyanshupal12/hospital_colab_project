import React from "react"


const Footer = () => {
    return (
        <>
            <footer className="w-full h-auto">
                <div className="bg-slate-800 w-full h-auto p-10 text-white flex flex-col md:flex-row flex-wrap justify-between md:px-12">
                    <div className="w-25 justify-center h-auto flex flex-col flex-wrap">
                        <div className="flex justify-start">
                            <img className="my-8" src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/logo.svg" alt="" />
                        </div>
                        <div className="flex flex-wrap justify-center rounded-full">
                            <img className="h-20 w-20 m-2" src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/jci-logo.png" alt="" />
                            <img className="h-20 w-20 m-2 hidden md:block" src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/aahrlogo.png" alt="" />
                        </div>
                        <h4 className="font-semibold hover:text-blue-500 text-xl text-center m-2">Subscribe to Our Newsletter</h4>
                        <form action="" className="flex flex-col flex-wrap my-2">
                            <input type="email" placeholder="Enter your email id" className="rounded text-center h-8 my-2" />
                            <button className="font-semibold bg-[#4ab0df] rounded h-8 my-2 text-white">Submit</button>
                        </form>
                        <div className="flex flex-col flex-wrap justify-center m-2">
                            <div className="justify-center flex flex-col font-semibold m-1">
                                Emergency
                                <span className="text-[#4ab0df]">1066</span>
                            </div>
                            <div className="justify-center flex flex-col font-semibold m-1">
                                Apollo Lifeline International
                                <span className="text-[#4ab0df]">+91 4551648165</span>
                            </div>
                            <div className="justify-center flex flex-col font-semibold m-1">
                                Health Help Line
                                <span className="text-[#4ab0df]">1860-591-1860</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-75 justify-center h-auto flex flex-row flex-wrap">
                            <div className="flex flex-col m-3">
                                <ul className="text-left mx-2 my-3">
                                    <h1 className="font-semibold">Patient Care</h1>
                                    <div className="w-[80px] border-[#4ab0df] border-b-4 h-1 rounded"></div>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Find A Doctor</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Medical Services</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Patient Testimonials</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Value Added Services</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Pay Online</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Apollo Surgery</li>
                                </ul>
                                <ul className="text-left mx-2 my-3 ">
                                    <h1 className="font-semibold">International Patients</h1>
                                    <div className="w-[150px] border-[#4ab0df] border-b-4 h-1 rounded"></div>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">About Apollo</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Hospitals</li>
                                </ul>
                                <ul className="text-left mx-2 my-3">
                                    <h1 className="font-semibold">News & Media</h1>
                                    <div className="w-[100px] border-[#4ab0df] border-b-4 h-1 rounded"></div>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">News</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Events</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Interviews</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Watch Our Videos</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Media Contacts</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Apollo Hospitals Reviews</li>
                                </ul>
                            </div>
                            <div className="flex flex-col m-3">
                                <ul className="text-left mx-2 my-3">
                                    <h1 className="font-semibold">Centres Of Excellence</h1>
                                    <div className="w-[80px] border-[#4ab0df] border-b-4 h-1 rounded"></div>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Orthopaedics</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Nephrology & Urology</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Bariatric Surgery</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Cardiology</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Pulmonology</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Gastroenterology</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Spine Surgery</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Oncology</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Neurology & Neurosurgery</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Organ Transplantation</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Robotic Surgery</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Preventive Health Check Up</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Apollo ProHealth</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Emergency Care</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Ear,Nose And Throat</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Vascular Surgery</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Pediatrics</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Dermatology</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Obstetrics And Gynaecology</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Genomic Medicine</li>
                                </ul>
                            </div>
                            <div className="flex flex-col m-3">
                                <ul className="text-left mx-2 my-3">
                                    <h1 className="font-semibold">Medical Procedures</h1>
                                    <div className="w-[80px] border-[#4ab0df] border-b-4 h-1 rounded"></div>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Proton Therapy For Cancer Treatment</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Cosmetic And Plastic Surgery</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Bone Marrow Transplant</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Oral & Maxillofacial Surgery</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Hand MicroSurgery</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">G Scan – Open Standing MRI Scan</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Hip Arthroscopy</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Minimally Invasive Cardiac Surgery</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Knee Replacement Surgery</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Cochlear Implant Surgery</li>
                                </ul>
                                <ul className="text-left mx-2 my-3 ">
                                    <h1 className="font-semibold">Blogs</h1>
                                    <div className="w-[150px] border-[#4ab0df] border-b-4 h-1 rounded"></div>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Health Library</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Covid 19 Updates</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Covid 19 FAQS</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">COVID-19 Vaccination</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">COVID-19 New Symptoms</li>
                                </ul>
                            </div>
                            <div className="flex flex-col m-3">
                                <ul className="text-left mx-2 my-3">
                                    <h1 className="font-semibold">Corporate</h1>
                                    <div className="w-[80px] border-[#4ab0df] border-b-4 h-1 rounded"></div>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Company Overview</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Our Doctors Achieve</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">The Apollo Ethos</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">The Apollo Story</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Management</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Investor Relations</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Investor Presentation</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Initiatives</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Awards & Accolades</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Careers</li>
                                </ul>
                                <ul className="text-left mx-2 my-3 ">
                                    <h1 className="font-semibold">Hospitals</h1>
                                    <div className="w-[150px] border-[#4ab0df] border-b-4 h-1 rounded"></div>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Hospitals In India</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">International Hospitals</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Apollo Clinics</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Reach Hospitals</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Apollo Cradle</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Apollo Fertility</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Apollo Cancer Centers</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Apollo Proton Centers</li>
                                </ul>
                            </div>
                            <div className="flex flex-col m-3">
                                <ul className="text-left mx-2 my-3">
                                    <h1 className="font-semibold">Academics & Research</h1>
                                    <div className="w-[80px] border-[#4ab0df] border-b-4 h-1 rounded"></div>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Courses</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Academics</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Clinical Research</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Honors List</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Apollo Torch: Alumni Network</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Web Broadcasts</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Collaborative Forums</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">What’s New</li>
                                </ul>
                                <ul className="text-left mx-2 my-3 ">
                                    <h1 className="font-semibold">Contact Us</h1>
                                    <div className="w-[150px] border-[#4ab0df] border-b-4 h-1 rounded"></div>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Post A Query</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Consult Doctors Online</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Book Physical Appointment</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Give Your Feedback</li>
                                    <li className="text-sm hover:text-[#ffe83e] text-gray-400 font-semibold">Apollo Lifeline</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="w-full h-auto flex flex-wrap justify-center flex-col gap-y-20 md:justify-center">
                        <div className="justify-center md:justify-center flex flex-wrap flex-col md:flex-row gap-10 border h-auto rounded-2xl w-[60%] m-auto">
                            <div>
                                <p>Our stents pricing<span>click here</span></p>
                                <p>Recruitment disclaimer</p>
                            </div>
                            <div>
                                <p>Total knee replacement implants pricing<span>click here</span></p>
                                <p>Covid-19 RT-PCR Test</p>
                            </div>
                            <div>
                                <p>Transplant Disclaimer</p>
                            </div>
                        </div>
                        <div className="justify-center md:justify-center flex flex-wrap flex-col md:flex-row gap-10 border h-auto rounded-2xl m-auto w-[60%]">
                            <div>
                                <h2>Apollo’s Healthcare @ your Fingertips</h2>
                                <h1>Download the app</h1>
                            </div>
                            <div className="flex flex-wrap gap-x-10">
                                <div>
                                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/appstore-icon.png" alt="Apple Store" className="img-fluid" />
                                </div>
                                <div>
                                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/playstore-icon.png" alt="Play Store" className="img-fluid" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



            </footer>
        </>
    )
}


export default Footer