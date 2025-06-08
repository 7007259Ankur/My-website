export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Redefining possibilities with Machine Learning and Generative AI-driven innovations.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/pf1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "/DSA.png",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Nike Website",
    des: "Explore the latest Nike collections and innovations on our interactive and engaging website.",
    img: "/nike.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://nike-website-ankur.netlify.app/",
  },
  {
    id: 2,
    title: "Squid game sentiment analysis",
    des: "Analyze and understand audience sentiment for the Squid Game series, providing insights into viewer emotions and reactions.",
    img: "/Sqd.png",
    iconLists: ["/flask.png", "/python.png", "/html.png", "/css.png", "/lr.png"],
    link: "https://github.com/7007259Ankur/Squid-game-sentiment-analysis.git",
  },
  {
    id: 3,
    title: "Susiman Website",
    des: "A sleek and modern landing page built with HTML, CSS, and Vite, showcasing AI features and a payments system.",
    img: "/susi.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://stirring-heliotrope-4ee416.netlify.app/",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://ankur-iphone-3d-site.netlify.app/",
  },
];

export const testimonials = [
  {
     quote: "AWS Certified Cloud Practitioner (CLF-C02) Cert Prep: 1 Cloud Concepts. This certification showcases my understanding of fundamental AWS cloud concepts, services, and security practices.",
        name: "LinkedIn",
        title: "Issued Dec 2024 | Skills: Cloud Computing, Amazon Web Services (AWS)"

  },
  {
     quote: "AWS Cloud Technical Essentials. This certification highlights my proficiency in foundational cloud computing concepts and AWS services like EC2, S3, and RDS.",
        name: "Amazon Web Services (AWS)",
        title: "Issued Dec 2024 | Credential ID: 1OEHSQAMB0GG | Skills: Cloud Computing, AWS"
  },
  {
    quote: "Cisco Network Security: VPN. This certification validates my knowledge of VPN technologies and Cisco's network security solutions.",
        name: "LinkedIn",
        title: "Issued Dec 2024 | Skills: Cisco VPN"
  },
  {
    quote: "Machine Learning with Scikit-Learn. This certification highlights my ability to use Scikit-Learn for building and evaluating machine learning models.",
        name: "LinkedIn",
        title: "Issued Dec 2024 | Skills: Scikit-Learn"
  },
  {
    quote: "Programming for Everybody (Getting Started with Python). This certification affirms my foundational Python programming skills and logical thinking.",
        name: "University of Michigan",
        title: "Issued Dec 2024 | Credential ID: FH55R9JAK8UC"
  },
];

export const companies = [
  {
    id: 1,
    name: "ReactJS",
    img: "/Reactjs.png",
    nameImg: "/reactname.png",
  },
  {
    id: 2,
    name: "NodeJS",
    img: "/nodejs.svg",
    nameImg: "/nodejsname.png",
  },
  {
    id: 3,
    name: "MongoDB",
    img: "/mongodb.svg",
    nameImg: "/mongodbname.png",
  },
  {
    id: 4,
    name: "Express",
    img: "/expressjs.png",
    nameImg: "/expressname.png",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
 {
    id: 1,
    title: "Programming Languages",
    desc: "Proficient in JavaScript, Python, and C++, with hands-on experience in real-world applications.",
    className: "md:col-span-2",
    thumbnail: "/skill1.png",
  },
  {
    id: 2,
    title: "Web Development",
    desc: "Experienced in building responsive and dynamic web applications using React.js, Node.js, and Next.js.",
    className: "md:col-span-2",
    thumbnail: "/skill2.png",
  },
  {
    id: 3,
    title: "Machine Learning & AI",
    desc: "Skilled in building ML models with Scikit-learn and TensorFlow, with a focus on predictive analytics.",
    className: "md:col-span-2",
    thumbnail: "/skill3.png",
  },
  {
    id: 4,
    title: "Cloud Computing",
    desc: "Hands-on experience with AWS services like EC2, S3, and CloudFormation for deploying scalable applications.",
    className: "md:col-span-2",
    thumbnail: "/skill4.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
