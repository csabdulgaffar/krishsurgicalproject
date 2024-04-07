import image from "../../assets/images/general-surgery.jpg"
import Button from "../../components/Button"
function Gynaecology() {
    return (
        <div className="leading-9">
            <div className="text-xl font-serif font-md py-3">
                Gynaecology
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
                    <li>Dilation & Curettage (removal of the uterine contents for various reasons, including completing a partial miscarriage and diagnostic sampling for dysfunctional uterine bleeding refractive to medical therapy).</li>
                    <li>Hysterectomy (removal of the uterus)</li>
                    <li>Oophorectomy (removal of the ovaries)</li>
                    <li>Tubal Ligation (a type of permanent sterilization)</li>
                    <li>Exploratory Laparotomy – may be used to investigate the level of progression of benign or malignant disease, or to assess and repair damage to the pelvic organs</li>
                    <li>Various surgical treatments for Urinary Incontinence, including Cystoscopy and sub-urethral slings</li>
                    <li>Surgical treatment of pelvic organ prolapse, including correction of cystocele and rectocele</li>
                    <li>Appendectomy – often performed to remove site of painful endometriosis implantation and/or prophylactically (against future acute appendicitis) at the time of hysterectomy or Caesarean Section. May also be performed as part of a staging operation for Ovarian Cancer</li>
                    <li>Cervical Excision Procedures (including Cryosurgery) – removal of the surface of the cervix containing pre-cancerous cells which have been previously identified on Pap-Smear</li>

                </ul>


            </div>
            <div className="flex gap-5 py-10">
                <div>Download Catalogue from Here - </div>
                <Button>Download</Button>

            </div>

        </div>)
}

export default Gynaecology