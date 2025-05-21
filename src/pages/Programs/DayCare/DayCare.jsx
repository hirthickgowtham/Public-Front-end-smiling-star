import AboutDayCare from "../../../components/Programs/DayCare/AboutDayCare/AboutDayCare"
import DayCareGallery from "../../../components/Programs/DayCare/DayCareGallery/DayCareGallery"
import Footer from "../../../components/Home/Footer/Footer"
import Header_DayCare from "../../../components/Programs/DayCare/Header_Daycare/Header_dayCare"
import { common,video } from "../../../content/Programs/DayCare"
import You_tube from "../../../components/Programs/Bharatanatyam/you_tube_video/you_tube_video"


export default function Daycare() {

    return (
        <>
        <Header_DayCare />
        <AboutDayCare />
        <DayCareGallery />
        <You_tube common={common} video={video}/>
        <Footer />
        </>
    )
    
}