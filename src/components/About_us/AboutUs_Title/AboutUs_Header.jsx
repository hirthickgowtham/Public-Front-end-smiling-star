import style from "./Header.module.css";
import { motion as M } from "framer-motion";
import { aboutUsHeader } from "../../../content/AboutUs";

export default function AboutUs_Header(){

        return(
            <>
                <div className={style.main}>
                    <div className={style.bgimg}>
                        <img src={aboutUsHeader.images.img} alt="bg img" />
                    </div>
                   
                    <div className={style.heading}>
                        <M.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 2,
                              ease: "easeOut",
                            }}   
                        >
                            About Us
                        </M.h1>
                    </div>
                    <M.div className={style.sun_cloud}
                        initial={{ opacity: 0, scale: 0.8, y: 500 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                          duration: 2,
                          ease: "easeOut",
                        }}   
                    >
                        <img src={aboutUsHeader.images.sun_cloud} alt="sun" />
                    </M.div>
                    <div className={style.similing_star}>
                        <img src={aboutUsHeader.images.similing_star} alt="similing star" />
                    </div>
                    <M.div className={style.kite}
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                          duration: 2,
                          ease: "easeOut",
                        }}   
                    >
                        <M.div
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
                    </M.div>
                    <M.div className={style.fly}
                         initial={{ opacity: 0, scale: 0.7, y: 30 }} // Smaller, above, and rotated
                         animate={{ opacity: 1, scale: 1, y: 0}}      // Overshoot a bit
                         transition={{
                           duration: 2.5,
                           delay: 0.6,
                           ease: [0.34, 1.56, 0.64, 1], // Spring-like pop effect
                         }}   
                    >
                        <img src={aboutUsHeader.images.fly} alt="fly" />
                    </M.div>
                    <M.div
                        className={style.paperRocket}
                        initial={{ opacity: 0}}
                          animate={{ opacity: 1}}
                          transition={{
                            duration: 2,
                            delay:1,
                            ease: "easeOut",
                          }}   
                    >
                        <M.div 
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
                    </M.div>

                    <M.div
                        className={style.Rocket}
                        initial={{ opacity: 0, y: -50, scale: 0.7, rotate: -45 }}
                        animate={{ opacity: 1, y: 0, scale: 1,rotate: 0  }}
                        transition={{ duration: 2, ease: "easeOut" }}
                    >
                        <M.div
                            animate={{
                                rotate: [10, -10],
                                x: [-10, 20],
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "mirror",
                                delay: 1, // delay loop till initial finishes
                            }}
                        >
                            <img src={aboutUsHeader.images.Rocket} alt="Rocket" />
                        </M.div>
                    </M.div>



                    <div className={style.Cloud}>
                        <img src={aboutUsHeader.images.Cloud} alt="cloud" />
                    </div>
                </div>
            </>
        )
}