import { NavLink } from "react-router-dom"
import logo from "../assets/images/logo.png"

function Header() {
    return (
        <>
            <header className="bg-white-100 ">
                <nav className="flex text-medium justify-between max-w-screen-2xl mx-auto border-b-2 border-solid border-gray-300">
                    <div className="font-bold text-4xl">
                        <NavLink activeClassName="active" to="/">
                            <img className="w-40" src={logo} alt="Logo" />
                        </NavLink>
                    </div>
                    <ul className="flex items-center ">
                        <NavLink activeClassName="active" className="p-3 hover:bg-pink-600 hover:text-white" to="/">Home</NavLink>
                        <NavLink activeClassName="active" className="p-3 hover:bg-pink-600 hover:text-white" to="/specialities">Specialities</NavLink>
                        <NavLink activeClassName="active" className="p-3 hover:bg-pink-600 hover:text-white" to="/resource">Resource</NavLink>
                        <NavLink activeClassName="active" className="p-3 hover:bg-pink-600 hover:text-white" to="/contact-us">Contact Us</NavLink>
                        <NavLink activeClassName="active" className="p-3 hover:bg-pink-600 hover:text-white" to="/about-us">About Us</NavLink>
                    </ul>

                </nav>
            </header>
        </>
    )
}

export default Header