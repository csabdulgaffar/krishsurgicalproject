import { NavLink } from "react-router-dom"
import logo from "../assets/images/logo.png"
import { FaSearch } from "react-icons/fa";


function Header() {
    return (
        <>
            <header className="bg-white-100 ">
                <nav className="flex text-medium justify-between max-w-screen-2xl mx-auto border-b-2 border-solid border-gray-300 items-center">
                    <div className="font-bold text-4xl">
                        <NavLink activeClassName="active" to="/">
                            <img className="w-40 transition-all duration-300 hover:scale-95" src={logo} alt="Logo" />
                        </NavLink>
                    </div>
                    <ul className="flex items-center  ">
                        <NavLink activeClassName="active" className="p-3 transition-all duration-150 hover:bg-pink-600 hover:text-white" to="/">Home</NavLink>
                        <NavLink activeClassName="active" className="p-3 transition-all duration-150  hover:bg-pink-600 hover:text-white" to="/specialities">Specialities</NavLink>
                        <NavLink activeClassName="active" className="p-3 transition-all duration-150  hover:bg-pink-600 hover:text-white" to="/resource">Resource</NavLink>
                        <NavLink activeClassName="active" className="p-3 transition-all duration-150  hover:bg-pink-600 hover:text-white" to="/contact-us">Contact Us</NavLink>
                        <NavLink activeClassName="active" className="p-3 transition-all duration-150  hover:bg-pink-600 hover:text-white" to="/about-us">About Us</NavLink>
                    </ul>
                    <div className="flex gap-4 items-center justify-center">
                        <div className="text-2xl mx-auto transition-all duration-300 hover:scale-105    ">

                            <  FaSearch />


                        </div>
                        <div>
                            <input type="text" id="first_name" className="border min-w-48 border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-all duration-300 hover:scale-105" placeholder="Search Here.." required />

                        </div>

                    </div>


                </nav>
            </header>
        </>
    )
}

export default Header