import style from "./SchoolEvent.module.css"

export default function BorderLink({heading,image,content}){
    return(
        <>
            <div className={style.card}>
                <div><h1>{heading}</h1></div>
                <div className={style.LinkImage}><img src={image} alt="image" /></div>
                <div><p>{content}</p></div>
            </div>
        </>
    )
}