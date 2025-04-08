import style from "./BarathanatiumGallery.module.css";
import { Barathanatiumgallery } from "../../../../content/Programs/Barathanatiyam";
import ProgGallery from "../../DayCare/Gallery_component/ProgGallery";

export default function BarathanatiumGallery(){
    return(
        <>
            <div className={style.contain}>
                <ProgGallery gallery={Barathanatiumgallery} color={"rgba(255, 166, 0, 0.911)"}/>
            </div>
        </>
    )
}