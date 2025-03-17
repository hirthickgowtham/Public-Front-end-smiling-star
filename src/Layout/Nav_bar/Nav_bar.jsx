import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./Nav_bar.module.css"
import Contact_button from '../Contact_us_button/contact_us_button';
import Resize from '../../hooks/Resize';
import Hamburger from "hamburger-react";
import { useEffect, useState } from 'react';


export default function Nav_bar() {


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

            <div className={style.main_continer}>

            <div className={style.content_continer}>

                <div className={style.logo}>

                    <div className={style.image_continer}>
                        <img src="/images/logo.png" alt="Logo"   />
                    </div>

                    <div className={style.name}>
                        <p>Smiling Star</p>
                    </div>

                </div>


                <div className={style.options}>

                    <li className={style.option_text}>Home</li>


                    <li className={style.option_text}>About us</li>

                    <li
                    className="nav-item dropdown mx-3"
                    onClick={handleMouseEnter}
                   
                    >
                        <div className="nav-link text-dark dropdown-toggle fs-6">
                        Programs
                        </div>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/">Day Care</a></li>
                            <li><a className="dropdown-item" href="/">Bharatanatyam</a></li>
                            <li><a className="dropdown-item" href="/">Carnatic</a></li>
                             <li><a className="dropdown-item" href="/">Hindi</a></li>
                        </ul>
                    </li>
                    

                    <li className={style.option_text}>Admission</li>
                    <li className={style.option_text}>Locate us</li>

                </div>

                {/* Button imported here */}
                <Contact_button title="Contact Us"/>

            </div>

        </div>
            )
            :(<> 

<div className={style.small_main_continer}>
      <div className={style.small_content_continer}>
        <div className={style.small_logo}>
          <div className={style.image_continer}>
            <img src="/images/logo.png" alt="Logo" width="50px" />
          </div>
          <div className={style.name}>
            <p>Smiling Star</p>
          </div>
        </div>

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
                    <li><a className="dropdown-item" href="/">Day Care</a></li>
                    <li><a className="dropdown-item" href="/">Bharatanatyam</a></li>
                    <li><a className="dropdown-item" href="/">Carnatic</a></li>
                    <li><a className="dropdown-item" href="/">Hindi</a></li>
                </ul>
             </li>

          <li className="nav-item dropdown mx-3 my-2 text-center">
            <a className="nav-link text-dark fs-6" href="/Admission">
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

