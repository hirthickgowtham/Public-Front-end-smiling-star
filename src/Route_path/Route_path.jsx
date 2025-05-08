import { Routes, Route} from "react-router-dom";
import Home from "../pages/Home/Home";
import About_us from "../pages/About_us/About_us";
import Daycare from "../pages/Programs/DayCare/DayCare";
import Bharatanatyam from "../pages/Programs/Bharatanatyam/Bharatanatyam";
import Carnatic from "../pages/Programs/Carnatic/Carnatic";
import Hindi from "../pages/Programs/Hindi/Hindi";
import Enquire_form from "../pages/Admission_Form/Admission_page";
import Locate_us from "../pages/Locate_us/Locate_us";
import React from 'react'
import Nav_bar from "../Layout/Nav_bar/Nav_bar";
import Violin from "../pages/Programs/Violin/Violin";
import Piano from "../pages/Programs/Piano/Piano";
import Tabla_Mridangam from "../pages/Programs/Tabla_mridangam/Tabla_mridangam";

export default function Route_path() {

    return(
        <>
         
         <Nav_bar/>
        <Routes>


            

            <Route path="/" element={<Home/>} />
            <Route path="/About_us" element={<About_us/>} />

            {/* Programs */}
            <Route path="/programs/day_care" element={<Daycare/>} />
            <Route path="/programs/Barathanatiyam" element={<Bharatanatyam/>} />
            <Route path="/programs/carnatic" element={<Carnatic/>} />
            <Route path="/programs/violin" element={<Violin/>} />
            <Route path="/programs/keyboard_piano" element={<Piano/>} />
            <Route path="/programs/tabla_mridangam" element={<Tabla_Mridangam/>} />
            <Route path="/programs/hindi" element={<Hindi/>} />

            <Route path="/Enquire_form" element={<Enquire_form/>} />
            <Route path="/Locate_us" element={<Locate_us/>} />

        </Routes>
        
       </>
    )
    
}


