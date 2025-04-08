import style from "./Each_question.module.css";
import classNames from "classnames";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Each_question({ i ,body}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.div
        className={style.whole_container}
        key={i}
        onClick={toggleAnswer}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <div className={style.question}>
          <p className={style.para}>
            {body.ques}
          </p>

          <div className={style.symbol}>
            <p className={style.p}>{isOpen ? <i class="ri-arrow-up-s-line"></i> :<i class="ri-arrow-down-s-line"></i>}</p>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={style.answer}
        >
          <p className={classNames(style.para)}>
            {body.ans}
          </p>
        </motion.div>

        <div className={style.rule}></div>
      </motion.div>
    </>
  );
}
