import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Card from "../components/Card.jsx";
import { Globe } from "../components/Globe.jsx";
import { CopyEmailButton } from "../components/CopyEmailButton.jsx";
import ToolBoxItems from "../components/ToolBoxItems.jsx";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

const toolboxItems = [
    {
        title: 'Javascript',
        icon: '/logos/javascript.svg',
    },
    {
        title: 'HTML5',
        icon: '/logos/html5.svg',
    },
    {
        title: 'CSS3',
        icon: '/logos/css3.svg',
    },
    {
        title: 'React',
        icon: '/logos/react.svg',
    },
    {
        title: 'Express',
        icon: '/logos/expressjs.svg',
    },
    {
        title: 'NextJs',
        icon: '/logos/nextjs.svg',
    },
    {
        title: 'NodeJs',
        icon: '/logos/nodejs.svg',
    },
    {
        title: 'ThreeJs',
        icon: '/logos/threejs.svg',
    },
    {
        title: 'AngularJs',
        icon: '/logos/angularjs.svg',
    },
    {
        title: 'GitHub',
        icon: '/logos/github.svg',
    },
    {
        title: 'Tailwind',
        icon: '/logos/tailwindcss.svg',
    },
];

const About = () => {
    const grid2Container = useRef();
    const sectionRef = useRef();
    const headerRef = useRef();
    const gridRef = useRef();

    useGSAP(() => {
        const ctx = gsap.context(() => {
            // Set initial states to prevent flash
            gsap.set([".grid-1", ".grid-4"], { xPercent: -100, opacity: 0 });
            gsap.set([".grid-2", ".grid-3", ".grid-5"], { xPercent: 100, opacity: 0 });
            gsap.set(headerRef.current, { opacity: 0, y: 30 });

            // Header animation with stagger
            gsap.to(headerRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });

            // Grid 1 and 4 - from left
            gsap.utils.toArray([".grid-1", ".grid-4"]).forEach((card, index) => {
                gsap.to(card, {
                    xPercent: 0,
                    opacity: 1,
                    duration: 1.2,
                    delay: index * 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                });
            });

            // Grid 2, 3, and 5 - from right
            gsap.utils.toArray([".grid-2", ".grid-3", ".grid-5"]).forEach((card, index) => {
                gsap.to(card, {
                    xPercent: 0,
                    opacity: 1,
                    duration: 1.2,
                    delay: index * 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative bg-black-100 min-h-screen flex items-center overflow-hidden">
            {/* Premium background accents */}
            <div className="absolute inset-0">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"></div>
            </div>

            <div className="c-space relative z-10 py-16">
                {/* Premium Header */}
                <div ref={headerRef} className="mb-16 opacity-0">
                    <div className="flex items-center gap-6 mb-8">
                        <div className="h-[1px] w-24 bg-white/20"></div>
                        <span className="text-white/40 uppercase tracking-[0.2em] text-xs font-light">Get to know me</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                        About Me
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
                        Passionate about creating exceptional digital experiences through innovative technology and thoughtful design
                    </p>
                </div>

                {/* Grid container */}
                <div ref={gridRef} className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
                    {/* Grid 1 - Introduction */}
                    <div className="flex items-end premium-grid-base grid-light-color grid-1" style={{ willChange: 'transform, opacity' }}>
                        <div className="premium-grid-glow"></div>
                        <img
                            src="/coding-pov.png"
                            alt="coding perspective"
                            className="coding-image"
                        />
                        <div className="gradient-overlay"></div>
                        <div className="relative z-10 p-6">
                            <p className="headtext">Hi, I'm Faran Imam</p>
                            <p className="subtext">Over the last 1.5 years, I've developed my frontend and backend skills to deliver dynamic software and web applications with precision and creativity.</p>
                        </div>
                    </div>

                    {/* Grid 2 - Interactive Tech Cards */}
                    <div className="premium-grid-base grid-light-color grid-2" style={{ willChange: 'transform, opacity' }}>
                        <div className="premium-grid-glow"></div>
                        <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
                            <p className="flex items-end text-5xl text-gray-600 font-bold">CODE IS CRAFT</p>
                            <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text="GRASP" containerRef={grid2Container} />
                            <Card style={{ rotate: "-30deg", top: "60%", left: "45%" }} text="SOLID" containerRef={grid2Container} />
                            <Card style={{ rotate: "90deg", bottom: "30%", left: "70%" }} text="Design Patterns" containerRef={grid2Container} />
                            <Card style={{ rotate: "-45deg", top: "55%", left: "0%" }} text="Design Principles" containerRef={grid2Container} />
                            <Card style={{ rotate: "20deg", top: "10%", left: "38%" }} text="SRP" containerRef={grid2Container} />
                            <Card style={{ rotate: "30deg", top: "70%", left: "70%" }} image="logos/csharp-pink.png" containerRef={grid2Container} />
                            <Card style={{ rotate: "-45deg", top: "70%", left: "25%" }} image="logos/dotnet-pink.png" containerRef={grid2Container} />
                            <Card style={{ rotate: "-45deg", top: "5%", left: "10%" }} image="logos/blazor-pink.png" containerRef={grid2Container} />
                        </div>
                    </div>

                    {/* Grid 3 - Globe/Location */}
                    <div className="premium-grid-base grid-light-color grid-3" style={{ willChange: 'transform, opacity' }}>
                        <div className="premium-grid-glow"></div>
                        <div className="z-10 w-[50%] p-6">
                            <p className="text-heading">Time Zone</p>
                            <p className="subtext">I'm based in India, and open to remote work worldwide</p>
                        </div>
                        <figure className="absolute left-[30%] top-[10%]">
                            <Globe />
                        </figure>
                    </div>

                    {/* Grid 4 - Contact CTA */}
                    <div className="premium-grid-base grid-light-color grid-4" style={{ willChange: 'transform, opacity' }}>
                        <div className="premium-grid-glow"></div>
                        <div className="flex flex-col items-center justify-center gap-4 size-full p-6">
                            <p className="text-center headtext">Do you want to start a project together?</p>
                            <CopyEmailButton />
                        </div>
                    </div>

                    {/* Grid 5 - Tech Toolbox */}
                    <div className="premium-grid-base grid-light-color grid-5" style={{ willChange: 'transform, opacity' }}>
                        <div className="premium-grid-glow"></div>
                        <div className="toolbox-content-wrapper">
                            <p className="text-heading">My Toolbox</p>
                            <p className="subtext">Explore the technologies and tools I use to craft exceptional digital experiences</p>
                        </div>
                        <div className="toolbox-wrapper">
                            <ToolBoxItems items={toolboxItems} direction="left" />
                            <ToolBoxItems items={toolboxItems} direction="right" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;