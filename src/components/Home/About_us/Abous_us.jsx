import Contact_button from "../../../Layout/Contact_us_button/contact_us_button"
import style from "./About_us.module.css"
import SlideInOnScroll from "../../Effect_comp/SlideInOnScroll"
import FadeInOnScroll from "../../Effect_comp/FadeInOnScroll"



export default function About_us(){


    return(
        <>
        <FadeInOnScroll>
            <div className={style.topic}>
                    <Contact_button title="About Us"/>
            </div>
        </FadeInOnScroll>
            <div className={style.about_continer}>

                <img src="images/Home_random/apple.png" alt="" className={style.apple}/>

                <div className={style.image_continer}>
                    <SlideInOnScroll>
                    <img src="images/Home/about_us.png" alt="" />
                    </SlideInOnScroll>
                </div>

                <div className={style.text_content}>
                    <div className={style.sub_topic}>
                        <SlideInOnScroll direction="right">
                        <h2>PreSchool</h2>
                        </SlideInOnScroll>
                    </div>
                    <SlideInOnScroll direction="right    ">
                    <div className={style.para}>
                        At Smiling Stars Day Care & Pre School, we believe that childhood is a time to be cherished, celebrated, and guided with care. Our center is built on the foundation of love, laughter, and learning, where every child is encouraged to shine in their own special way. 
                        We create a joyful environment that feels like a second home, filled with stories, songs, and smiles. 
                        With a perfect balance of play, academics, and creative arts, our experienced educators help nurture young minds and gentle hearts. 
                        Here, every moment becomes a memory and every child is prepared for a bright and confident tomorrow.
                    </div>
                    </SlideInOnScroll>
                </div>
            </div>
        </>
    )
}