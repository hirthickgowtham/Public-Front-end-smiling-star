import style from "./OurValues.module.css";
import { OurValue } from "../../../content/AboutUs";
import { About_filler } from "../../../content/AboutUs";
import { motion as M } from "framer-motion";

export default function OurValues() {



  return (
    <>
      <div className={style.contain}>
        <div className={`${style.Arrow} ${style.hide}`}>
            <img src={About_filler.Arrow} alt="our value" />
        </div>
        <M.div className={`${style.Star} ${style.hide}`}>
          <img src={About_filler.Star} alt="Star" />
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
            <img src={About_filler.bear} alt="our value" />
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
          <img src={About_filler.rabbit} alt="" />
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
          <img src={About_filler.SpringStar} alt="SpringStar" />
        </M.div>
        <h1>
          Our Values
        </h1>
        <div className={style.main}>
          {OurValue.map((item, i) => (
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
          ))}
        </div>
      </div>
    </>
  );
}
