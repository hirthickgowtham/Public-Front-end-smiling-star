
import style from "./Violin.module.css"


export default function Violin_header(){
    return(
        <>
        <div className={style.main_continer}>
            <img src="/images/programs/Violin/violin_center.png" alt=""  width="400px" className={style.nadarajar}  />

            <div className={style.topic}>

            <h1 className={style.name}>Violin Music</h1>
            </div>
        </div>
        </>
    )
}
