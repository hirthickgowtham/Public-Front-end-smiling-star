import style from "./AboutCarnatic.module.css"
import AboutProg from "../../Bharatanatyam/AboutUs_component/AboutProg"
import { Aboutcarnatic } from "../../../../content/Programs/Carnatic"

export default function AboutCarnatic(){
    return(
        <>
            <div className={style.contain}>
                <AboutProg heading={Aboutcarnatic.heading} content={Aboutcarnatic.content} image={Aboutcarnatic.image}/>
            </div>
        </>
    )
}