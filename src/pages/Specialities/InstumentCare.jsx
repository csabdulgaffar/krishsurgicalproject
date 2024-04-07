import image from "../../assets/images/general-surgery.jpg"
import Button from "../../components/Button"
function InstumentCare() {
    return (

        <div className="leading-10">
            <div className="text-xl font-serif font-md py-3">
                General Surgery
            </div>
            {/* <div className="flex gap-5 pr-8 text-justify justify-end"> */}
            <div >
                {/* <div className="pr-8 size-96 inline float-left items-center text-center"> */}
                <img src={image} className="size-96 inline-block float-left items-center pr-8 bg-cover" alt="" />
                {/* </div> */}
                <div className="pr-8 text-justify" >
                    <div>
                        Schilling Medisystem Surgical instruments can be one of the most important investments. Therefore, a good care and maintenance regimen is extremely essential to keep all of your Schilling Medisystem surgical instruments looking like new and functioning properly for a long-long time besides producing quality surgical outcome every time.

                        No steel is truly "stainless". It's a fact that so-called stainless steel is subject to both water-spotting and staining. However, what many people identify as "rust" usually turns out to be something else !

                        All our processes adhere to the stringent criteria laid down under ISO 9001:2008 & 13485:2003 global quality standards and we believe that such high standards coupled with high grade conforming materials ensure that any instrument bearing the Schilling Medisystem name will meet the demand of even the most discerning operator.</div>

                </div>
            </div>
            <div>

            </div>
            <div className="flex gap-5 py-10">
                <div>Download Catalogue from Here - </div>
                <Button>Download</Button>

            </div>

        </div >
    )
}

export default InstumentCare