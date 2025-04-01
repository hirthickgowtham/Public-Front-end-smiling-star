import Footer from "../../../Home/Footer/Footer"
import Video from "../video_continer/video_continer"
import style from "./you_tube_video.module.css"


export default function You_tube(){




    return (
        <>

        <div className={style.main_continer}>

            <div className={style.title}>
                
                <h1>Activitices :</h1>
            </div>

            <div className={style.video_content}>
                <Video index = {1}/>
                <Video index = {2}/>
                <Video index = {3}/>
            
            </div>
        </div>

       
        </>
    )
}