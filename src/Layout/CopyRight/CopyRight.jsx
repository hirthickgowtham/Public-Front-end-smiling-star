import { FaRegCopyright } from "react-icons/fa";
import style from "./CopyRight.module.css";

export function CopyRight(){
    return(
    <>
        <h1 className={style.copy}><FaRegCopyright /> CopyRight </h1>
    </>
        )
}