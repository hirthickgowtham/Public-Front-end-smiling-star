import style from "./AboutHindi.module.css";
import { AboutHindi as AH } from "../../../../content/Programs/Hindi";
import AboutProg from "../../Bharatanatyam/AboutUs_component/AboutProg";

export default function AboutHindi(){
    return(
        <>
            <div className={style.contain}>
                <AboutProg heading={AH.Heading} content={AH.content} image={AH.image} />
            </div>
        </>
    )
}