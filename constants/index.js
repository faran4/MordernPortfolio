const navLinks = [
    {
        name: 'Work',
        link: '#work',
    },
    {
        name: 'Experience',
        link: '#experience',
    },
    {
        name: 'Skills',
        link: '#skills',
    },
    {
        name: 'Testimonials',
        link: '#testimonials',
    }
];

const abilities = [
    {
        imgPath: "/seo.png",
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: "/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: "/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const expCards = [
    {
        review:
            "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
        imgPath: "/WizeBirds.png",
        imgText: "WizeBirds Technologies",
        logoPath: "/WizeBirds.png",
        title: "Frontend Developer",
        date: "January 2023 - Present",
        responsibilities: [
            "Developed and maintained user-facing features for the Hostinger website.",
            "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
            "Optimized web applications for maximum speed and scalability.",
        ],
    },
    {
        review:
            "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
        imgPath: "/iitlogo.jpg",
        imgText: "IIT Bombay",
        logoPath: "/iitlogo.jpg",
        title: "Full Stack Developer",
        date: "June 2020 - December 2023",
        responsibilities: [
            "Led the development of Docker's web applications, focusing on scalability.",
            "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
            "Contributed to open-source projects that were used with the Docker ecosystem.",
        ],
    },
    {
        review:
            "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
        imgPath: "/iitlogo.jpg",
        imgText: "IIT Bombay",
        logoPath: "/iitlogo.jpg",
        title: "React Native Developer",
        date: "March 2019 - May 2020",
        responsibilities: [
            "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
            "Improved app performance and user experience through code optimization and testing.",
            "Coordinated with the product team to implement features based on feedback.",
        ],
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const socialImgs = [
    {
        name: "insta",
        imgPath: "/insta.png",
    },
    {
        name: "fb",
        imgPath: "/fb.png",
    },
    {
        name: "linkedin",
        imgPath: "/linkedin.png",
    },
];


export { navLinks, abilities, expCards, techStackIcons, socialImgs };