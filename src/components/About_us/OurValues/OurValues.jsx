import style from "./OurValues.module.css";
import { OurValue } from "../../../content/AboutUs";

export default function OurValues() {



  return (
    <>
      <div className={style.contain}>
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
