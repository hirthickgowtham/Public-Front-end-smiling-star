import Title_Card from "../../components/Home/Title_card/Title_card";
import Nav_bar from "../../Layout/Nav_bar/Nav_bar";
import style from "./Home.module.css"



export default function Home(){


    return(
        <>
        <div>
          
            <div className={style.gradent_continer}>
            
                <Title_Card/>

            </div>
        </div>
        </>
    )
}