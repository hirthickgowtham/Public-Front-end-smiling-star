import style from "./OurStory.module.css";
import { Ourstory } from "../../../content/AboutUs";
import Copy from "./Copy";

export default function OurStory(){
    return(
        <>
          <div className={style.contain}>
                <Copy heading={Ourstory.text.head} content={Ourstory.text.content} left_image={Ourstory.images.left_image}/>
          </div>
        </>
    )
}