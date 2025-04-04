import style from "./HindiGallery.module.css"
import { Hindigallery } from "../../../../content/Programs/Hindi"
import ProgGallery from "../../DayCare/Gallery_component/ProgGallery"
export default function HindiGallery(){
    return(
        <>
            <div className={style.contain}>
               <ProgGallery gallery={Hindigallery}/> 
            </div>
        </>
    )
}