
import style from "./AboutProg.module.css"


export default function AboutProg({heading,content,image}){
    return(
        <>
        <div className={style.main}>
                    <div className={style.left}>
                        <div><h1>{heading}</h1></div>
                        <div>{content}</div>
                    </div>
                    <div className={style.right}>
                        <div className={style.left_img}><img src={image} alt="" /></div>
                    </div>
        </div>
            
        </>
    )
}