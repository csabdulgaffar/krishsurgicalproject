import map from "../assets/images/map.png"
function ContactUs() {
    return (
        <>
            <div className="text-center font-medium text-2xl"> Contact us</div>
            <div className="py-3  text-justify">Get in touch with Krish Surgicals, your trusted medical equipment supplier located in Kirti Nagar, Delhi. Whether you have inquiries about our products, need assistance with an order, or want to explore partnership opportunities, our team is here to assist you. Contact us today for expert guidance and personalized service.</div>
            <div className="grid grid-cols-2">
                <div className="flex flex-col gap-3 pt-3">
                    <div>
                        <div className="text-xl font-medium">Address</div>
                        <div>
                            <div>123 Laxmi Nagar</div>
                            <div>Near XYZ Market</div>
                            <div>New Delhi -11050</div>
                        </div>
                    </div>
                    <div>
                        <div className="text-xl font-medium">Contact No.</div>
                        <div>
                            9990241725
                        </div>
                    </div>
                    <div>
                        <div className="text-xl font-medium">Email Id:</div>
                        <div>
                            xyz@gmail.com
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div>
                            <div className="font-serif text-xl py-3 border-b-4 border-pink-600 border-solid inline-block  mb-3">Connect with Us</div>
                            <div className="flex flex-col gap-2"> <div>Linkedin</div>
                                <div>Facebook</div>
                                <div>Twitter</div></div>

                        </div>
                        <div>
                            <div className="font-serif text-xl py-3 border-b-4 border-pink-600 border-solid inline-block  mb-3">Reach Us</div>
                            <div >Click to Navigate: <img className="w-24 p-2" src={map} alt="" /></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-center font-medium">Have any query? Write us now!!</div>
                    <form className=" mx-auto grid grid-cols-1 gap-3 " onSubmit={e => e.preventDefault()}>
                        <div>
                            <div className="py-3">
                                <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg" />
                            </div>
                            <div className="py-3">
                                <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone No:</label>
                                <input type="number" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg" />
                            </div>
                            <div className="py-3">
                                <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" id="small-input" className="block w-full p-2 text-gray-900 border" />
                            </div>
                        </div>

                        <div className="mb-5 py-3">
                            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comments</label>
                            <input type="text" id="large-input" className="block wrap w-full h-24 p-4 text-gray-900 border" />
                        </div>
                        <button className="span bg-pink-500 py-3 mb-10 text-white">submit</button>

                    </form>


                </div>
            </div>


        </>

    )
}

export default ContactUs