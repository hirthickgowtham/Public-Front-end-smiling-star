import { FaRegCopyright } from "react-icons/fa";
import style from "./CopyRight.module.css";

export function CopyRight(){
    return(
    <>
        <h1 className={style.copy}><FaRegCopyright /> CopyRight </h1>
        <div className={style.created}>Designed & Developed by -<a href="https://yourwebsite.com" target="_blank"> Dept Of Iot And Cybersecurity </a> </div>
    </>
        )
}