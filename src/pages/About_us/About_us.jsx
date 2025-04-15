import AboutUs_Header from "../../components/About_us/AboutUs_Title/AboutUs_Header"
import OurStory from "../../components/About_us/OurStory/OurStory"
import OurValues from "../../components/About_us/OurValues/OurValues"
import SchoolEvent from "../../components/About_us/SchoolEvent/SchoolEvent"
import Footer from "../../components/Home/Footer/Footer"


export default function About_us() {

    return(
        <>
        <AboutUs_Header />
        <div style={{background: "linear-gradient(360deg, #ffffff 0%, #ffe5fd 28%, #c2ebff 56%, #ffffff 100%, #ffffff 100%)"}}>
        <OurStory />
        <OurValues />
        <SchoolEvent />
        </div>
        <Footer />
     
        </>
    )
    
}