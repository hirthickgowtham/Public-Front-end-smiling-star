import { FaRegCopyright } from "react-icons/fa";
import style from "./CopyRight.module.css";

export function CopyRight() {
  const design = import.meta.env.VITE_DESIGN_LINK;


  return (
    <div className={style.container}>
      <h1 className={style.copy}>
        <FaRegCopyright /> Copyright
      </h1>
      <div className={style.created}>
        Designed & Developed by{" "}
        <a
          href={design}
          target="_blank"
          rel="noopener noreferrer"
          className={style.link}
        >
          Dept of IoT and Cybersecurity
        </a>
      </div>
    </div>
  );
}
