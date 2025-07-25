import style from "./Header_baratham.module.css"



export default function Header_baratham(){

    return (
        <>

        <div className={style.main_continer}>
            <img src="/images/programs/Barathanatiyam/nadarajar.png" alt=""  width="400px" className={style.nadarajar}  />

            <div className={style.topic}>

              <h1 className={style.name}>Bharatanatyam</h1>
            </div>
        </div>
        </>
    )
}