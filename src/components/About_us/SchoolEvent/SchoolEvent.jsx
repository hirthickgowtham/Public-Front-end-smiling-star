import style from "../SchoolEvent/SchoolEvent.module.css";
import { Events } from "../../../content/AboutUs";
import BorderLink from "./BorderLink";


export default function SchoolEvent(){
    return(
        <>
            <h1 className={style.topic}>Memories & Moments</h1>
           <div className={style.contain}>
                <div className={style.main}>
                    {Events.map((item,index)=>(
                        <BorderLink key={index} 
                         heading={item.heading}
                         image={item.image} 
                         content={item.content} 
                         mediaLogo={item.mediaLogo}
                         link={item.link}
                         />
                    ))}
                </div>
           </div>
        </>
    )
}