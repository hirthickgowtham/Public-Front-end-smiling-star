import { BsShadows } from "react-icons/bs"
import style from "./ProgGallery.module.css"

export default function ProgGallery({gallery,color}){
    return(
        <>
            <div><h1>Gallery</h1></div>
            <div className={style.main}>
               {gallery.map((item,index)=>(
                <div key={index} className={style.gal}>
                    <img src={item.image} alt="image" style={{boxShadow:`0 0 1rem ${color}`}}/>
                </div>
               ))}
            </div>
        </>
    )
}