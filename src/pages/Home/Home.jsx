import Title_Card from "../../components/Home/Title_card/Title_card";
import style from "./Home.module.css";
import Programs from "../../components/Home/Programs/Programs";
import ParentsReview from "../../components/Home/ParentsReview/ParentsReview";
import FA_question from "../../components/Home/FA_question/FA_question";



export default function Home(){


    return(
        <>
        <div>
          
            <div className={style.gradent_continer}>
            
                <Title_Card/>
            </div>
                <Programs/>
                <ParentsReview/>
                <FA_question/>
        </div>
        </>
    )
}