import style from "./SchoolEvent.module.css";
import { Link } from "react-router-dom";

export default function BorderLink({heading,image,content,mediaLogo,link}){
    return(
        <>
            <Link className={style.card} to={link} target="_blank">
                <div><h1>{heading}</h1></div>
                <div className={style.LinkImage}><img src={image} alt="image" /></div>
                <div className={style.logo}><img src={mediaLogo} alt="logo" /></div>
                <div><p>{content}</p></div>
            </Link>
        </>
    )
}