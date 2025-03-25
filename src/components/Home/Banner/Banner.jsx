import style from "./Banner.module.css";
import { Banner_img } from "../../../content/Home";

export default function Banner(){
    return(
        <>
            <div className={style.main}>
                  <img src={Banner_img.images} alt="img" />  
            </div>
        </>
    )
}