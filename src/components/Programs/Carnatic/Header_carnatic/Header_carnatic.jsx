import style from "./Header_caranatic.module.css"




export default function Header_carnatic(){

    return(
    <>
        <div className={style.main_continer}>
                <img src="/images/programs/Carnatic/person.png" alt=""  width="400px" className={style.nadarajar}  />
    
                <div className={style.topic}>
    
                  <h1 className={style.name}>Carnatic Music</h1>
                </div>
        </div>
    </>
    )
}