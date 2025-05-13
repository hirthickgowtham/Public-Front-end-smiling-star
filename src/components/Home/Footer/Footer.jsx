import style from "./footer.module.css";
import { footerData as FD } from "../../../content/Home";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


export default function Footer(){
    const footer_icon = [
        <FaFacebookF />,
        <FaInstagram />,
        <FaYoutube />
       
    ]

    return(
        <>
           <div className={style.footMain}>
           <div className={style.footer}>
                    <div className={style.left}>
                        <div>
                        <a href={FD.brand.logo.link}><img src={FD.brand.logo.img} alt="img" className={style.logo}/></a>
                        <h2>{FD.brand.tagline}</h2>
                        </div>
                        
                    </div>
                    <div className={style.right}>
                        {FD.links.map((sections,index)=>(
                        <div key={index} className={style.footLink}>
                            <h2>{sections.title}</h2>
                            {sections.items.map((sec,i)=>(
                                <div key={i}>
                                   <a href={sec.link} target={sec.target}>
                                   {sections.title === "Follow Us" && <span style={{margin:"10px 15px 0 0",color:"blue"}}>{footer_icon[i]}</span>}
                                   {sec.name}
                                   </a>
                                </div>
                            ))}
                        </div>
                        ))}
                    </div>
            </div>
           </div>
        </>
    )
}