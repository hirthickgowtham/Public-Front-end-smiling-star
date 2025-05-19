import style from "./Piano.module.css"



export default function Piano_header(){

    return (
        <>

        <div className={style.main_continer}>
            <img src="/images/programs/Piano/Piano_center (2).png" alt=""   className={style.nadarajar}  />

            <div className={style.topic}>

              <h1 className={style.name}>Key Board</h1>
            </div>
        </div>
        </>
    )
}