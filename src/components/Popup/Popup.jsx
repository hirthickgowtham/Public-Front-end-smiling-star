import style from "./Popup.module.css"
import { useNavigate } from "react-router-dom"
import pop from "./submit-successfully.png"
import PopInBounce from "../Effect_comp/PopInBounce";


export default function Popup({popupdata,status,onClose}){
    const navigate = useNavigate();
    
    if(!status) return null;

    return(
        <>
        <div className={style.main} onClick={onClose}>
            
            <div className={style.popup} style={{display:status?'flex':'none'}} onClick={(e) => e.stopPropagation()}>
                <img className={style.image} src={pop} alt="Done👍" />
                <div>{popupdata}</div>  
                <div className={style.But}><button className={style.Button} onClick={()=>navigate("/")}> Go back to Home </button></div>
            </div>

        </div>  
        </>
    )
}