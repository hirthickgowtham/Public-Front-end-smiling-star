import Footer from "../../../Home/Footer/Footer"
import Video from "../video_continer/video_continer"
import style from "./you_tube_video.module.css"


export default function You_tube({common,video}){

  

    return (
        <>

        <div className={style.main_continer}>

            <div className={style.title}>
                
                <h1>Activities :</h1>
            </div>

            <div className={style.video_content}>

                {video.map((item,index)=>(

                <Video index = {index} common = {common}  values = {item}/>

                ))}
                
            
            </div>
        </div>

       
        </>
    )
}