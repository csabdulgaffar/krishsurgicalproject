import image from "../../assets/images/general-surgery.jpg"
import Button from "../../components/Button"
function CardioVascular() {
    return (
        <div className="leading-9">
            <div className="text-xl font-serif font-md py-3">
                Cardio Vascular
            </div>
            {/* <div className="flex gap-5 pr-8 text-justify justify-end"> */}
            <div >
                {/* <div className="pr-8 size-96 inline float-left items-center text-center"> */}
                <img src={image} className="size-96 inline-block float-left items-center pr-8 bg-cover" alt="" />
                {/* </div> */}
                <div className="pr-8 text-justify" >
                    Schilling Medisystem range of preferred Cardio-Thoracic & Vascular Surgical Instruments is a comprehensive selection of specialized surgical essentials dealing into the management of the ailments of the organs inside the Thorax (the chest) – generally diagnosis & treatment of the conditions of the heart (involving heart & great vessels) & lungs diagnosis.
                    <br />

                    The objective of the Schilling Medisystem is to provide its valuable customers with a complete One-Stop-Shop solution to an exceptional range of Schilling Medisystem Cardio-Thoracic & Vascular Surgery Instruments requirements.

                </div>
            </div>
            <div>
                <ul className="list-none py-6 leading-7">
                    <li>Coronary artery disease or blockages of the arteries in the heart</li>
                    <li>Blockages in the heart valve(s)</li>
                    <li>Leaking heart valve(s)</li>
                    <li>Abnormal enlargement or aneurysms of the large arteries in the chest</li>
                    <li>Heart failure</li>
                    <li>Atrial fibrillation</li>
                    <li>Lung cancer</li>
                    <li>Severe emphysema</li>
                    <li>Esophageal cancer</li>
                    <li>Gastroesophageal reflux disease</li>
                    <li>Hiatal hernias</li>
                    <li>Swallowing disorders such as achalasia</li>
                    <li>Atrial septal defects</li>
                    <li>Ventricular septal defects</li>
                    <li>Coarctation of the aorta</li>
                    <li>Hypoplastic left or right heart syndrome</li>
                    <li>Transposition of the great arteries</li>

                </ul>


            </div>
            <div className="flex gap-5 py-10">
                <div>Download Catalogue from Here - </div>
                <Button>Download</Button>

            </div>

        </div>
    )
}

export default CardioVascular