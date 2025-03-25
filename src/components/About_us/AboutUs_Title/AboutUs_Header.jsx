import style from "./Header.module.css";
import { aboutUsHeader } from "../../../content/AboutUs";

export default function AboutUs_Header(){
        return(
            <>
                <div className={style.main}>
                    <div className={style.bgimg}>
                        <img src={aboutUsHeader.images.img} alt="bg img" />
                    </div>
                    <div className={style.heading}>
                        <h1>
                            About Us
                        </h1>
                    </div>
                    <div className={style.sun_cloud}>
                        <img src={aboutUsHeader.images.sun_cloud} alt="sun" />
                    </div>
                    <div className={style.fly_bird}>
                        <img src={aboutUsHeader.images.fly_bird} alt="fly_bird"/>
                    </div>
                    <div className={style.similing_star}>
                        <img src={aboutUsHeader.images.similing_star} alt="similing star" />
                    </div>
                    <div className={style.kite}>
                        <img src={aboutUsHeader.images.kite} alt="kite" />
                    </div>
                    <div className={style.fly}>
                        <img src={aboutUsHeader.images.fly} alt="fly" />
                    </div>
                    <div className={style.paperRocket}>
                        <img src={aboutUsHeader.images.paper_rocket} alt="paper Rocket" />
                    </div>
                </div>
            </>
        )
}