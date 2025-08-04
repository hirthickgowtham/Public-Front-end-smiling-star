const About_filler = {
    Arrow:"/images/assets/Filler/Arrow.png",
    bulb:"/images/assets/Filler/bulb.png",
    bear:`/images/assets/Filler/bearImg.png`,
    rabbit:"/images/assets/Filler/Rabbit.png",
    SpringStar:"/images/assets/Filler/Spring 1.png",
    Star:"/images/assets/Filler/star.png"
}

const aboutUsHeader = {
    images:{
        img:"/images/assets/AboutUs/half_cloud.png",
        Tom_img:"/images/assets/AboutUs/TOM-removebg-preview.png",
        sun_cloud:"/images/assets/AboutUs/sunn.jpg.png",
        fly_bird:"/images/assets/AboutUs/Fly_bird.png",
        similing_star:"/images/assets/AboutUs/similing star.png",
        kite:"/images/assets/AboutUs/vijay_remove.png",
        fly:"/images/assets/AboutUs/flyte-removebg-preview.png",
        paper_rocket:"/images/assets/AboutUs/paperRocket.png",
        Rocket:"/images/assets/AboutUs/Rocket.png",
        Cloud:"/images/assets/AboutUs/Cloud.png"
    }
}

const Ourstory = {
    images:{
        left_image:"/images/assets/AboutUs/Ourstory/bg6.png"
    },
    text:{
        head:"Our Story",
        content:"Welcome to Smiling Stars Day Care & Pre School, where every child is treated like a shining star ready to rise and shine! We provide a safe, joyful, and nurturing environment that encourages children to explore, learn, and grow through fun and creativity. Our curriculum blends early childhood education with cultural activities like Indian Carnatic music, Bharatanatyam, violin, and Hindi language classes, helping kids develop holistically. With loving and experienced teachers, we focus on building confidence, communication, social values, and foundational skills through a play-based learning approach. Located in New Saram, Puducherry, Smiling Stars is a trusted space where every little smile matters and each day is a step toward a brighter future."
    }
}

const OurValue = [
    {
        image:"/images/Ourvalues/wmremove-transformed.png",
        heading:"Compassionate Care",
        content:"We nurture each child with love and respect, creating a safe emotional space for them to express themselves."
    },
    {
        image:"/images/Ourvalues/education-removebg-preview.png",
        heading:"Educational Excellence",
        content:"We provide age-appropriate learning experiences that stimulate curiosity and foster a lifelong love of learning."
    },
    {
        image:"/images/Ourvalues/community.png",
        heading:"Community Connection",
        content:"We build strong partnerships with families and the community to create a supportive network for each child."
    },
    {
        image:"/images/Ourvalues/growth_mindset-removebg-preview.png",
        heading:"Growth Mindset",
        content:"We encourage children to embrace challenges, persist through obstacles, and see effort as a path to mastery."
    },
    {
        image:"/images/Ourvalues/environment.png",
        heading:"Joyful Environment",
        content:"We create spaces filled with laughter, play, and positive interactions to make learning a joyful experience."
    },
    {
        image:"/images/Ourvalues/indivual.png",
        heading:"Individual Excellence",
        content:"We recognize and celebrate each child's unique strengths, talents, and abilities, helping them shine in ..."
    }
    
]


const youtube  = import.meta.env.VITE_YOUTUBE_LINK;
const facebook  = import.meta.env.VITE_FACEBOOK_LINK;
const instagram  = import.meta.env.VITE_INSTA_LINK;


const Events = [
        {
            heading:"Events and celebrations",
            image:"/images/assets/AboutUs/SchoolEvents/img1.jpg",
            content:"We celebrate every special moment with color, laughter, and joy, making beautiful memories that light up our little stars’ hearts.",
            mediaLogo:"/images/assets/AboutUs/SchoolEvents/FaceBook.png",
            link:`${facebook}`
        },
        {
            heading:"Captured Smiles",
            image:"/images/assets/AboutUs/SchoolEvents/img2.jpg",
            content:"Every giggle and sparkle is precious! Our gallery captures the sweet, shining smiles of our little ones as they grow and glow to sky.",
            mediaLogo:"/images/assets/AboutUs/SchoolEvents/Instagram.png",
            link:`${instagram}`
        },
        {
            heading:"Little Stars in Action",
            image:"/images/assets/AboutUs/SchoolEvents/img3.jpg",
            content:"From tiny footsteps to big dreams, we cherish every moment of learning, playing, and creating — where curiosity meets confidence!",
            mediaLogo:"/images/assets/AboutUs/SchoolEvents/YouTube.png",
            link:`${youtube}`
        }
]

export {aboutUsHeader,Ourstory,OurValue,Events,About_filler };