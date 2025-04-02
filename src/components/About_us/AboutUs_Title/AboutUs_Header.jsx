import style from "./Header.module.css";
import { motion as M} from "framer-motion";
import { aboutUsHeader } from "../../../content/AboutUs";

export default function AboutUs_Header(){

        return(
            <>
                <div className={style.main}>
                    <div className={style.bgimg}>
                        <img src={aboutUsHeader.images.img} alt="bg img" />
                    </div>
                   
                    <div className={style.heading}>
                        <h1>
                            About Us
                        </h1>
                    </div>
                    <div className={style.sun_cloud}>
                        <img src={aboutUsHeader.images.sun_cloud} alt="sun" />
                    </div>
                    <div className={style.similing_star}>
                        <img src={aboutUsHeader.images.similing_star} alt="similing star" />
                    </div>
                    <M.div className={style.kite}
                         initial={{ y: 0 }}
                         animate={{ y: [0, -5, 0] }} // Up & down motion
                         transition={{
                           duration: 1.5,
                           repeat: Infinity,
                           ease: "easeInOut",
                         }}
                    >
                        <img src={aboutUsHeader.images.kite} alt="kite" />
                    </M.div>
                    <div className={style.fly}>
                        <img src={aboutUsHeader.images.fly} alt="fly" />
                    </div>
                    <M.div className={style.paperRocket}
                       animate={{
                        rotate: [5, -5], // Rotates back and forth
                      }}
                      transition={{
                        duration: 2, // Time for one full movement cycle
                        repeat: Infinity, // Infinite loop
                        ease: "easeInOut", // Smooth transition
                        repeatType: "mirror", // Moves back and forth seamlessly
                      }}
                    >
                        <img src={aboutUsHeader.images.paper_rocket} alt="paper Rocket" />
                    </M.div>
                    <M.div className={style.Rocket}
                        animate={{
                            rotate: [10, -10], // Rotates back and forth
                            y: [0, -20, 0], // Moves up and down slightly
                            x: [-10, 20], // Moves left and right
                          }}
                          transition={{
                            duration: 2, // Time for one full movement cycle
                            repeat: Infinity, // Infinite loop
                            ease: "easeInOut", // Smooth transition
                            repeatType: "mirror", // Moves back and forth seamlessly
                          }}
                    >
                        <img src={aboutUsHeader.images.Rocket} alt="image" />
                    </M.div>

                    <div className={style.Cloud}>
                        <img src={aboutUsHeader.images.Cloud} alt="cloud" />
                    </div>
                </div>
            </>
        )
}