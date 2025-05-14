import style from "./OurStory.module.css";
import { Ourstory } from "../../../content/AboutUs";
import SlideInOnScroll from "../../Effect_comp/SlideInOnScroll";

export default function Copy({heading,content,left_image}){
    return(
        <>
            <div className={style.main}>
                <div className={style.left}>
                    <SlideInOnScroll duration="2">
                    <div><h1>{heading}</h1></div>
                    <div>{content}</div>
                    </SlideInOnScroll>
                </div>
                <div className={style.right}>
                    <div className={style.left_img}>
                        <SlideInOnScroll direction="right" duration="2">
                            <img src={left_image} alt="" />
                        </SlideInOnScroll>
                    </div>
                </div>
            </div>
        </>
    )
}