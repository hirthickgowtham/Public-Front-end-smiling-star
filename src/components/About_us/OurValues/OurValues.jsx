import style from "./OurValues.module.css";
import { OurValue } from "../../../content/AboutUs";
import { About_filler } from "../../../content/AboutUs";
import { motion as M } from "framer-motion";
// import ZoomInOnScroll from "../../Effect_comp/ZoomInOnScroll";
import PopInBounce from "../../Effect_comp/PopInBounce";
import FadeInOnScroll from "../../Effect_comp/FadeInOnScroll";
import SlideInOnScroll from "../../Effect_comp/SlideInOnScroll";


export default function OurValues() {



  return (
    <>
      <div className={style.contain}>
        <div className={`${style.Arrow} ${style.hide}`}>
            <img src={About_filler.Arrow} alt="our value" />
        </div>
        <M.div className={`${style.Star} ${style.hide}`}>
          <SlideInOnScroll direction="left">
          <img src={About_filler.Star} alt="Star" />
          </SlideInOnScroll>
        </M.div>
        <M.div className={`${style.Bear} ${style.hide}`}
            animate={{
              rotate:[10,-10]
            }}
            transition={{
              duration: 2, // Time for one full movement cycle
              repeat: Infinity, // Infinite loop
              ease: "easeInOut", // Smooth transition
              repeatType: "mirror", // Moves back and forth 
            }}
        >
           <SlideInOnScroll>
             <img src={About_filler.bear} alt="our value" />
           </SlideInOnScroll>
        </M.div>
        <M.div className={`${style.rabbit} ${style.hide}`}
          animate={{
            rotate:[5,-5]
          }}
          transition={{
            duration: 2, // Time for one full movement cycle
            repeat: Infinity, // Infinite loop
            ease: "easeInOut", // Smooth transition
            repeatType: "mirror", // Moves back and forth 
          }}
        >
          <SlideInOnScroll direction="left">
            <img src={About_filler.rabbit} alt="" />
          </SlideInOnScroll>
        </M.div>
        <M.div className={`${style.SpringStar} ${style.hide}`}
          animate={{
            rotate:[5,-5]
          }}
          transition={{
            duration: 2, // Time for one full movement cycle
            repeat: Infinity, // Infinite loop
            ease: "easeInOut", // Smooth transition
            repeatType: "mirror", // Moves back and forth 
          }}
        >
          <SlideInOnScroll>
            <img src={About_filler.SpringStar} alt="SpringStar" />
          </SlideInOnScroll>
        </M.div>
        <FadeInOnScroll duration="0.5">
        <h1>
          Our Values
        </h1>
        </FadeInOnScroll>
        <div className={style.main}>
          {OurValue.map((item, i) => (
          <PopInBounce>
            <div
              key={i}
              className={style.card}>
              <div className={style.Icon}>
                <img src={item.image} alt="image" />
              </div>
              <div>
                <h1>{item.heading}</h1>
              </div>
              <div className={style.content}>{item.content}</div>
            </div>
            </PopInBounce>
          ))}
        </div>
      </div>
    </>
  );
}
