import React, { useState, useEffect } from "react";
import style from "./Slider.module.css";
import { images } from "../../../content/Home";
import Marquee from "react-fast-marquee";

export default function ParentsReview() {
  const [marqueeDirection, setMarqueeDirection] = useState("left"); // Default: horizontal

  useEffect(() => {
    const updateDirection = () => {
      setMarqueeDirection(window.innerWidth <= 768 ? "up" : "left"); // Vertical for tablets
    };

    updateDirection(); // Set initial direction
    window.addEventListener("resize", updateDirection); // Listen for resize

    return () => window.removeEventListener("resize", updateDirection); // Cleanup on unmount
  }, []);
  
  return (
    <>

        <div className={style.slide_head}>
            <button>Parents review</button>
        </div>
      <div className={style.slider_container}>
        <Marquee
          speed={50}
          gradientWidth={100}
          gradient={true}
          autoFill={true}
          direction={marqueeDirection} // Dynamic direction
          className={style.marquee}
        
        >
          {images.map((image, index) => (
            <div key={index} className={style.main_slid}>
              <img src={image.img} alt="Image Loading..." className={style.slid_img} />
              <div className={style.slid_content}>
                <h4>{image.content}</h4>
                <p className={style.parent_name}>{image.author}</p>
                <p>{image.professional}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
}
