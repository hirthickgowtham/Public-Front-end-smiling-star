import Each_question from "../Each_question/Each_question"
import style from "./FA_question.module.css"




export default function FA_question() {

    return (
        <>

        <div className={style.main_continer}>

            <img src="images/Home_random/winter_candy.png" alt="" className={style.item1} />
            <img src="images/Home_random/mushroom.png" alt="" className={style.item2} />
            <img src="images/Home_random/suzhal.png" alt="" className={style.item3} />
            <img src="images/Home_random/candy.png" alt="" className={style.item4} />

            <div className={style.topic}>
                <h2>Answers to your most common concerns</h2>
            </div>
            <div className={style.ball_merge_continer}>

                <div className={style.ball}></div>
                <div className={style.question_continer}>

                        <Each_question i = {1} />
                        <Each_question i = {2} />
                        <Each_question i = {3} />
                        <Each_question i = {4} />
                        <Each_question i = {5} />
                        <Each_question i = {6} />
                </div>
                
            </div>
        </div>
        </>
    )
    
}