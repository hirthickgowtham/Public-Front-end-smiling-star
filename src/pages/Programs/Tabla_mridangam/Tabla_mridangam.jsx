import Footer from "../../../components/Home/Footer/Footer";
import Tabla_Mridangam_header from "../../../components/Programs/Tabla_mridangam/Tabla_mridangam_header/Tabla_mridangam_header";
import AboutThabela from "../../../components/Programs/Tabla_mridangam/AboutTabla/AboutThabela";
import ThablaGallery from "../../../components/Programs/Tabla_mridangam/TablaGallery/ThablaGallery";

export default function Tabla_Mridangam(){
    return(
        <>
         <Tabla_Mridangam_header/>
         <AboutThabela />
         <ThablaGallery />
         <Footer/>
        </>
    )
}