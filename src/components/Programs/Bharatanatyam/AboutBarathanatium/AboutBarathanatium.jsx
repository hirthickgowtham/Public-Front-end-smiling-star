import { Aboutbaranatiyam } from "../../../../content/Programs/Barathanatiyam";
import style from "./AboutBarathanatium.module.css"
import AboutProg from "../AboutUs_component/AboutProg";

export default function AboutBaranatiyam(){
    return(
        <>
            <div className={style.contain}>
                {/* <img src="/images/programs/Barathanatiyam/2.png" alt="" className={style.item1} />
                <img src="/images/programs/Barathanatiyam/m1.png" alt="" className={style.item2} />
                <img src="/images/programs/Barathanatiyam/indian.png" alt="" className={style.item3} /> */}

                <AboutProg heading={Aboutbaranatiyam.heading} content={Aboutbaranatiyam.content} image={Aboutbaranatiyam.image} />
            </div>
        </>
    )
}