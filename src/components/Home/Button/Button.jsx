import {motion} from "framer-motion";
import style from "./Button.module.css"



export default function Button() {


   

    return (
        <>
        <motion.div 
        className={style.button}
        >

            <motion.div className={style.ball}>
                <i class="ri-arrow-drop-right-line"></i>
            </motion.div>
            <li className={style.button_text}>Enroll now</li>

        </motion.div>
        </>
    )
    
}