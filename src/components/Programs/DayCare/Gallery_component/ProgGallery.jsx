import { BsShadows } from "react-icons/bs"
import style from "./ProgGallery.module.css"
import ZoomInOnScroll from "../../../Effect_comp/ZoomInOnScroll"
import FadeInOnScroll from "../../../Effect_comp/FadeInOnScroll"

export default function ProgGallery({gallery,color}){
    return(
        <>
            <div><FadeInOnScroll><h1 className={style.heading} style={{textShadow:`1px 1px .3rem ${color}`}}>Gallery</h1></FadeInOnScroll></div>
            <div className={style.main}>
                {gallery.map((item, index) => (
                <ZoomInOnScroll>
                <div key={index} className={style.gal}>
                <img src={item.image} alt="image" style={{ boxShadow: `0 0 1rem ${color}` }} />
                </div>
                </ZoomInOnScroll>
                ))}
            </div>

        </>
    )
}