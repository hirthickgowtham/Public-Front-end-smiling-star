import Violin_header from "../../../components/Programs/Violin/Violin_header/Violin_header";
import You_tube from "../../../components/Programs/Bharatanatyam/you_tube_video/you_tube_video";
import Footer from "../../../components/Home/Footer/Footer";
import AboutViolin from "../../../components/Programs/Violin/AboutViolin/AboutViolin";
import ViolinGallery from "../../../components/Programs/Violin/ViolinGallery/ViolinGallery";
import MediaViolin from "../../../components/Programs/Violin/MediaViolin/MediaViolin";
import { videoviolin } from "../../../content/Programs/Violin";


export default function Violin(){

    
    const common = {
        back_ground:" linear-gradient(154deg, rgba(63, 94, 251, 0.61) 0%, rgba(63, 94, 251, 0.48) 15%, rgba(63, 188, 251, 0.41) 46%, rgba(63, 188, 251, 0.43) 62%, rgba(63, 94, 251, 0.42) 87%, rgba(63, 94, 251, 0.67) 100%)",
        border:"3px solid rgba(63, 94, 251, 0.61)",
    }



    return(
        <>
      
        <Violin_header/>
        <AboutViolin />
        <ViolinGallery />
        <MediaViolin />
        <You_tube common={common} video = {videoviolin}/>
        <Footer/>
        </>
    )
}