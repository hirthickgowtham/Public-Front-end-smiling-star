import style from "../SchoolEvent/SchoolEvent.module.css";
import { Events } from "../../../content/AboutUs";
import BorderLink from "./BorderLink";
import { About_filler } from "../../../content/AboutUs";
import { motion as M } from "framer-motion";
import ZoomInOnScroll from "../../Effect_comp/ZoomInOnScroll";
import FadeInOnScroll from "../../Effect_comp/FadeInOnScroll";


export default function SchoolEvent(){
    return(
        <>
            <FadeInOnScroll duration="1"><h1 className={style.topic}>Memories & Moments</h1></FadeInOnScroll>
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
                        <ZoomInOnScroll>
                        <BorderLink key={index} 
                         heading={item.heading}
                         image={item.image} 
                         content={item.content} 
                         mediaLogo={item.mediaLogo}
                         link={item.link}
                         />
                         </ZoomInOnScroll>
                    ))}
                </div>
           </div>
        </>
    )
}