import map from "../assets/images/map.png"
function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-5 mt-50px">
            <div className="max-w-screen-lg mx-auto px-4 flex justify-between ">
                <div className="flex flex-col gap-2">
                    <div className="font-serif text-xl py-3 border-b-4 border-pink-600 border-solid  mb-3">Corporate Office</div>
                    <div>
                        <div>123 Laxmi Nagar</div>
                        <div>Near XYZ Market</div>
                        <div>New Delhi -11050</div>


                    </div>
                    <div>Contact Us : 9876543210</div>
                    <div>Email Us : WzZpY@example.com</div>
                    <div >Click to Navigate: <img className="w-24 p-2" src={map} alt="" /></div>
                </div>
                <div >
                    <div className="font-serif text-xl py-3 border-b-4 border-pink-600 border-solid  mb-3">Certificate & Licenses</div>
                    <div className="flex flex-col gap-2">
                        <div>Ministry of Health</div>
                        <div>Surgical India</div>
                        <div>Govt. of India</div>
                    </div>
                </div>
                <div>
                    <div className="font-serif text-xl py-3 border-b-4 border-pink-600 border-solid  mb-3">Connect with Us</div>
                    <div className="flex flex-col gap-2"> <div>Linkedin</div>
                        <div>Facebook</div>
                        <div>Twitter</div></div>

                </div>

            </div>
        </footer>
    )
}

export default Footer