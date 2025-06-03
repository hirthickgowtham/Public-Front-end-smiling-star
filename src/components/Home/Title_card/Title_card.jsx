import style from "./Title_card.module.css";
import Button from "../Button/Button";
import About_us from "../About_us/Abous_us.jsx";
import {  motion } from "framer-motion";
import { sunSpin,starCloud,containerAnim,cloud_tansition,bird,pencilAnim,movement,paper,paper_transction} from "../../../content/Home.js";

export default function Title_Card() {
   

    

    return (
        <>
            {/* 🌟 Main Container controls all children smoothly */}
            <motion.div
                variants={containerAnim}
                initial="hidden"
                animate="visible"
                className={style.main_continer}
            >



            <motion.img 
            variants={paper}
            transition={paper_transction}
            src="images/Home_random/paper_rocket.png"
             alt="" 
             className={style.paper_rocket}
             />
          
            <motion.img
            variants={bird}
            src="images/Home_random/butter_fly_stright.png"
            alt="" className={style.butter_fly}/>
            

                <div className={style.content_continer}>
                    <div className={style.welcome_content}>
                        {/* 🌞 Sun Rotation */}
                        <motion.img
                            variants={sunSpin}
                            transition={{
                                rotate: {
                                    duration: 6,
                                    ease: "linear",
                                    repeat: Infinity,
                                },
                                y: { duration: 1, ease: "easeInOut" },
                                opacity: { duration: 1, ease: "easeInOut" },
                            }}
                            className={style.sun}
                            src="images/Home/sunn.jpg.png"
                            alt="Sun"
                        />

                        {/* 🌟 Star Cloud Floating */}
                        <motion.img
                            variants={starCloud}
                            transition={{rotate:cloud_tansition,
                            y:{
                              duration: 1, ease: "easeInOut"
                            },
                            x:cloud_tansition,
                            opacity: { duration: 1, ease: "easeInOut" },
                        }}
                            className={style.star}
                            src="images/Home/star_cloud.png"
                            alt="Star Cloud"
                        />



                        

                        {/* ✨ Title Text */}
                        <div className={style.para}>
                            <p>
                                <Para>Build a foundation for a lifetime of learning</Para>
                            </p>
                        </div>

                        {/* 📲 Contact Section */}
                        <div className={style.contacts}>
                            <a className={style.button} href="http://localhost:5173/Enquire_form"> <Button /></a>
                           
                            <div className={style.number}>
                                <div className={style.button2}>
                                    <div className={style.ball2}>
                                        <i className="ri-phone-line"></i>
                                    </div>
                                    <div className={style.contact_number_text}>
                                        <li className={style.button_text}>Contact us</li>
                                        <li className={style.button_small_text}>0413-2241402</li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ✏️ Pencil Animation (Entrance + Bounce) */}
                    <motion.div className={style.image_continer}>
                        <motion.img
                            variants={pencilAnim}
                            initial="hidden"
                            animate = "visible"
                            whileInView={{  rotate: [0, 5,] }}
                            transition={{rotate:{
                            duration: 1.5,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse",
                            },y:movement,
                            opacity:movement,
                            x:movement
                            }}
                            src="images/Home/pencil.png"
                            alt="Pencil"
                        />
                    </motion.div>
                </div>
            </motion.div>

            <About_us />
        </>
    );
}

// 📝 Paragraph Animation (Word-by-Word Fade-in)
function Para({ children }) {
    return (
        <>
            {children.split(" ").map((Text, i) => (
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.3, ease: "easeOut" }}
                    key={i}
                    style={{ display: "inline-block", marginRight: "6px" }}
                    className={style.text}
                >
                    {Text}
                </motion.span>
            ))}
        </>
    );
}
