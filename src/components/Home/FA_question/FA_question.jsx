import Each_question from "../Each_question/Each_question"
import style from "./FA_question.module.css"




export default function FA_question() {

    const question = [
    {
        ques:"  How often should I visit the dentist? How often should I visit the dentist?",
        ans:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aliquam soluta tempore? Qui provident quisquam hic est vitae veritatis, dolorem sit libero saepe fugiat autem in reiciendis consectetur? Ipsum, deleniti."
    },
    {
        ques:"  How often should I visit the dentist? How often should I visit the dentist?",
        ans:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aliquam soluta tempore? Qui provident quisquam hic est vitae veritatis, dolorem sit libero saepe fugiat autem in reiciendis consectetur? Ipsum, deleniti."
    },
    {
        ques:"  How often should I visit the dentist? How often should I visit the dentist?",
        ans:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aliquam soluta tempore? Qui provident quisquam hic est vitae veritatis, dolorem sit libero saepe fugiat autem in reiciendis consectetur? Ipsum, deleniti."
    },
    {
        ques:"  How often should I visit the dentist? How often should I visit the dentist?",
        ans:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aliquam soluta tempore? Qui provident quisquam hic est vitae veritatis, dolorem sit libero saepe fugiat autem in reiciendis consectetur? Ipsum, deleniti."
    },
    {
        ques:"  How often should I visit the dentist? How often should I visit the dentist?",
        ans:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aliquam soluta tempore? Qui provident quisquam hic est vitae veritatis, dolorem sit libero saepe fugiat autem in reiciendis consectetur? Ipsum, deleniti."
    },
    {
        ques:"  How often should I visit the dentist? How often should I visit the dentist?",
        ans:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aliquam soluta tempore? Qui provident quisquam hic est vitae veritatis, dolorem sit libero saepe fugiat autem in reiciendis consectetur? Ipsum, deleniti."
    },
    
]

    return (
        <>

        <div className={style.main_continer}>

            <img src="images/Home_random/winter_candy.png" alt="" className={[style.item1,style.item].join(" ")} />
            <img src="images/Home_random/mushroom.png" alt="" className={[style.item2,style.item].join(" ")} />
            <img src="images/Home_random/suzhal.png" alt="" className={[style.item3,style.item].join(" ")} />
            <img src="images/Home_random/candy.png" alt="" className={[style.item4,style.item].join(" ")} />

            <div className={style.topic}>
                <h2>Answers to your most common concerns</h2>
            </div>
            <div className={style.ball_merge_continer}>

                <div className={style.ball}></div>
                <div className={style.question_continer}>

                      {question.map((item,index)=>(
                            <Each_question i={index} body={item}/>
                      ))}

                </div>
                
            </div>
        </div>
        </>
    )
    
}