import { Outlet } from "react-router-dom"


import SpecialitiesNavbar from "./SpecialitiesNavbar"
function Specialities() {
    return (
        <div className="grid grid-cols-4 gap-5">
            <div className="flex flex-col">
                <SpecialitiesNavbar />
            </div>
            <div className="col-span-3">
                <Outlet />
            </div>
        </div>
    )
}

export default Specialities