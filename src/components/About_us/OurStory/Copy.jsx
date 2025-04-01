import style from "./OurStory.module.css";
import { Ourstory } from "../../../content/AboutUs";

export default function Copy({heading,content,left_image}){
    return(
        <>
            <div className={style.main}>
                <div className={style.left}>
                    <div><h1>{heading}</h1></div>
                    <div>{content}</div>
                </div>
                <div className={style.right}>
                    <div className={style.left_img}><img src={left_image} alt="" /></div>
                </div>
            </div>
        </>
    )
}