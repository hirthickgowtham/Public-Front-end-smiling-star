import style from "./Popup.module.css"
import { useNavigate } from "react-router-dom"
import pop from "./submit-successfully.png"
import PopInBounce from "../Effect_comp/PopInBounce";


export default function Popup({popupdata,status}){
    const navigate = useNavigate();
    
    

    return(
        <>
        <div className={style.main}>
            
            <div className={style.popup} style={{display:status?'flex':'none'}}>
                <img src={pop} alt="Done👍" />
                <div>{popupdata}</div>  
                <div className={style.But}><button className={style.Button} onClick={()=>navigate("/")}> Go back to Home </button></div>
            </div>

        </div>  
        </>
    )
}