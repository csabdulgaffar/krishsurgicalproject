import image from "../../assets/images/general-surgery.jpg"
import Button from "../../components/Button"
function Orthopedics() {
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
                    Schilling Medisystem range of Orthopaedic Surgical Instruments is a uniquely designed portfolio of bone surgery essentials dealing with the conditions involving the musculoskeletal systems which includes bones, joints, ligaments, tendons, muscles, and nerves which allows humans to move, work, and be active.
                    <br />
                    Orthopaedic surgeons use both surgical and nonsurgical means to treat musculoskeletal trauma, spine diseases, sports injuries, degenerative diseases, infections, tumours and congenital disorders.
                    <br />
                    Though Schilling Medisystem offers an array of the surgical instruments dealing into the diagnosis, treatment, rehabilitation & prevention of the injuries related to the human musculoskeletal system, some of the common procedures includes :
                    <br />

                    Schilling Medisystem - a "welding" process by which bones are fused together with bone grafts and internal devices (such as metal rods) to heal into a single solid bone.

                </div>
            </div>
            <div>
                <ul className="list-none py-6 leading-7">
                    <li>Internal Fixation - a method to hold the broken pieces of bone in proper position with metal plates, pins or screws while the bone is healing.</li>
                    <li>Joint Replacement (partial, total and revision) - when an arthritic or damaged joint is removed and replaced with an artificial joint called a prosthesis.</li>
                    <li>Soft tissue repair - the mending of soft tissue, such as torn tendons or ligaments</li>
                    <li>Abnormal enlargement or aneurysms of the large arteries in the chest</li>
                    <li>Heart failure</li>
                    <li>Arthroscopy - a procedure using special cameras and equipment to visualize, diagnose and treat problems inside a joint.
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

export default Orthopedics