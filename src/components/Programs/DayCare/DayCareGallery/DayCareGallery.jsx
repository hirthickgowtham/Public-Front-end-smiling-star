


import style from "./DayCareGallery.module.css"
import ProgGallery from "../Gallery_component/ProgGallery"
import { DayCaregallery } from "../../../../content/Programs/DayCare"

export default function DayCareGallery(){
    return(
        <>
            <div className={style.contain}>
                <ProgGallery gallery={DayCaregallery} color={"lightblue"}/>
            </div>
        </>
    )
}