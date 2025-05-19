import style from "./ThablaGallery.module.css";
import { TG } from "../../../../content/Programs/Thabela";
import ProgGallery from "../../DayCare/Gallery_component/ProgGallery";

export default function ThablaGallery(){
    return(
        <>
            <div className={style.contain}>
                <ProgGallery gallery={TG} color={"#EDBA1D"}/>
            </div>
        </>
    )
}