import Footer from "../../../components/Home/Footer/Footer";
import Header_baratham from "../../../components/Programs/Bharatanatyam/Header_component/Header_baratham";
import You_tube from "../../../components/Programs/Bharatanatyam/you_tube_video/you_tube_video";
import AboutBaranatiyam from "../../../components/Programs/Bharatanatyam/AboutBarathanatium/AboutBarathanatium";
import BarathanatiumGallery from "../../../components/Programs/Bharatanatyam/BarathanatiumGallery/BarathanatiumGallery";


export default function Bharatanatyam() {

      const common = {
            back_ground:"linear-gradient(54deg, rgba(253,253,255,0.7567401960784313) 0%, rgba(216,210,222,0.7567401960784313) 13%, rgba(247,130,5,0.6110819327731092) 33%, rgba(247,130,5,0.6054796918767507) 48%, rgba(247,130,5,0.5858718487394958) 63%, rgba(247,130,5,0.5634628851540616) 77%, rgba(216,210,222,0.9051995798319328) 86%, rgba(250,250,250,0.7679446778711485) 100%)",
            border:"3px solid rgba(255, 166, 0, 0.911)",
        }
    
        const video = [
            {
                video_link:"t7n4xxnLM_E",
                title:"Aragratrum",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quam, aut accusamus numquam iusto placeat obcaecati eum excepturi aspernatur quas reprehenderit hic laudantium animi adipisci vero rerum ipsam rem quae?"
            },
            {
                video_link:"VOogf99Jpu0",
                title:"Aragratrum",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quam, aut accusamus numquam iusto placeat obcaecati eum excepturi aspernatur quas reprehenderit hic laudantium animi adipisci vero rerum ipsam rem quae?"
            },
            {
                video_link:"2ARPpAJrhTk",
                title:"Aragratrum",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quam, aut accusamus numquam iusto placeat obcaecati eum excepturi aspernatur quas reprehenderit hic laudantium animi adipisci vero rerum ipsam rem quae?"
            }
        ]

    return(
        <>
        <Header_baratham/>
        <AboutBaranatiyam />
        <BarathanatiumGallery />
        <You_tube common={common} video = {video}/>
        <Footer/>
        </>
    )
    
}