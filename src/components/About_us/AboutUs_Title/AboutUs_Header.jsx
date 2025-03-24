import style from "./Header.module.css";
import { aboutUsHeader } from "../../../content/AboutUs";

export default function AboutUs_Header(){
        return(
            <>
                <div className={style.main}>
                    <div className={style.bgimg}>
                        <img src={aboutUsHeader[0].img} alt="bg img" />
                    </div>
                    <div className={style.heading}>
                        <h1>
                            About Us
                        </h1>
                    </div>
                </div>
            </>
        )
}