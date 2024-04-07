import { NavLink, useNavigate } from "react-router-dom"
import { useEffect } from "react"


function SpecialitiesNavbar() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/specialities/cardio-vascular");
    }, []);


    return (
        <>
            <div className="flex flex-col gap-2">

                <NavLink activeClassName="active" className=" p-3  hover:bg-pink-600 hover:text-white" to="/specialities/cardio-vascular" > Cardio Vascular</NavLink>
                <NavLink activeClassName="active" className="p-3 hover:bg-pink-600 hover:text-white" to="/specialities/general-surgery" >General Surgery</NavLink>
                <NavLink activeClassName="active" className="p-3 hover:bg-pink-600 hover:text-white" to="/specialities/orthopedics">Orthopedics</NavLink>
                <NavLink activeClassName="active" className="p-3 hover:bg-pink-600 hover:text-white" to="/specialities/gynaecology">Gynaecology</NavLink>
                <NavLink activeClassName="active" className="p-3 hover:bg-pink-600 hover:text-white" to="/specialities/ent">ENT</NavLink>
                <NavLink activeClassName="active" className="p-3 hover:bg-pink-600 hover:text-white" to="/specialities/instrument-care">Instrument Care</NavLink>
                <NavLink activeClassName="active" className="p-3 hover:bg-pink-600 hover:text-white" to="/specialities/recommended-sets">Recommended Sets</NavLink>
            </div>

        </>
    )
}

export default SpecialitiesNavbar