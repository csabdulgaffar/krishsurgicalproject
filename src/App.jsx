import { BrowserRouter, Routes, Route } from "react-router-dom"

import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import Home from "./pages/Home"
import Specialities from "./pages/Specialities"
import Resource from "./pages/Resource"
import AppLayout from "./components/AppLayout"

export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route element={<AppLayout />} >
          <Route path="/" element={<Home />} />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/specialities" element={<Specialities />} />
          <Route path="/resource" element={<Resource />} />

        </Route>

      </Routes>
    </BrowserRouter>

  )
}