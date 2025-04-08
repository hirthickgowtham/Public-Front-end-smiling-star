import style from "./CarnaticGallery.module.css"
import { Carnaticgallery } from "../../../../content/Programs/Carnatic"
import ProgGallery from "../../DayCare/Gallery_component/ProgGallery"
export default function CarnaticGallery(){
    return(
        <>
            <div className={style.contain}>
               <ProgGallery gallery={Carnaticgallery} color={"rgba(61, 89, 253, 0.91)"}/> 
            </div>
        </>
    )
}