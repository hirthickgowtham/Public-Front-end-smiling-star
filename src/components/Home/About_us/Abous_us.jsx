import Contact_button from "../../../Layout/Contact_us_button/contact_us_button"
import style from "./About_us.module.css"



export default function About_us(){


    return(
        <>
            <div className={style.topic}>
                    <Contact_button title="About Us"/>
            </div>
            <div className={style.about_continer}>

                <img src="images/Home_random/apple.png" alt="" className={style.apple}/>

                <div className={style.image_continer}>
                    <img src="images/Home/about_us.png" alt="" />
                </div>

                <div className={style.text_content}>
                    <div className={style.sub_topic}>
                        <h2>PreSchool</h2>
                    </div>
                    <div className={style.para}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facere, molestias ab et tenetur architecto est, voluptates accusantium voluptatem doloribus possimus facilis, neque commodi temporibus? Recusandae laborum maxime laudantium saepe!
                        Natus expedita praesentium quibusdam voluptatum explicabo dolorum cumque. Quod assumenda corporis doloribus nesciunt sint eius nam tenetur voluptatibus repudiandae consequatur voluptates minus ea, accusamus tempora, obcaecati laborum odio, nulla necessitatibus.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur eum reprehenderit ipsum corporis excepturi fuga, ipsa cumque delectus quos dicta nisi a obcaecati magnam? Possimus reiciendis delectus labore quibusdam nihil!
                    </div>
                </div>
            </div>
        </>
    )
}