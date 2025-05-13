import style from "./PianoGallery.module.css"
import { PianoGallery as PG } from "../../../../content/Programs/Piano"
import ProgGallery from "../../DayCare/Gallery_component/ProgGallery"

export default function PianoGallery(){
    return(
        <>
            <div className={style.contain}>
                <ProgGallery gallery={PG} color={"grey"}/>
            </div>
        </>
    )
}