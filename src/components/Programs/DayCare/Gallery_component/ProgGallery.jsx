import style from "./ProgGallery.module.css"

export default function ProgGallery({gallery}){
    return(
        <>
            <div><h1>Gallery</h1></div>
            <div className={style.main}>
               {gallery.map((item,index)=>(
                <div key={index} className={style.gal}>
                    <img src={item.image} alt="image" />
                </div>
               ))}
            </div>
        </>
    )
}