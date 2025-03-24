import style from "./footer.module.css";
import { Link } from "react-router-dom";
import { footerData as FD } from "../../../content/Home";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


export default function Footer(){
    const footer_icon = [
        <FaTwitter />,
        <FaLinkedinIn />,
        <FaFacebookF />
    ]

    return(
        <>
           <div className={style.footMain}>
           <div className={style.footer}>
                    <div className={style.left}>
                        <div>
                        <Link to={FD.brand.logo.link}><img src={FD.brand.logo.img} alt="img" className={style.logo}/></Link>
                        <h2>{FD.brand.tagline}</h2>
                        </div>
                        <button>{FD.brand.button.text}</button>
                    </div>
                    <div className={style.right}>
                        {FD.links.map((sections,index)=>(
                        <div key={index} className={style.footLink}>
                            <h2>{sections.title}</h2>
                            {sections.items.map((sec,i)=>(
                                <div key={i}>
                                   <Link to={sec.link} target={sec.target}>
                                   {sections.title === "Follow Us" && <span style={{margin:"10px 15px 0 0",color:"blue"}}>{footer_icon[i]}</span>}
                                   {sec.name}
                                   </Link>
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