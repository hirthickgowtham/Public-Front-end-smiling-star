import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./Nav_bar.module.css"
import Contact_button from '../Contact_us_button/contact_us_button';
import Resize from '../../hooks/Resize';
import Hamburger from "hamburger-react";
import { useEffect, useState } from 'react';
import { useNavigate,Link} from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Nav_bar() {


  const navigate = useNavigate();

    const animation_prop = {
      start:{
        y:-100,
        opacity:0
    }
,
    end:{
        y:0,
        opacity:1
    }
    }

    const trancition = {
      duration:3,
      ease: "easeInOut",
      delay: 0.2, 
      stiffness: 70,  
      type: "spring"  
    }

    const {width} = Resize();
    const [open, setopen] = useState(false)
    const [drop,setDrop] = useState(true);

    useEffect(()=>{

        if(open == false){
            setDrop(false)
           
        }
    

    },[open])

  


    const handleMouseEnter = (event) => {

        setDrop(!drop)

        if(drop == false){

            event.currentTarget.classList.add("show");
            event.currentTarget.querySelector(".dropdown-menu").classList.add("show");
        }else{
            event.currentTarget.classList.remove("show");
            event.currentTarget.querySelector(".dropdown-menu").classList.remove("show");
        }
    };





    return (
        <>
        {
            width > 1000?(

            <motion.div
            variants={animation_prop}
            initial = "start"
            animate = "end"
            transition={ trancition}
            className={style.main_continer}>

            <div className={style.content_continer}>

                <a className={style.logo} href='/'>

                    <div className={style.image_continer}>
                        <img src="/images/Home/logo.png" alt="Logo"   />
                    </div>

                    <div className={style.name}>
                        <p>Smiling Stars</p>
                    </div>

                </a>


                <div className={style.options}>

                    <li className={style.option_text}><a href="/">Home</a></li>


                    <li className={style.option_text}><a href="/About_us">About us</a></li>

                    <li
                    className="nav-item dropdown mx-3"
                    onClick={handleMouseEnter}
                   
                    >
                      <div className="nav-link text-dark dropdown-toggle fs-6 "  style={{ cursor: "pointer" }}>
                        Programs
                        </div>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/programs/day_care">Day Care</a></li>
                            <li><a className="dropdown-item" href="/programs/Barathanatiyam">Barathanatiyam</a></li>
                            <li><a className="dropdown-item" href="/programs/carnatic">Carnatic music</a></li>
                            <li><a className="dropdown-item" href="/programs/violin">Violin</a></li>
                            <li><a className="dropdown-item" href="/programs/keyboard_piano">Key Board</a></li>
                            <li><a className="dropdown-item" href="/programs/tabla_mridangam">Tabla and Mridangam</a></li>
                            <li><a className="dropdown-item" href="/programs/hindi">Hindi</a></li>

                        </ul>
                    </li>
                    

                    <li className={style.option_text}><a href="/Enquire_form">Admission</a></li>
                    <li className={style.option_text}><a href="/Locate_us">Locate us</a></li>

                </div>

                {/* Button imported here */}
                <a href="#Contact_us" className={style.btu}>
                  <Contact_button title="Contact Us"/>
                </a>
                
             

            </div>

        </motion.div>
            )
            :(<> 

<div className={style.small_main_continer}>
      <div className={style.small_content_continer}>
        <a className={style.small_logo}>
          <div className={style.image_continer}>
            <img src="/images/Home/logo.png" alt="Logo" width="50px" />
          </div>
          <div className={style.name}>
            <p>Smiling Stars</p>
          </div>
        </a>

        <Hamburger size={width>500 ?24:20} toggled={open} toggle={setopen} />
      </div>

      {open && (
        <div className={style.option_holder}>
          <li className="nav-item dropdown mx-3 my-2 text-center">
            <a className="nav-link text-dark fs-6" href="/">
              Home
            </a>
          </li>

          <li className="nav-item dropdown mx-3 my-2 text-center">
            <a className="nav-link text-dark fs-6" href="/About_us">
              About us
            </a>
          </li>

          <li
            className="nav-item dropdown mx-3 text-center"
            onClick={handleMouseEnter}
            
            >
                <div className="nav-link text-dark dropdown-toggle fs-6">
                Programs
                </div>
                <ul className="dropdown-menu w-100">
                    <li><a className="dropdown-item" href="/programs/day_care">Day Care</a></li>
                    <li><a className="dropdown-item" href="/programs/Barathanatiyam">Bharatanatyam</a></li>
                    <li><a className="dropdown-item" href="/programs/carnatic">Carnatic music</a></li>
                    <li><a className="dropdown-item" href="/programs/violin">Violin</a></li>
                    <li><a className="dropdown-item" href="/programs/keyboard_piano">Key Board</a></li>
                    <li><a className="dropdown-item" href="/programs/tabla_mridangam">Tabla and Mridangam</a></li>
                    <li><a className="dropdown-item" href="/programs/hindi">Hindi</a></li>
                </ul>
             </li>

          <li className="nav-item dropdown mx-3 my-2 text-center">
            <a className="nav-link text-dark fs-6" href="/Enquire_form">
              Admission
            </a>
          </li>

          <li className="nav-item dropdown mx-3 my-2 text-center">
            <a className="nav-link text-dark fs-6" href="/Locate_us">
              Locate us
            </a>
          </li>
        </div>
      )}
    </div>
                </>


            )
        }
        
        </>
    )
    
}

