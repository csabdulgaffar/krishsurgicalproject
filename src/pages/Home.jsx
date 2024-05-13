import { useEffect } from "react";
import { useState } from "react";
import image1 from "../assets/images/general-surgery.jpg"
import { FaChevronDown } from "react-icons/fa";
import { useRef } from "react";

import video2 from "../assets/videos/video2.mp4"
import video3 from "../assets/videos/video3.mp4"

import React from 'react';

const ImageCard = ({ imageUrl, label }) => {
    return (
        <div className="relative">
            <div
                style={{ backgroundImage: `url(${imageUrl})` }}
                className="w-full h-48 sm:h-64 md:h-80 bg-cover bg-center bg-no-repeat transition-all cursor-pointer duration-300 hover:scale-105"
            >
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                    {label}
                </div>
            </div>
        </div>
    );
};



function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const testimonialsRef = useRef(null);

    const images = [video2, video3];
    useEffect(() => {

        setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
    })

    const scrollToTestimonials = () => {
        testimonialsRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <>
            <div className="flex items-center justify-center h-5/6">
                <div className="relative w-full h-full">
                    <video
                        className="object-cover w-full h-5/6"
                        autoPlay
                        loop
                        muted
                    >
                        <source src={images[currentImageIndex]} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 flex  flex-col gap-10 items-center justify-center items-center">

                        <div className="text-6xl font-bold text-pink-500 animate-textGlowPink transition-all duration-300 hover:scale-105">Quality.</div>
                        <div className="text-6xl font-bold text-pink-500 animate-textGlowPink transition-all duration-300 hover:scale-105">Economy.</div>
                        <div className="text-6xl font-bold text-pink-500 animate-textGlowPink transition-all duration-300 hover:scale-105">Performance.</div>
                        <div>
                            <a
                                className="text-6xl  font-bold text-pink-500 animate-textGlowPink cursor-pointer "
                                onClick={scrollToTestimonials}
                            >
                                <FaChevronDown />
                            </a>

                            {/* Content */}
                            <div ref={testimonialsRef} className="mt-10">
                                {/* Your testimonials content goes here */}
                            </div>
                        </div>


                    </div>


                </div>
            </div>




            {/* <div
                className="bg-cover bg-center bg-no-repeat min-h-80vh "
                style={{ backgroundImage: `url(${images[currentImageIndex]})`, transition: 'background-image 0.5s ease-in-out' }}

            >
                <div className="px-10">
                    <div className="flex flex-col text-8xl font-serif text-pink-500 pt-20">
                        <div className=" animate-textGlowPink " >Quality</div>
                        <div className=" animate-textGlowPink" >Economy</div>
                        <div className="animate-textGlowPink" >Performance</div>
                    </div>
                    <div className="flex flex-col py-5 px-3">
                        <div className="font-serif text-3xl text-white font-sans font-bold py-3 animate-attractText">Get a Callback Now! </div>
                        <div>
                            <input placeholder="Enter Your Phone No." className="bg-gray-100 focus:bg-pink-100 px-3 py-1" type="text" /> <button className="bg-pink-500 px-3 py-1 radius rounded-md text-white">Submit</button>
                        </div>
                    </div>

                </div>
            </div> */}



            <div id="specialities" className="py-6 px-5" >

                <div className="specialities">
                    <div className="font-serif text-3xl p-2 bg-pink-500 inline text-white">Specialities</div>
                </div>
                {/* <div className="grid grid-cols-3 mt-5">
                    <div>
                        <img className="w-96" src="https://advinhealthcare.com/wp-content/uploads/2024/04/Featured-Urology.jpg" />
                        <h6>Urology Division</h6>
                    </div>

                    <div>
                        <img className="w-96" src="https://advinhealthcare.com/wp-content/uploads/2024/04/Featured-Laparoscopy.jpg" />
                        <h6>Laparoscopy Division</h6>


                    </div>


                    <div>
                        <img className="w-96" src="https://advinhealthcare.com/wp-content/uploads/2024/04/Featured-Gynecology.jpg" />
                        <h6>Gynecology Division</h6>


                    </div>

                    <div>
                        <img className="w-96" src="https://advinhealthcare.com/wp-content/uploads/2024/04/Featured-Nephrology.jpg" />
                        <h6>Nephrology Division</h6>

                    </div>

                    <div>
                        <img className="w-96" src="https://advinhealthcare.com/wp-content/uploads/2024/04/Featured-Cardiology.jpg" />
                        <h6>Cardiology Division</h6>


                    </div>
                    <div>
                        <img className="w-96" src="https://advinhealthcare.com/wp-content/uploads/2024/04/Featured-Gastrology.jpg" />
                        <h6>Gastrology Division</h6>

                    </div>

                </div> */}
                <div className="grid grid-cols-3 mt-5 px-20 gap-10">
                    <ImageCard imageUrl="https://advinhealthcare.com/wp-content/uploads/2024/04/Featured-Urology.jpg" label="Urology Division" />
                    <ImageCard imageUrl="https://advinhealthcare.com/wp-content/uploads/2024/04/Featured-Laparoscopy.jpg" label="Laparoscopy Division   " />
                    <ImageCard imageUrl="https://advinhealthcare.com/wp-content/uploads/2024/04/Featured-Gastrology.jpg" label="Gastrology Division" />
                    <ImageCard imageUrl="https://advinhealthcare.com/wp-content/uploads/2024/04/Featured-Nephrology.jpg" label="Nephrology Division" />
                    <ImageCard imageUrl="https://advinhealthcare.com/wp-content/uploads/2024/04/Featured-Cardiology.jpg" label="Cardiology Division" />
                    <ImageCard imageUrl="https://advinhealthcare.com/wp-content/uploads/2024/04/Featured-Gynecology.jpg" label="Gynecology Division" />



                </div>

            </div>
            <div className="px-5 pt-2" id="testimonials">
                <div className="grid grid-cols-3 py-1  text-white ">
                    <div className="flex border-2 border-solid border-white flex-col gap-2 bg-pink-500 p-8 bor">
                        <div className="font-serif text-3xl ">Testimonials</div>
                        <div >
                            <div>"The professionalism and clear communication made the entire process smooth and efficient" </div>
                            <div> - Manoj Kalra</div>
                            <div>"The professionalism and clear communication made the entire process smooth and efficient" </div>
                            <div> - Manoj Kalra</div>
                        </div>
                        <div >
                            <div>"The professionalism and clear communication made the entire process smooth and efficient" </div>
                            <div> - Manoj Kalra</div>
                            <div>"The professionalism and clear communication made the entire process smooth and efficient" </div>
                            <div> - Manoj Kalra</div>
                        </div>
                        <button className="bg-pink-500 p-2 text-white border border-solid border-white transition-all duration-300 hover:scale-105">Read More...</button>
                    </div>
                    <div className="flex border-2 border-solid border-white flex-col gap-2 bg-pink-500 p-8 bor">
                        <div className="font-serif text-3xl ">Our Valued Clients</div>
                        <div >
                            <div className="flex flex-col gap-1">
                                <div>R G Stone Hospitals</div>
                                <div>
                                    Sir Gangaram Hospital
                                </div>
                                <div>
                                    Max Healthcare Institutes
                                </div>
                                <div>
                                    Columbia Asia Hospitals
                                </div>
                                <div>
                                    Max
                                    Healthcare Institutes
                                </div>
                                <div>
                                    Sir Gangaram Hospital
                                </div>
                                <div>
                                    Max Healthcare Institutes
                                </div>
                                <div>
                                    Columbia Asia Hospitals
                                </div>
                                <div>
                                    Max Healthcare Institutes
                                </div>
                                <div>
                                    Columbia Asia Hospitals
                                </div>
                            </div>
                        </div>
                        <button className="bg-pink-500 p-2 text-white border border-solid border-white transition-all duration-300 hover:scale-105">Know More...</button>
                    </div>
                    <div className="flex border-2 border-solid border-white flex-col gap-2 bg-pink-500 p-8 bor">
                        <div className="font-serif text-3xl ">Featured Products
                        </div>
                        <div >
                            <div>Bone Reduction Clamps
                            </div>
                            <div>Microlumbar Retractor</div>
                            <div>Morse Sternotomy Retractors</div>
                            <div>Combined Plier with Cutter</div>
                            <div>Microlumbar Retractor</div>
                        </div>
                        <div >
                            <div>Bone Reduction Clamps
                            </div>
                            <div>Microlumbar Retractor</div>
                            <div>Morse Sternotomy Retractors</div>
                            <div>Combined Plier with Cutter</div>
                            <div>Microlumbar Retractor</div>
                        </div>
                        <button className="bg-pink-500 p-2 text-white border border-solid border-white transition-all duration-300 hover:scale-105">Watch Catalogue...</button>
                    </div>

                </div>
            </div>


            <div className="pt-20 text-center mx-auto grid grid-cols-2 gap-8 px-4 ">
                <div>
                    <div>
                        <div className="font-serif text-3xl p-2 bg-pink-500  inline  text-white">Who we are?</div>
                        <div className="text-justify mt-5 leading-9" >
                            Schilling Medisystem is an ISO 13485 : 2003 Medical Device Quality Management Systems Certified & CE-marked brand of General Surgical Instrumentation offering an extensive range of the surgical essentials addressing the operating room instrumentation requirement within multiple domains of Surgery, Gynaecology, ENT (Oto-Rhino-Laryngology), Orthopaedics, Micro-Surgery, Opthalmology, Neuro, Plastic, Vascular…. & a lot more.
                        </div>
                        <div className="text-justify mt-5 leading-9" >
                            Schilling Medisystem is an ISO 13485 : 2003 Medical Device Quality Management Systems Certified & CE-marked brand of General Surgical Instrumentation offering an extensive range of the surgical essentials addressing the operating room instrumentation requirement within multiple domains of Surgery, Gynaecology, ENT (Oto-Rhino-Laryngology), Orthopaedics, Micro-Surgery, Opthalmology, Neuro, Plastic, Vascular…. & a lot more.
                        </div>
                        <div className="text-justify mt-5 leading-9" >
                            Schilling Medisystem is an ISO 13485 : 2003 Medical Device Quality Management Systems Certified & CE-marked brand of General Surgical Instrumentation offering an extensive range of the surgical essentials addressing the operating room instrumentation requirement within multiple domains of Surgery, Gynaecology, ENT (Oto-Rhino-Laryngology), Orthopaedics, Micro-Surgery, Opthalmology, Neuro, Plastic, Vascular…. & a lot more.
                        </div>
                        <div className="absolute mr-5">
                            <button className="mt-5 border-2 border-solid border-pink-500 inline p-2 transition-all duration-300 hover:scale-105 ">Read More....</button>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="font-serif text-3xl p-2 bg-pink-500  inline  text-white text-center px-4 " >Send a Quick Enquiry</div>
                    <div className="p-3">Fill the form and we will get back to you</div>
                    <form className=" mx-auto grid grid-cols-1 gap-3 " onSubmit={e => e.preventDefault()}>
                        <div>
                            <div className="py-3">
                                <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                                <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg" />
                            </div>
                            <div className="py-3">
                                <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900">Phone No:</label>
                                <input type="number" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg" />
                            </div>
                            <div className="py-3">
                                <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                                <input type="email" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg" />
                            </div>
                        </div>

                        <div className="mb-5 py-3">
                            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 ">Comments</label>
                            <input type="text" id="large-input" className="block wrap w-full h-24 p-4 text-gray-900 border border-gray-300 rounded-lg" />
                        </div>
                        <button className="span bg-pink-500 py-3 mb-10 text-white transition-all duration-300 hover:bg-pink-700">Submit</button>

                    </form>

                </div>

            </div>
        </>
    )
}

export default Home