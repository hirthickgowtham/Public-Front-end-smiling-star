import style from "./Piano.module.css"



export default function Piano_header(){

    return (
        <>

        <div className={style.main_continer}>
            <img src="/images/programs/Piano/Piano_center (2).png" alt=""  width="400px" className={style.nadarajar}  />

            <div className={style.topic}>

              <h1 className={style.name}>Piano Music</h1>
            </div>
        </div>
        </>
    )
}