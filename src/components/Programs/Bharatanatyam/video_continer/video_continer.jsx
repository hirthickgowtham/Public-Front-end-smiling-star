import style from "./video.module.css"



export default function Video({index}){

    console.log(index)

    return (<>
    

        <div className={(index+1)%2 == 0 ? style.even_video_continer:style.odd_video_continer}>
                <div className={style.video}>
                <iframe className={style.iframe} src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>

                </div>

                <div className={style.description}>
                    <div className={style.des_title}>
                        <h3>Aragratram</h3>
                    </div>

                    <div className={style.des_para}>
                        <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem natus aliquid laudantium ratione atque ducimus! Iure dolores dignissimos saepe ex eius asperiores recusandae. Praesentium eius repudiandae ad earum doloremque veniam? "
                       </p>
                    </div>
                </div>
        </div>


    </>)
}