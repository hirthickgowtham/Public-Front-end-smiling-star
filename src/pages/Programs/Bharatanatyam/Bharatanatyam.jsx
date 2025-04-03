import Footer from "../../../components/Home/Footer/Footer";
import Header_baratham from "../../../components/Programs/Bharatanatyam/Header_component/Header_baratham";
import You_tube from "../../../components/Programs/Bharatanatyam/you_tube_video/you_tube_video";
import AboutBaranatiyam from "../../../components/Programs/Bharatanatyam/AboutBarathanatium/AboutBarathanatium";
import BarathanatiumGallery from "../../../components/Programs/Bharatanatyam/BarathanatiumGallery/BarathanatiumGallery";


export default function Bharatanatyam() {

    return(
        <>
        <Header_baratham/>
        <AboutBaranatiyam />
        <BarathanatiumGallery />
        <You_tube/>
        <Footer/>
        </>
    )
    
}