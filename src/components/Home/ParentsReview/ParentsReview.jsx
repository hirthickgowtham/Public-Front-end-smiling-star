import React from "react";
import style from "./Slider.module.css"
import { images } from "../../../content/Home";

import Marquee from "react-fast-marquee";


export default function ParentsReview(){
    return(
        <>
<div className={style.slider_container}>
<Marquee speed={50}  gradientWidth={100} gradient={true} autoFill={true}>
    {images.map((image,index)=>(
        <div key={index} className={style.main_slid}>
             <img src={image.img} alt="Image Loading..." className={style.slid_img} />
            <div className={style.slid_content}>
                <h4>
                    {image.content}
                </h4>
                <p className={style.parent_name}>{image.author}</p>
                <p>{image.professional}</p>
            </div>
        </div>
    ))}
      {/* gradientWidth={150} gradient={true} */}
</Marquee>
     
    </div>
        </>
    )
}
