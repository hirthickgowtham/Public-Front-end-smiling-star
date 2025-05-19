import BorderLink from "../../../About_us/SchoolEvent/BorderLink"
import { Border_content as B} from "../../../../content/Programs/Violin"
import style from "./MediaViolin.module.css"
import ZoomInOnScroll from "../../../Effect_comp/ZoomInOnScroll"

export default function MediaViolin(){
    return(
        <>
        <div className={style.contain}>
            <h1>Media Pages</h1>
            <div className={style.main}>
                    {B.map((item,index)=>(
                        <ZoomInOnScroll>
                        <BorderLink key={index} 
                         heading={item.heading}
                         image={item.image} 
                         content={item.content} 
                         mediaLogo={item.mediaLogo}
                         link={item.link}
                         />
                         </ZoomInOnScroll>
                    ))}
                </div>
            </div>
        </>
    )
}