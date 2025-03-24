import style from "./Title_card.module.css";
import Button from "../Button/Button";
import About_us from "../About_us/Abous_us.jsx";
import { easeInOut, motion } from "framer-motion";

export default function Title_Card() {
    // 🌟 Parent container animation controls all children smoothly
    const containerAnim = {
        hidden: { opacity: 0, y: 75 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: "easeInOut",
                staggerChildren: 0.3, // Delay between child elements
                when: "beforeChildren", // Parent animates first
            },
        },
    };

    // 🌞 Sun infinite rotation
    const sunSpin = {
        hidden: { rotate: 0, y: 50, opacity: 0 },
        visible: { rotate: 360, y: 0, opacity: 1 },
    };

    // 🌟 Star cloud floating animation
    const starCloud = {
        hidden: { rotate: 0, y: 50, x: 30,opacity: 0},
        visible: { rotate: 15, y: 0, x: 0 ,opacity: 1},
    };

    // ✏️ Pencil animation (fade-in + bounce loop)
    const pencilAnim = {
        hidden: { y: 75, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <>
            {/* 🌟 Main Container controls all children smoothly */}
            <motion.div
                variants={containerAnim}
                initial="hidden"
                animate="visible"
                className={style.main_continer}
            >
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
                            src="images/sunn.jpg.png"
                            alt="Sun"
                        />

                        {/* 🌟 Star Cloud Floating */}
                        <motion.img
                            variants={starCloud}
                            transition={{rotate:{
                                duration: 2,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "reverse",
                            },
                            y:{
                              duration: 1, ease: "easeInOut"
                            },
                            x:{
                                duration: 2,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "reverse",
                            },
                            opacity: { duration: 1, ease: "easeInOut" },
                        }}
                            className={style.star}
                            src="images/star_cloud.png"
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
                            <Button />
                            <div className={style.number}>
                                <div className={style.button2}>
                                    <div className={style.ball2}>
                                        <i className="ri-phone-line"></i>
                                    </div>
                                    <div className={style.contact_number_text}>
                                        <li className={style.button_text}>Contact us</li>
                                        <li className={style.button_small_text}>(123) 456 798</li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ✏️ Pencil Animation (Entrance + Bounce) */}
                    <motion.div className={style.image_continer}>
                        <motion.img
                            variants={pencilAnim}
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                            }}
                            src="images/pencil.png"
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
