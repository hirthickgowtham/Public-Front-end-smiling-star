import style from "./AboutPiano.module.css";
import { Aboutpiano as AH } from "../../../../content/Programs/Piano";
import AboutProg from "../../Bharatanatyam/AboutUs_component/AboutProg";

export default function AboutPiano(){
    return(
        <>
            <div className={style.contain}>
                <AboutProg heading={AH.heading} content={AH.content} image={AH.image} />
            </div>
        </>
    )
}