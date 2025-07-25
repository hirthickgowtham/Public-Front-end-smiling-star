import { FaRegCopyright } from "react-icons/fa";
import style from "./CopyRight.module.css";

export function CopyRight() {
  const design = import.meta.env.VITE_DESIGN_LINK;
  const year = new Date().getFullYear(); // Get current year

  return (
    <div className={style.container}>
      <h1 className={style.copy}>
       Copyright © {year}
      </h1>
      <div className={style.created}>
        Designed & Developed by{"\u00A0"}
        <a
          href={design}
          target="_blank"
          rel="noopener noreferrer"
          className={style.link}
        >
          Dept of CSE (IoT and Cybersecurity)
        </a>
      </div>
    </div>
  );
}
