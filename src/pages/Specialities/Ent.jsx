import image from "../../assets/images/general-surgery.jpg"
import Button from "../../components/Button"
function Ent() {
    return (
        <div className="leading-10">
            <div className="text-xl font-serif font-md py-3">
                ENT            </div>
            {/* <div className="flex gap-5 pr-8 text-justify justify-end"> */}
            <div >
                {/* <div className="pr-8 size-96 inline float-left items-center text-center"> */}
                <img src={image} className="size-96 inline-block float-left items-center pr-8 bg-cover" alt="" />
                {/* </div> */}
                <div className="pr-8 text-justify" >
                    Schilling Medisystem range of ENT Surgical Instruments is an exhaustive portfolio of products dealing into the diagnosis, evaluation & management of the anomalies relating to ear, nose, throat, head & neck including some cosmetic procedures which includes but may not be limited to :
                    <br />
                    <br />
                    <br />
                    <br />


                </div>
            </div>
            <div>
                <ul className="leading-6">
                    <li className="py-3">Ear conditions include:
                        <ul>
                            <li>Otosclerosis (a condition of the middle ear that causes hearing loss) and other problems with hearing and deafness</li>
                            <li>Otitis media with effusion – a common condition of childhood (also known as glue ear) in which the middle ear becomes blocked with fluid</li>
                            <li>Age-related hearing loss</li>
                            <li>Tinnitus (ringing in the ears) and eustachian tube dysfunction</li>
                            <li>Ear infections</li>
                            <li>Perforated eardrum and cholesteatoma</li>
                            <li>Protruding ears</li>
                        </ul>
                    </li>
                    <li className="py-3">Nose conditions include:
                        <ul>
                            <li>Sinus infection and rhino-sinusitis, including in children</li>
                            <li>Nasal injuries</li>
                            <li>Nasal polyps</li>
                            <li>Tumours of the nose</li>
                            <li>Nasal obstruction</li>
                            <li>Disorders of the sense of smell</li>
                        </ul>
                    </li>
                    <li className="py-3">Throat conditions include:
                        <ul>
                            <li>Adenoid problems – surgical removal of these small glands in the throat at the back of the nose is sometimes needed, and is usually performed in childhood</li>
                            <li>Tonsillitis, sometimes requiring surgical removal of the tonsils, usually in childhood</li>
                            <li>Hoarseness and laryngitis</li>
                            <li>Swallowing problems</li>
                            <li>Upper airway breathing problems</li>
                            <li>Snoring and obstructive sleep apnoea (when breathing stops during sleep)</li>
                        </ul>
                    </li>
                    <li className="py-3">Head and neck conditions include:
                        <ul>
                            <li>Cancer affecting the mouth, oral cavity, throat (pharynx), voice box (larynx), salivary glands, skull base, or the nose and sinuses</li>
                            <li>Thyroid and parathyroid problems</li>
                            <li>Facial skin lesions including skin cancer</li>
                        </ul>
                    </li>
                    <li className="py-3">Facial cosmetic surgery is also part of ENT surgery and includes:
                        <ul>
                            <li>Rhinoplasty (nose surgery)</li>
                            <li>Otoplasty (ear surgery)</li>
                            <li>Blepharoplasty (removal of excess skin and fat pads around the upper and lower eyelids)</li>
                            <li>Facial reconstruction following trauma or cancer</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="flex gap-5 py-10">
                <div>Download Catalogue from Here - </div>
                <Button>Download</Button>

            </div>

        </div>
    )
}

export default Ent