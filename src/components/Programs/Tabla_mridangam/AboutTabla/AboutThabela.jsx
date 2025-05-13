import style from "./AboutThabela.module.css";
import { Aboutthabela } from "../../../../content/Programs/Thabela";
import AboutProg from "../../Bharatanatyam/AboutUs_component/AboutProg";

export default function AboutThabela(){
    return(
        <>
            <div className={style.contain}>
                <AboutProg heading={Aboutthabela.Heading} content={Aboutthabela.content} image={Aboutthabela.image}/>
            </div>
        </>
    )
}