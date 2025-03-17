import style from "./Title_card.module.css";
import Button from "../Button/Button";
import About_us from "../About_us/Abous_us.jsx";


export default function Title_Card() {


    return(
        <>
        <div className={style.main_continer}>
            <div className={style.content_continer}>
                <div className={style.welcome_content}>
                    

                    {/* title content continer  */}
                    <div className={style.para}>

                        <p>Build a foundation for a life time of
                        learning </p>
                    </div>

                    {/* contact continer */}
                    <div className={style.contacts}>

                        {/* Button imported here */}
                            <Button/>

                        <div className={style.number}>
                            <div className={style.button2}>

                                <div className={style.ball2}>
                                    <i class="ri-phone-line"></i>
                                </div>

                                <div className={style.contact_number_text}>
                                     <li className={style.button_text}>Contact us</li>
                                     <li className={style.button_small_text}>(123)456 798</li>
                                </div>

                            </div>
                           
                        </div>
                    </div>
                </div>

                <div className={style.image_continer}>

                    <img src="images/title_image.png" alt=""/>
                    
                </div>

            </div>
        </div>

        <About_us/>
        </>
    )
    
}