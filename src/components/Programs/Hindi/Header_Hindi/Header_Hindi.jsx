import style from "./Header_Hindi.module.css";

export default function Header_Hindi(){
    return (
        <div className={style.main_container}>
            <div className={style.topic}>
                <img src="/images/programs/Hindi/hindi_logo4.png" 
                     alt="Hindi Logo"  
                     className={style.logo_hindi}  
                />
                <h1 className={style.name}>Hindi</h1>
            </div>
        </div>
    );
}
