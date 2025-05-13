import style from "./ViolinGallery.module.css";
import ProgGallery from "../../DayCare/Gallery_component/ProgGallery";
import { VG } from "../../../../content/Programs/Violin";

export default function ViolinGallery(){
    return(
        <>
            <div className={style.contain}>
                <ProgGallery gallery={VG} color={"darkblue"}/>
            </div>
        </>
    )
}