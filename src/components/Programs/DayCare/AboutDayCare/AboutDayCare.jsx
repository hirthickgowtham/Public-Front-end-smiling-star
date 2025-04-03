import { AboutDaycare } from "../../../../content/Programs/DayCare";
import AboutProg from "../../Bharatanatyam/AboutUs_component/AboutProg";
import style from "./AboutDayCare.module.css"

export default function AboutDayCare(){
        return(
            <>
                <div className={style.contain}>
                    <AboutProg heading={AboutDaycare.heading} content={AboutDaycare.content} image={AboutDaycare.image}/>
                </div>
            </>
        )
}