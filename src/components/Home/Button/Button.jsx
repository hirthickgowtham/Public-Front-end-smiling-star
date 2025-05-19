import { motion } from "framer-motion";
import style from "./Button.module.css";

export default function Button() {
    return (
        <motion.div
            className={style.button}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
        >
            <motion.div
                className={style.ball}
                whileHover={{
                    rotate: [0, 20, -20, 0],
                    transition: { duration: 0.6 },
                }}
                whileTap={{ scale: 0.9 }}
            >
                <i className="ri-arrow-drop-right-line"></i>
            </motion.div>
            <motion.li
                className={style.button_text}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
            >
                Enroll now
            </motion.li>
        </motion.div>
    );
}
