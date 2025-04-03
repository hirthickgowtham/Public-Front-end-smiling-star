import style from "./video.module.css"



export default function Video({index,common,values}){

    console.log(index)

    return (<>
    

        <div className={(index+1)%2 == 0 ? style.even_video_continer:style.odd_video_continer}
        style={{border:common.border}}>
                <div className={style.video}>
                <iframe className={style.iframe} src={`https://www.youtube.com/embed/${values.video_link}`} frameborder="0" allowfullscreen></iframe>

                </div>

                <div className={style.description}
                style={{background:common.back_ground}}
                >
                    <div className={style.des_title}>
                        <h3>{values.title}</h3>
                    </div>

                    <div className={style.des_para}>
                        <p>" {values.description} "
                       </p>
                    </div>
                </div>
        </div>


    </>)
}