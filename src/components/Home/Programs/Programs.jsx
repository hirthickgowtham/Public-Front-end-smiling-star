import style from "./programs.module.css";
import { programs_content } from "../../../content/Home";
import { filler } from "../../../content/Home";
import { Link } from "react-router-dom";
import FadeInOnScroll from "../../Effect_comp/FadeInOnScroll";
import SlideInOnScroll from "../../Effect_comp/SlideInOnScroll";


import Contact_button from "../../../Layout/Contact_us_button/contact_us_button";

export default function Programs() {

    return(
        <>
           <FadeInOnScroll><div className={style.heading}><Contact_button title={"Programs"}/></div></FadeInOnScroll> 
            <div className={style.programContainer}>
                <div className={`${style.colorBee} ${style.hide}`}>
                        <SlideInOnScroll direction="left"><img src={filler.colorBee} alt="color Bee" /></SlideInOnScroll>
                </div>
                <div className={`${style.star} ${style.hide}`}>
                        <img src={filler.star} alt="color Bee" />
                </div>
                <div className={`${style.spring} ${style.hide}`}>
                        <img src={filler.Spring} alt="color Bee" />
                </div>
                <div className={`${style.flight} ${style.hide}`}>
                        <img src={filler.flight} alt="color Bee" />
                </div>
                <div className={`${style.book} ${style.hide}`}>
                        <img src={filler.Book} alt="color Bee" />
                </div>  
                <div className={style.programHeadrer}>
                    {programs_content.map((item,index)=>(
                    <a key={index} href={`${item.route}`} className={style.link}>
                    <FadeInOnScroll>
                    <div className={style.programs}>
                        <div className={style.program_img}><img src={item.img} alt="img" /></div>
                        <div className={style.programContent}>
                            <h1>{item.program_name}</h1>
                            <p>{item.content}</p>
                        </div>
                    </div>
                    </FadeInOnScroll>
                    </a>
                    ))}
                </div>
            </div>
        </>
    )
}