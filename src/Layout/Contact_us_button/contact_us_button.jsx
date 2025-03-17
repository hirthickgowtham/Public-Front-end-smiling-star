import style from "./contact_button.module.css"


export default function Contact_button({title}) {



    return(
        <>
            <div className={style.contact_button}>

                <li className={style.cont_btn}> {title} </li>
        
            </div>
        </>
    )
    
}