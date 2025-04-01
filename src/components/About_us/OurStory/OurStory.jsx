import style from "./OurStory.module.css";
import { Ourstory } from "../../../content/AboutUs";

export default function OurStory(){
    return(
        <>
          <div className={style.contain}>
            <div className={style.main}>
                <div className={style.left}>
                    <div><h1>{Ourstory.text.head}</h1></div>
                    <div>{Ourstory.text.content}</div>
                </div>
                <div className={style.right}>
                    <div className={style.left_img}><img src={Ourstory.images.left_image} alt="" /></div>
                </div>
            </div>
          </div>
        </>
    )
}