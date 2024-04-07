import image from "../../assets/images/general-surgery.jpg"
import Button from "../../components/Button"
function RecommendedSets() {
    return (
        <div className="leading-9">
            <div className="text-xl font-serif font-md py-3">
                Orthopedics            </div>
            {/* <div className="flex gap-5 pr-8 text-justify justify-end"> */}
            <div >
                {/* <div className="pr-8 size-96 inline float-left items-center text-center"> */}
                <img src={image} className="size-96 inline-block float-left items-center pr-8 bg-cover" alt="" />
                {/* </div> */}
                <div className="pr-8 text-justify" >
                    Schilling Medisystem has developed a Surgical Instrumentation Sets catalogue which describes the exhaustive instrument requirement for a particular surgical intervention after researching deeply into the surgical steps of various surgeries & matching them with the products in the Schilling Medisystem portfolio.

                    Such catalogue could be a readymade resource to a number of people within a healthcare institution including the operating faculty, technical staff, biomedical department, purchase or commercial section etc. reducing the hassles of the Schilling Medisystem ordering & record keeping.
                    <br />
                    <br />
                    However, Schilling Medisystem also suggests that every recommended surgical set requirement should be validated for its consistency as per the surgical necessity specific to an institution, department, specialty or an operating surgeon's technique / working approach etc. All Schilling Medisystem Surgical Instrumentation Sets are customizable & upgradeable.
                    <br />
                    <br />
                    Schilling Medisystem does not hold any responsibility, in whatsoever form, in terms of the consistency, completeness & entirety of the instrument information included in recommended set(s) in order to achieve a specific surgical outcome.
                    <br />
                    <br />
                    Neither Schilling Medisystem nor its promoter - Myra & Co., is held liable for any claims, whatsoever, arising out of the inability, (deficiency or non-fulfilment) of a particular recommended surgical set to achieve a specific surgical conclusion. Moreover, both Schilling Medisystem & Myra & Co. accepts no liability for the consequences of any action taken on the basis of the information provided as recommendation within this catalogue.

                </div>
            </div>

            <div className="flex gap-5 py-10">
                <div>Download Catalogue from Here - </div>
                <Button>Download</Button>

            </div>

        </div>
    )
}

export default RecommendedSets