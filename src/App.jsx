import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import Home from "./pages/Home"
import Specialities from "./pages/Specialities"
import Resource from "./pages/Resource"
import AppLayout from "./components/AppLayout"

import GeneralSurgery from "./pages/Specialities/GeneralSurgery"
import CardioVascular from "./pages/Specialities/CardioVascular"
import RecommendedSets from "./pages/Specialities/RecommendedSets"
import Orthopedics from './pages/Specialities/Orthopedics';
import Gynaecology from './pages/Specialities/Gynaecology';
import Ent from './pages/Specialities/Ent';
import InstumentCare from './pages/Specialities/InstumentCare';

export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route element={<AppLayout />} >
          <Route path="/" element={<Home />} />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/specialities" element={<Specialities />} >

            <Route path="general-surgery" element={<GeneralSurgery />} />
            <Route path="cardio-vascular" element={<CardioVascular />} />
            <Route path="recommended-sets" element={<RecommendedSets />} />
            <Route path="orthopedics" element={<Orthopedics />} />
            <Route path="gynaecology" element={<Gynaecology />} />
            <Route path="ent" element={<Ent />} />
            <Route path="instrument-care" element={<InstumentCare />} />


          </Route>
          <Route path="/resource" element={<Resource />} />

        </Route>

      </Routes>
    </BrowserRouter>

  )
}