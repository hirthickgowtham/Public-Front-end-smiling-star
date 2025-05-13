import { Aboutviolin as AV } from "../../../../content/Programs/Violin";
import AboutProg from "../../Bharatanatyam/AboutUs_component/AboutProg";
import style from "./AboutViolin.module.css";

export default function AboutViolin(){
        return(
            <>
                <div className={style.contain}>
                    <AboutProg heading={AV.heading} content={AV.content} image={AV.image}/>
                </div>
            </>
        )
}