import { Aboutbaranatiyam } from "../../../../content/Programs/Barathanatiyam";
import style from "./AboutBarathanatium.module.css"
import AboutProg from "../AboutUs_component/AboutProg";

export default function AboutBaranatiyam(){
    return(
        <>
            <div className={style.contain}>
                
                <AboutProg heading={Aboutbaranatiyam.heading} content={Aboutbaranatiyam.content} image={Aboutbaranatiyam.image} />
            </div>
        </>
    )
}