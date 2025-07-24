import Footer from "../../../components/Home/Footer/Footer";
import You_tube from "../../../components/Programs/Bharatanatyam/you_tube_video/you_tube_video";
import Piano_header from "../../../components/Programs/Piano/Piano_header";
import AboutPiano from "../../../components/Programs/Piano/AboutPiano/AboutPiano";
import PianoGallery from "../../../components/Programs/Piano/PianoGallery/PianoGallery";
import { videopiano } from "../../../content/Programs/Piano";

export default function Piano(){

    const common = {
        back_ground:" linear-gradient(164deg,rgba(36, 36, 38, 0.42) 0%, rgba(36, 36, 38, 0.36) 15%, rgba(247, 253, 255, 0.62) 32%, rgba(247, 253, 255, 0.64) 69%, rgba(36, 36, 38, 0.44) 89%, rgba(36, 36, 38, 0.38) 100%)",
        border:"2.5px solid rgb(86, 86, 87)",
    }



    return(
        <>
        <Piano_header/>
        <AboutPiano />
        <PianoGallery />
        {/* <You_tube common={common} video = {videopiano}/> */}
        <Footer/>
        </>
    )
}