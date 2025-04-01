import style from "../SchoolEvent/SchoolEvent.module.css";
import { Events } from "../../../content/AboutUs";
import BorderLink from "./BorderLink";

export default function SchoolEvent(){
    return(
        <>
           <div className={style.contain}>
                <div className={style.main}>
                    {Events.map((item,index)=>(
                        <BorderLink key={index} heading={item.heading} image={item.image} content={item.content}/>
                    ))}
                </div>
           </div>
        </>
    )
}