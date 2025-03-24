import Each_question from "../Each_question/Each_question"
import style from "./FA_question.module.css"




export default function FA_question() {

    return (
        <>

        <div className={style.main_continer}>

            <div className={style.topic}>
                <h2>Answers to your most common concerns</h2>
            </div>
            <div className={style.ball_merge_continer}>

                <div className={style.ball}></div>
                <div className={style.question_continer}>

                        <Each_question i = {1} />
                        <Each_question i = {2} />
                </div>
                
            </div>
        </div>
        </>
    )
    
}