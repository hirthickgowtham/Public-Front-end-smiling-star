
import style from "./AboutProg.module.css"
import SlideInOnScroll from "../../../Effect_comp/SlideInOnScroll"
import SkewSlideInOnScroll from "../../../Effect_comp/SkewSlideInOnScroll"

export default function AboutProg({heading,content,image}){
    return(
        <>
        <div className={style.main}>
                
                    <div className={style.left}>
                        <SkewSlideInOnScroll direction="left">
                        <div><h1>{heading}</h1></div>
                        <div>{content}</div>
                        </SkewSlideInOnScroll>
                    </div>
                    <div className={style.right}>
                        <div className={style.left_img}><SkewSlideInOnScroll direction="right"><img src={image} alt="" /></SkewSlideInOnScroll></div>
                    </div>
        </div>
            
        </>
    )
}