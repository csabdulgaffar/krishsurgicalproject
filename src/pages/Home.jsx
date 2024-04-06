import { useEffect } from "react";
import { useState } from "react";

import image1 from "../assets/images/nurses-patients-care-procedures.webp"
import image2 from "../assets/images/surgery.jpg"
import image3 from "../assets/images/trust.jpeg"

function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [image1, image2, image3];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval); // Cleanup the interval on unmount
    }, []);
    return (
        <>


            {/* <div className="bg-cover backdrop-blur-md back-drop-brightness-125 bg-center bg-no-repeat h-auto" style={{ backgroundImage: "url('/src/assets/images/nurses-patients-care-procedures.webp')" }}> */}
            <div
                className="bg-cover backdrop-blur-md back-drop-brightness-125 bg-center bg-no-repeat h-auto"
                style={{ backgroundImage: `url(${images[currentImageIndex]})`, transition: 'background-image 0.5s ease-in-out' }}

            >
                <div className="flex flex-col gap-1 bg-gradient-to-r from-indigo-500">
                    <div className="flex flex-col  text-5xl font-serif   text-pink-500 px-3 pt-20">
                        <div className=" animate-textGlowPink" >Quality</div>
                        <div className=" animate-textGlowPink" >Economy</div>                        <div className="animate-textGlowPink" >Performance</div>
                    </div>
                    <div className="flex flex-col py-5 px-4">
                        <div className="font-serif text-3xl text-white font-sans font-bold py-3 animate-attractText">Get a Callback Now! </div>
                        <div> <input placeholder="Enter Your Phone No." className="bg-gray-100 focus:bg-pink-100 px-3 py-1" type="text" /> <button className="bg-pink-500 px-3 py-1 radius rounded-md text-white">Submit</button></div>
                    </div>

                </div>
            </div>



            <div className="grid grid-cols-3 py-1  text-white ">
                <div className="flex border-2 border-solid border-white flex-col gap-2 bg-pink-500 p-8 bor">
                    <div className="font-serif text-3xl ">Testimonials</div>
                    <div >
                        <div>"The professionalism and clear communication made the entire process smooth and efficient" </div>
                        <div> - Manoj Kalra</div>
                    </div>
                    <button className="bg-pink-500 p-2 text-white border border-solid border-white">Read More...</button>
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
                        </div>
                    </div>
                    <button className="bg-pink-500 p-2 text-white border border-solid border-white">Know More...</button>
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
                    <button className="bg-pink-500 p-2 text-white border border-solid border-white">Watch Catalogue...</button>
                </div>

            </div>
            <div className="grid grid-cols-2 py-2 gap-5 mt-5 ">
                <div>
                    <div className="font-serif text-3xl p-2 bg-pink-500  inline  text-white">Who we are?</div>
                    <div className="text-justifym mt-5 leading-9" >
                        Schilling Medisystem is an ISO 13485 : 2003 Medical Device Quality Management Systems Certified & CE-marked brand of General Surgical Instrumentation offering an extensive range of the surgical essentials addressing the operating room instrumentation requirement within multiple domains of Surgery, Gynaecology, ENT (Oto-Rhino-Laryngology), Orthopaedics, Micro-Surgery, Opthalmology, Neuro, Plastic, Vascular…. & a lot more.
                    </div>
                    <button className="mt-5 border-2 border-solid border-pink-500 inline p-2 ">Read More....</button>
                </div>
                <div>
                    <div className="font-serif text-3xl p-2 bg-pink-500  inline  text-white">Specialities</div>
                    <div className="text-justifym mt-5 leading-9 list-none flex flex-col gap-3  " >
                        <li className=" border-b-2 border-pink-500 shadow-md cursor-pointer hover:text-xl">General Surgery Instruments</li>
                        <li className=" border-b-2 border-pink-500 shadow-md cursor-pointer hover:text-xl">Gynaecology Surgery Instruments</li>
                        <li className=" border-b-2 border-pink-500 shadow-md cursor-pointer hover:text-xl">ENT Surgery Instruments</li>
                        <li className=" border-b-2 border-pink-500 shadow-md cursor-pointer hover:text-xl">Orthopaedics Surgery Instruments</li>
                        <li className=" border-b-2 border-pink-500 shadow-md cursor-pointer hover:text-xl"> Cardiac Surgery Instruments</li>
                        <li className=" border-b-2 border-pink-500 shadow-md cursor-pointer hover:text-xl">Neuro Spine Surgery Instruments</li>
                        <li className=" border-b-2 border-pink-500 shadow-md cursor-pointer hover:text-xl">More coming....</li>
                    </div>
                </div>

            </div>
            <div className="pt-20 text-center">
                <div className="font-serif text-3xl p-2 bg-pink-500  inline  text-white text-center px-4 " >Send a Quick Enquiry</div>
                <div className="p-3">Fill the form and we will get back to you</div>
                <form className=" mx-auto grid grid-cols-1 gap-3 " onSubmit={e => e.preventDefault()}>
                    <div>
                        <div className="py-3">
                            <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div className="py-3">
                            <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone No:</label>
                            <input type="number" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div className="py-3">
                            <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                    </div>

                    <div className="mb-5 py-3">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comments</label>
                        <input type="text" id="large-input" className="block wrap w-full h-24 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <button className="span bg-pink-500 py-3 mb-10 text-white">submit</button>

                </form>

            </div>
        </>
    )
}

export default Home