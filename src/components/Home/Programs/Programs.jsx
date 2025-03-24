import style from "./programs.module.css";
import { programs_content } from "../../../content/Home";

import Contact_button from "../../../Layout/Contact_us_button/contact_us_button";

export default function Programs() {

    return(
        <>
            
            <div className={style.programContainer}>
                <div className={style.heading}><Contact_button title={"Programs"}/></div>
                <div className={style.programHeadrer}>
                    {programs_content.map((item,index)=>(
                    <div key={index} className={style.programs}>
                        <div className={style.program_img}><img src={item.img} alt="img" /></div>
                        <div className={style.programContent}>
                            <h1>{item.program_name}</h1>
                            <p>{item.content}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}