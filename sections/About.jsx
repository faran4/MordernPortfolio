import {useRef} from 'react'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';
import Card from "../components/Card.jsx";
import {Globe} from "../components/Globe.jsx";
import {CopyEmailButton} from "../components/CopyEmailButton.jsx";
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
]

const About = () => {
    const grid2Container = useRef();
    const sectionRef = useRef();
    const headerRef = useRef();
    const gridRef = useRef();

    useGSAP(() => {
        const ctx = gsap.context(() => {
            // Header animation - dramatic entrance from bottom
            gsap.fromTo(headerRef.current, {
                y: 120,
                opacity: 0,
                scale: 0.8,
                rotateX: 15
            }, {
                y: 0,
                opacity: 1,
                scale: 1,
                rotateX: 0,
                duration: 1.4,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                    end: "top 50%",
                    toggleActions: "play none none reverse"
                }
            });

            // Grid 1 and Grid 5 - dramatic entrance from far left
            gsap.fromTo(".grid-from-left", {
                x: -300,
                y: 50,
                opacity: 0,
                scale: 0.6,
                rotateY: -25,
                rotateZ: -5
            }, {
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
                rotateY: 0,
                rotateZ: 0,
                duration: 1.6,
                ease: "back.out(1.4)",
                stagger: 0.3,
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 80%",
                    end: "top 40%",
                    toggleActions: "play none none reverse"
                }
            });

            // Grid 2, 3, and 4 - dramatic entrance from far right
            gsap.fromTo(".grid-from-right", {
                x: 300,
                y: -50,
                opacity: 0,
                scale: 0.6,
                rotateY: 25,
                rotateZ: 5
            }, {
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
                rotateY: 0,
                rotateZ: 0,
                duration: 1.6,
                ease: "back.out(1.4)",
                stagger: 0.25,
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 80%",
                    end: "top 40%",
                    toggleActions: "play none none reverse"
                }
            });

            // Additional dramatic entrance for the entire grid container
            gsap.fromTo(gridRef.current, {
                scale: 0.8,
                opacity: 0,
                y: 100,
                perspective: 1000
            }, {
                scale: 1,
                opacity: 1,
                y: 0,
                duration: 2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 90%",
                    end: "top 50%",
                    toggleActions: "play none none reverse"
                }
            });

            // Individual grid item hover enhancements
            gsap.set(".grid-1, .grid-2, .grid-3, .grid-4, .grid-5", {
                transformOrigin: "center center"
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="c-space section-spacing transform-gpu">
            {/* Header with animation class */}
            <div ref={headerRef} className="opacity-0 transform-gpu">
                <h2 className="projects-title">About Me</h2>
            </div>

            {/* Grid container with animation reference */}
            <div ref={gridRef} className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12 transform-gpu">

                {/* Grid 1 - From Left */}
                <div className="flex items-end grid-default-color grid-1 grid-from-left opacity-0 transform-gpu">
                    <img src="/coding-pov.png" alt="coding pov" className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3]
                    md:left-50 md:inset-y-10 lg:scale-[2.5] transform-gpu"/>
                    <div className="z-10">
                        <p className="headtext">Hi, I'm Faran Imam</p>
                        <p className="subtext">Over the last 1.5 years, I develped my frontend and backend skills to
                            deliver
                            dynamic software and web applications.</p>
                    </div>
                    <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-gray-800"></div>
                </div>

                {/* Grid 2 - From Right */}
                <div className="grid-default-color grid-2 grid-from-right opacity-0 transform-gpu">
                    <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
                        <p className="flex items-end text-5xl text-gray-500">CODE IS CRAFT</p>
                        <Card style={{rotate: "75deg", top: "30%", left: "20%"}} text="GRASP"
                              containerRef={grid2Container}/>
                        <Card style={{rotate: "-30deg", top: "60%", left: "45%"}} text="SOLID"
                              containerRef={grid2Container}/>
                        <Card style={{rotate: "90deg", bottom: "30%", left: "70%"}} text="Design Patterns"
                              containerRef={grid2Container}/>
                        <Card style={{rotate: "-45deg", top: "55%", left: "0%"}} text="Design Principles"
                              containerRef={grid2Container}/>
                        <Card style={{rotate: "20deg", top: "10%", left: "38%"}} text="SRP"
                              containerRef={grid2Container}/>
                        <Card style={{rotate: "30deg", top: "70%", left: "70%"}} image="logos/csharp-pink.png"
                              containerRef={grid2Container}/>
                        <Card style={{rotate: "-45deg", top: "70%", left: "25%"}} image="logos/dotnet-pink.png"
                              containerRef={grid2Container}/>
                        <Card style={{rotate: "-45deg", top: "5%", left: "10%"}} image="logos/blazor-pink.png"
                              containerRef={grid2Container}/>
                    </div>
                </div>

                {/* Grid 3 - From Right */}
                <div className="grid-black-color grid-3 grid-from-right opacity-0 transform-gpu">
                    <div className="z-10 w-[50%]">
                        <p className="text-heading">Time Zone</p>
                        <p className="subtext">I'm based in India, and open to remote work worldwide</p>
                    </div>
                    <figure className="absolute left-[30%] top-[10%] transform-gpu">
                        <Globe/>
                    </figure>
                </div>

                {/* Grid 4 - From Right */}
                <div className="grid-special-color grid-4 grid-from-right opacity-0 transform-gpu">
                    <div className="flex flex-col items-center justify-center gap-4 size-full">
                        <p className="text-center headtext">Do you want to start a project together?</p>
                        <CopyEmailButton />
                    </div>
                </div>

                {/* Grid 5 - From Left */}
                <div className="grid-5 grid-from-left opacity-0 transform-gpu">
                    <div className="flex flex-col z-10 w-[100%]">
                        <p className="text-heading">My Toolbox</p>
                        <p className="subtext">Explore the technologies and tools I use to craft exceptional digital experiences</p>
                    </div>
                    <ToolBoxItems items={toolboxItems} direction="left" />
                    <ToolBoxItems items={toolboxItems} direction="right" />
                </div>
            </div>
        </section>
    )
}

export default About;