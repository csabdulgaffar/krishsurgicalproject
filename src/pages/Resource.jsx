import image1 from "../assets/instruments/IMG-20240406-WA0008.jpg"
import image2 from "../assets/instruments/IMG-20240406-WA0009.jpg"
import image3 from "../assets/instruments/IMG-20240406-WA0010.jpg"
import image4 from "../assets/instruments/IMG-20240406-WA0011.jpg"
import image5 from "../assets/instruments/IMG-20240406-WA0012.jpg"
import image6 from "../assets/instruments/IMG-20240406-WA0013.jpg"
import image7 from "../assets/instruments/IMG-20240406-WA0014.jpg"
import image8 from "../assets/instruments/IMG-20240406-WA0015.jpg"


import pamplate from "../assets/pamplates/pamplate.jpg"
import pamplate2 from "../assets/pamplates/pamplate2.png"


function Resource() {
    const paths = [
        image1, image2, image3, image4
    ];

    return (
        <div>
            <div className="text-2xl py-3 font-medium">All Instruments</div>
            <div className="grid grid-cols-2 gap-4 border border-solid border-gray-100 mx-auto text-center">
                {paths.map((path, index) => (
                    <div key={index}>
                        <img src={path} className="inline-block float-left items-center pr-8 bg-cover" alt="" />
                        <div >
                            <div className="  bg-gray-500 inline-block text-white p-1 rounded-sm">Instument Name</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="py-4 text-center">

                <button className="bg-pink-500 text-white px-4 py-2 rounded-md bg-pink-500 hover:scale-95" >View More</button>
            </div>


            <div className="text-2xl py-3 font-medium ">Schilling Medisystem</div>
            <div className="grid grid-cols-2 gap-2 max-auto ">
                <div>
                    <img src={pamplate} alt="" className="block w-full" /></div>

                <img src={pamplate2} alt="" className="block w-full" />
            </div>
        </div>
    );
}

export default Resource;