import image from "../../assets/images/general-surgery.jpg"
import Button from "../../components/Button"
function GeneralSurgery() {
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
                    Schilling Medisystems range of General Surgical Instruments boasts of a portfolio in excess of 10,000 different products, like surgical knives, hooks, curettes, scoops, scissors, dressing and tissue forceps, probes, suction tips, trocars, haemostatic forceps, needle holders, towel clamps, polypus, tissue, organ, sponge and sterilizing forceps, gags, speculums, spreaders, contractors and retractors, dilators, rongeurs, punch, clamps, rasp and saws, rib shears, pliers, chisel, gouges, levers, elevators, spatula, mallets and many more.
                    <br />

                    Schilling Medisystems promises a gamut of highest Quality instruments. 'Quality' to us means that our customers can fully rely on the safety, durability and performance of Schilling Medisystems range of surgical offerings at any time. Schilling Medisystems thrives to fulfil or exceed the expectations of the surgical practitioners by maintaining the highest production standards of ergonomics, materials and hygiene.

                </div>
            </div>
            <div>
                <ul className="py-3">
                    <li>Broadly Schilling Medisystem range of General Surgical Instrumentation can be classified into following classes</li>
                    <li>Cutting Instruments</li>
                    <li>Grasping & Holding Instruments</li>
                    <li>Haemostatic Forceps</li>
                    <li>Retractors, Spreaders & Contractors</li>
                    <li>Clamps</li>
                    <li>Accessories</li>
                </ul>

            </div>
            <div className="flex gap-5 py-10">
                <div>Download Catalogue from Here - </div>
                <Button>Download</Button>

            </div>

        </div >
    )
}

export default GeneralSurgery