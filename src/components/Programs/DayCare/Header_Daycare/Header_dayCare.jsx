import style from "./Header_DayCare.module.css"



export default function Header_DayCare(){


    return(
        <>
        <div className={style.main_continer}>
            <img src="/images/programs/DayCare/baby_playing.png" alt=""  width="400px" className={style.nadarajar}  />

            <div className={style.topic}>

                <h1 className={style.name}>Day Care</h1>
            </div>
        </div>
        </>
    )
}