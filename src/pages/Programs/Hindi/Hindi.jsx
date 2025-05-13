import HindiGallery from "../../../components/Programs/Hindi/HindiGallery/HindiGallery"
import You_tube from "../../../components/Programs/Bharatanatyam/you_tube_video/you_tube_video";
import Footer from "../../../components/Home/Footer/Footer";
import Header_Hindi from "../../../components/Programs/Hindi/Header_Hindi/Header_Hindi";
import AboutHindi from "../../../components/Programs/Hindi/AboutHindi/AboutHindi";

export default function Hindi() {

    const common = {
        back_ground: "linear-gradient(50deg, rgba(255, 248, 225, 0.95) 0%, rgba(255, 218, 185, 0.85) 40%, rgba(255, 160, 122, 0.75) 80%)",
        border: "2px solid rgba(255, 140, 0, 0.5)"
      };
      
     
    const video = [
        {
            video_link:"pVkDZueTBpY",
            title:"Aragratrum",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quam, aut accusamus numquam iusto placeat obcaecati eum excepturi aspernatur quas reprehenderit hic laudantium animi adipisci vero rerum ipsam rem quae?"
        },
        {
            video_link:"pVkDZueTBpY",
            title:"Aragratrum",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quam, aut accusamus numquam iusto placeat obcaecati eum excepturi aspernatur quas reprehenderit hic laudantium animi adipisci vero rerum ipsam rem quae?"
        },
        {
            video_link:"pVkDZueTBpY",
            title:"Aragratrum",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quam, aut accusamus numquam iusto placeat obcaecati eum excepturi aspernatur quas reprehenderit hic laudantium animi adipisci vero rerum ipsam rem quae?"
        }
    ]



    return(
        <>

        
        <Header_Hindi/>
        <AboutHindi />
        <HindiGallery />
        <You_tube common={common} video = {video}/>
        <Footer/>
        </>
    )
    
}