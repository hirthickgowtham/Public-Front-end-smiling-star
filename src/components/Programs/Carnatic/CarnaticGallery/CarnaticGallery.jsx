import style from "./CarnaticGallery.module.css"
import { Carnaticgallery } from "../../../../content/Programs/Carnatic"
import ProgGallery from "../../DayCare/Gallery_component/ProgGallery"
export default function CarnaticGallery(){
    return(
        <>
            <div className={style.contain}>
               <ProgGallery gallery={Carnaticgallery}/> 
            </div>
        </>
    )
}