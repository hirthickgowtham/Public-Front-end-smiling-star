import style from "../SchoolEvent/SchoolEvent.module.css";
import { Events } from "../../../content/AboutUs";
import BorderLink from "./BorderLink";
import { About_filler } from "../../../content/AboutUs";
import { motion as M } from "framer-motion";


export default function SchoolEvent(){
    return(
        <>
            <h1 className={style.topic}>Memories & Moments</h1>
           <div className={style.contain}>
           <M.div className={`${style.bulb} ${style.hide}`}
                animate={{
                    opacity:[0.3,1]
                  }}
                  transition={{
                    duration: 0.7, // Time for one full movement cycle
                    repeat: Infinity, // Infinite loop
                    ease: "easeInOut", // Smooth transition
                    repeatType: "mirror", // Moves back and forth 
                  }}
            >
                 <img src={About_filler.bulb} alt="" />
            </M.div>
                <div className={style.main}>
                    {Events.map((item,index)=>(
                        <BorderLink key={index} 
                         heading={item.heading}
                         image={item.image} 
                         content={item.content} 
                         mediaLogo={item.mediaLogo}
                         link={item.link}
                         />
                    ))}
                </div>
           </div>
        </>
    )
}