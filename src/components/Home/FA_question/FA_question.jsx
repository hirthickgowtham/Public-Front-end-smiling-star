import Each_question from "../Each_question/Each_question"
import style from "./FA_question.module.css"




export default function FA_question() {

    const question = [
    {
        ques:"  Are the educators at Smiling star qualified and experienced?",
        ans:"Yes, Smiling star educators are certified professionals with extensive experience in early childhood education. We maintain a low teacher-student ratio to ensure personalized attention."
    },
    {
        ques:"  What sets Smiling star's curriculum apart from other preschools?",
        ans:"Smiling star's curriculum is designed to provide a well-rounded education, emphasizing creativity, critical thinking, and emotional intelligence. It's tailored to each age group and encourages experiential learning."
    },
    {
        ques:" Can I tour the Smiling star Preschool facility before enrolling my child?",
        ans:"Yes, Smiling star encourages parents to visit our facilities to get a firsthand look at our nurturing environment. Please contact Smiling star center to schedule a tour."
    },
    {
        ques:"How can parents stay involved in their child's education at Smiling star?",
        ans:"Smiling star promotes parent-teacher collaboration through regular meetings, progress updates, and various involvement opportunities to keep parents informed and engaged."
    },
    {
        ques:" What advantages does enrolling my child in preschool offer, and when should they get started?",
        ans:"Preschool offers numerous benefits, including socialization, early learning skills, and cognitive development. It's recommended to start preschool between the ages of 2 to 3 years, but it can vary based on individual readiness."
    },
    {
        ques:"What form of educational philosophy does Smiling star Preschool follow?",
        ans:"Smiling star Preschool follows a child-centric educational philosophy that focuses on holistic development. Our approach combines play-based learning, creativity, and a nurturing environment to foster a love for learning."
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