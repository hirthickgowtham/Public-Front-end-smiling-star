
import CarnaticGallery from "../../../components/Programs/Carnatic/CarnaticGallery/CarnaticGallery"
import You_tube from "../../../components/Programs/Bharatanatyam/you_tube_video/you_tube_video";
import Header_carnatic from "../../../components/Programs/Carnatic/Header_carnatic/Header_carnatic"
import AboutCarnatic from "../../../components/Programs/Carnatic/AboutCarnatic/AboutCarnatic";
import Footer from "../../../components/Home/Footer/Footer";

export default function Carnatic() {

    const common = {
        back_ground:"linear-gradient(49deg, rgba(180,180,180,0.5130427170868348) 0%, rgba(180,180,180,0.5326505602240896) 11%, rgba(5,87,247,0.4150035014005602) 34%, rgba(5,87,247,0.4234068627450981) 48%, rgba(5,87,247,0.4542191876750701) 64%, rgba(180,180,180,0.5942752100840336) 88%, rgba(180,180,180,0.5830707282913166) 100%)",
        border:"2px solid rgba(61, 89, 253, 0.91)",
    }

    const video = [
        {
            video_link:"1XQS0sLWres",
            title:"Aragratrum",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quam, aut accusamus numquam iusto placeat obcaecati eum excepturi aspernatur quas reprehenderit hic laudantium animi adipisci vero rerum ipsam rem quae?"
        },
        {
            video_link:"82nulK1TXn4",
            title:"Aragratrum",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quam, aut accusamus numquam iusto placeat obcaecati eum excepturi aspernatur quas reprehenderit hic laudantium animi adipisci vero rerum ipsam rem quae?"
        },
    ]



    return(
        <>
        <Header_carnatic/>
        <AboutCarnatic />
        <CarnaticGallery />
        <You_tube common={common} video = {video}/>
        <Footer />
        </>
    )
    
}