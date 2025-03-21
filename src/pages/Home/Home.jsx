import Title_Card from "../../components/Home/Title_card/Title_card";
import Programs from "../../components/Home/Programs/Programs";
import ParentsReview from "../../components/Home/ParentsReview/ParentsReview";
import Footer from "../../components/Home/Footer/Footer";
import style from "./Home.module.css";

// import Programs from "../../components/Home/Programs/Programs";

export default function Home(){


    return(
        <>
        <div>
          
            <div className={style.gradent_continer}>
                <Title_Card/>
            </div>
                <Programs />
                <ParentsReview />
                <Footer />
        </div>
        </>
    )
}