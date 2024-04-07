import certificate1 from "../assets/certificates/certificateOfReg.png"
import certificate2 from "../assets/certificates/certificateOfCompliance.png"
function AboutUs() {
    return (
        <>
            <div className="  text-2xl font-medium py-2  border-b-4 border-pink-600 border-solid  mb-3 inline-block">
                About Us
            </div>
            <div className="pb-5">
                <div>Krish Surgicals is a leading provider of high-quality medical equipment and supplies based in Kirti Nagar, Delhi. With a commitment to excellence and customer satisfaction, we strive to meet the diverse needs of healthcare professionals and institutions.
                    <br />
                    <br />
                    Our extensive range of products includes surgical instruments, hospital furniture, diagnostic equipment, and much more, sourced from reputable manufacturers to ensure reliability and durability. We take pride in offering competitive pricing and efficient service to our valued customers.
                    <br />
                    <br />

                    Contact us today to learn more about our products and services, and experience the Krish Surgicals difference.</div>
            </div>


            <div >
                <div className="  text-2xl font-medium py-1  border-b-4 border-pink-600 border-solid  mb-3 inline">Licences and Certifications</div>
            </div>
            <div className="grid grid-cols-2 gap-5 my-10">
                <div>
                    <img src={certificate1} alt="" />
                </div>
                <div>
                    <img src={certificate2} alt="" />
                </div>

            </div >

        </>

    )
}

export default AboutUs