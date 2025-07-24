import style from "./Tabla_mridangam.module.css"



export default function Tabla_Mridangam_header(){

    return (
        <>

        <div className={style.main_continer}>
            <img src="/images/programs/Tabla/dhabela.png" alt=""   className={style.nadarajar}  />

            <div className={style.topic}>

              <h1 className={style.name}>Tabla & Mridangam </h1>
            </div>
        </div>
        </>
    )
}