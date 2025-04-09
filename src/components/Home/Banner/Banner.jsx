import style from "./Banner.module.css";
import { Banner_img } from "../../../content/Home";
import { filler } from "../../../content/Home";

export default function Banner(){
    return(
        <>
            <div className={style.main}>
            <div className={`${style.shape} ${style.hide}`}>
                        <img src={filler.Shape} alt="color Bee" />
                </div>
                <div className={`${style.shape1} ${style.hide}`}>
                        <img src={filler.Shape} alt="color Bee" />
                </div>
                  <img src={Banner_img.images} alt="img" />  
            </div>
        </>
    )
}