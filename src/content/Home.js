
//used in Parent Review

const images = [
    {
        img:"/assets/Parents Feedback/img1.png",
        content:'"We struggled to find the right talent globally, but with their automated candidate ranking, we quickly identified top-notch candidates who perfectly fit our requirements."',
        author:"vijay",
        professional :"Small Business Owner, Sarah's Boutique"
    },
    {
        img:"/assets/Parents Feedback/img2.png",
        content:'"We struggled to find the right talent globally, but with their automated candidate ranking, we quickly identified top-notch candidates who perfectly fit our requirements."',
        author:"vijay",
        professional :"Small Business Owner, Sarah's Boutique"
    },
    {
        img:"/assets/Parents Feedback/img3.png",
        content:'"We struggled to find the right talent globally, but with their automated candidate ranking, we quickly identified top-notch candidates who perfectly fit our requirements."',
        author:"vijay",
        professional :"Small Business Owner, Sarah's Boutique"
    },
    {
        img:"/assets/Parents Feedback/img4.png",
        content:'"We struggled to find the right talent globally, but with their automated candidate ranking, we quickly identified top-notch candidates who perfectly fit our requirements."',
        author:"vijay",
        professional :"Small Business Owner, Sarah's Boutique"
    },

]

//used in number of programs

const programs_content = [
        {
            img:"/assets/Programs/daycare_img.png",
            program_name:"DayCare",
            content:"Children in this age group as identified as Toddlers.Children are born curious.They begin",
            last:"to explore the..."
        },
        {
            img:"/assets/Programs/bharadhanatiyam.png",
            program_name:"Bharathanatyam",
            content:"Children in this age group as identified as Toddlers.Children are born curious.They begin",
            last:"to explore the..."
        },
        {
            img:"/assets/Programs/Hindi.png",
            program_name:"Hindi",
            content:"Children in this age group as identified as Toddlers.Children are born curious.They begin",
            last:"to explore the..."
        },
        {
            img:"/assets/Programs/image.png",
            program_name:"Carnatic",
            content:"Children in this age group as identified as Toddlers.Children are born curious.They begin",
            last:"to explore the..."
        }

]

const Banner_img ={
  images:"/assets/Banner/Banner2.png"
}

//Footer
const footerData = {
    brand: {
      logo: {
        img:"/assets/footer/logo.png",
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
          { name: "About Us", link: "/" ,target:"_self"},
          { name: "Contact Us", link: "/" ,target:"_self"},
          { name: "404", link: "/",target:"_self" },
        ],
      },
      {
        title: "Main Pages",
        items: [
          { name: "About", link: "/" ,target:"_self"},
          { name: "Programs", link: "/",target:"_self" },
          { name: "Admission", link: "/ " ,target:"_self"},
        ],
      },
      {
        title: "Follow Us",
        items: [
          { name: "Twitter", link: "https://twitter.com",target:"_blank"},
          { name: "LinkedIn", link: "https://linkedin.com",target:"_blank"},
          { name: "Facebook", link: "https://facebook.com",target:"_blank"},
        ],
      },
    ],
  };

export {images,programs_content,footerData,Banner_img};