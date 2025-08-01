import {  spring } from "framer-motion";


//Filler
const filler = {
    star:"/images/assets/Filler/star.png",
    colorBee:"/images/assets/Filler/colorbee.png",
    blackBee:"/images/assets/Filler/blackBee.png",
    Arrow:"/images/assets/Filler/Arrow.png",
    Spring:"/images/assets/Filler/SprignArrow.png",
    flight:"/images/assets/Filler/Fight.png",
    Book:"/images/assets/Filler/Book.png",
    Graps:"/images/assets/Filler/Graps.png",
    Shape:"/images/assets/Filler/Shape.png",
    
}



//used in Parent Review

const images = [
    {
        img:"/images/assets/Parents Feedback/img1.png",
        content:`"A good place for the tiny ones. It's safe and clean. The school has trained teachers to handle kids. Overall it's a suitable place for preschoolers and day care"`,
        author:"J SANKARI MURUGA",
        professional :"Small Business Owner, Sarah's Boutique"
    },
    {
        img:"/images/assets/Parents Feedback/img2.png",
        content:`"It is very homely and security wise also good. School fees is reasonable. They are taking good care and my kid is enjoying his school time."`,
        author:"Malathy",
        professional :"Small Business Owner, Sarah's Boutique"
    },
    {
        img:"/images/assets/Parents Feedback/img3.png",
        content:'"Very good school...my boy everyday like to go to at school..I give marks of school learning, maintenance and safety 💯...."',
        author:"Pavithra Ganesan",
        professional :"Small Business Owner, Sarah's Boutique"
    },
    {
        img:"/images/assets/Parents Feedback/img4.png",
        content:'"Spacious environment, friendly staff, good playing and dinning area, teaching good activities, caring like a parents.."',
        author:"Lavanya ramamurthy",
        professional :"Small Business Owner, Sarah's Boutique"
    },

]

//used in number of programs

const programs_content = [
        {
            img:"/images/assets/Programs/daycare_img.jpg",
            program_name:"DayCare",
            content:"At our Daycare, we create a safe, nurturing, and engaging environment where toddlers can learn and grow.",
            last:"to explore the...",
            route:"/programs/day_care"
        },
        {
            img:"/images/assets/Programs/bharadhanatiyam.png",
            program_name:"Bharathanatyam",
            content:"Bharatanatyam is not just a dance — it’s a storytelling art that connects children to Indian culture and discipline.",
            last:"to explore the...",
            route:"/programs/Barathanatiyam"
        },
        
        {
            img:"/images/assets/Programs/image.jpg",
            program_name:"Carnatic",
            content:"Carnatic music lessons at our center help children discover the joy of melody, rhythm, and voice control from an early age",
            last:"to explore the...",
            route:"/programs/carnatic"
        },
         {
            img:"/images/assets/Programs/Gallery/Violin/image1.jpg",
            program_name:"Violin",
            content:"Violin classes at our center help children explore melody, pitch, and coordination, introducing them to the expressive world",
            last:"to explore the...",
            route:"/programs/violin"
        },
         {
            img:"/images/assets/Programs/Gallery/Piano/image3.jpg",
            program_name:"KeyBoard",
            content:"Our piano lessons allow children to develop musical creativity, finger coordination, and rhythm, offering a joyful foundation",
            last:"to explore the...",
            route:"/programs/keyboard_piano"
        },
         {
            img:"/images/assets/Programs/Gallery/Thabela/image1.jpg",
            program_name:"Tabla and Mridangam",
            content:"Tabla training at our center introduces children to the rich tradition of Indian percussion, enhancing their sense of rhythm",
            last:"to explore the...",
            route:"/programs/tabla_mridangam"
        },


]

const youtube  = import.meta.env.VITE_YOUTUBE_LINK;
const facebook  = import.meta.env.VITE_FACEBOOK_LINK;
const instagram  = import.meta.env.VITE_INSTA_LINK;

const Banner_img ={
  images:"/images/assets/Banner/Banner2.png"
}

//Footer
const footerData = {
    brand: {
      logo: {
        img:"/images/assets/footer/logo.png",
        link:"/",
      },
      tagline: "Innovative solutions, proven success & growth",
      button: {
        text: "Contact Us",
        link: "/contact",
      },
    },
    links: [
      {
        title: "Quick Links",
        items: [
          { name: "Home", link: "/",target:"_self" },
          { name: "About Us", link: "/About_us" ,target:"_self"},
          { name: "Contact Us", link: "/Locate_us" ,target:"_self"},
        ],
      },
      {
        title: "Main Pages",
        items: [
          { name: "Programs", link: "/programs/day_care",target:"_self" },
          { name: "Admission", link: "/Enquire_form" ,target:"_self"},
        ],
      },
      {
        title: "Follow Us",
        items: [
          { name: "Facebook", link: `${facebook}`,target:"_blank"},
          { name: "Instagram", link: `${instagram}`,target:"_blank"},
          { name: "YouTube", link: `${youtube}`,target:"_blank"},
        ],
      },
    ],
  };



  // title card animation
   // 🌟 Parent container animation controls all children smoothly
    const containerAnim = {
        hidden: { opacity: 0, y: 75 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: "easeInOut",
                staggerChildren: 0.3, // Delay between child elements
                when: "beforeChildren", // Parent animates first
            },
        },
    };

     // 🌞 Sun infinite rotation
    const sunSpin = {
        hidden: { rotate: 0, y: 50, opacity: 0 },
        visible: { rotate: 360, y: 0, opacity: 1 },
    };

    // 🌟 Star cloud floating animation
    const starCloud = {
        hidden: { rotate: 0, y: 50, x: 30,opacity: 0},
        visible: { rotate: 15, y: 0, x: 0 ,opacity: 1},
    };

    export const cloud_tansition = {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
    }


    // birds flying animation 

    export const bird = {
        hidden: { opacity: 0, y: 75 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: "easeInOut",
            },
        },
    }

    // ✏️ Pencil animation (fade-in + bounce loop)
    export const pencilAnim = {
        hidden: { y: 1000, opacity: 0,x:1000 },
        visible: { y:0,opacity:1,x:0},
    };

    export const movement = {
            delay:.7,
            duration: 3,
            ease: "easeInOut",
            type:spring
        }


         // paper rocket animation

    export const paper = {
        hidden : {
            rotate:20,opacity:0,y:100,x:-100
        },
        visible:{ 
            rotate:0,opacity:1,y:0,x:0
        }
    }

    export const paper_transction = {
        opacity:{
            delay:.8,
            duration: 3,
            ease: "linear",
         
        },
       rotate: {
            delay:.5,
            duration: 3,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    y:{
        delay:1,
        duration: 3,
        ease: "easeInOut",
    },x:{
        delay:1,
        duration: 3,
        ease: "easeInOut",
    }
    }

export {images,programs_content,footerData,Banner_img,filler,containerAnim,sunSpin,starCloud};