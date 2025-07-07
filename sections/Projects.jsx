import React, {useRef} from 'react';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const containerRef = useRef(null);
    const projectsWrapperRef = useRef(null);

    const projects = [
        {
            id: 1,
            date: "January 2024",
            title: "Modern Userfriendly Taxi-App ReactNative",
            description: "An app built with ReactNative, Expo, & TailwindCss for a fast, User-friendly experience.",
            image: "/project1.png",
            alt: "Ryde",
            link: "#"
        },
        {
            id: 2,
            date: "March 2024",
            title: "Library Management Platform",
            description: "A comprehensive digital solution for managing library resources, book cataloging, and user management with an intuitive interface.",
            image: "/project2.png",
            alt: "Library Management Platform",
            link: "#"
        },
        {
            id: 3,
            date: "May 2024",
            title: "YC Directory - A Startup Showcase App",
            description: "A modern platform showcasing Y Combinator startups with detailed profiles, filtering capabilities, and real-time updates.",
            image: "/project3.png",
            alt: "YC Directory",
            link: "#"
        }
    ];

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            // Clear any existing animations
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.trigger === sectionRef.current ||
                    trigger.trigger === containerRef.current ||
                    trigger.trigger === titleRef.current) {
                    trigger.kill();
                }
            });

            // 1. Title fade in animation
            gsap.fromTo(titleRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 80%",
                        end: "bottom 60%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // 2. Wait for title animation then setup horizontal scroll
            gsap.delayedCall(0.5, () => {
                const panels = gsap.utils.toArray(".project-panel");

                // Set initial state for all panels
                gsap.set(panels, { opacity: 1 });

                // Calculate total scroll distance
                const totalWidth = panels.length * window.innerWidth;
                const scrollDistance = totalWidth - window.innerWidth;

                // Create horizontal scroll animation
                const horizontalTween = gsap.to(projectsWrapperRef.current, {
                    x: -scrollDistance,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: () => `+=${scrollDistance}`,
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                        onRefresh: () => {
                            // Recalculate on window resize
                            const newTotalWidth = panels.length * window.innerWidth;
                            const newScrollDistance = newTotalWidth - window.innerWidth;
                            horizontalTween.vars.x = -newScrollDistance;
                        }
                    }
                });

                // Progress indicators
                ScrollTrigger.create({
                    trigger: containerRef.current,
                    start: "top top",
                    end: () => `+=${scrollDistance}`,
                    scrub: true,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const currentIndex = Math.min(
                            Math.floor(progress * panels.length),
                            panels.length - 1
                        );

                        // Update progress dots
                        document.querySelectorAll('.progress-dot').forEach((dot, index) => {
                            dot.classList.toggle('active', index === currentIndex);
                        });
                    }
                });
            });
        });

        // Mobile behavior - simple vertical scroll
        mm.add("(max-width: 767px)", () => {
            // Clear desktop animations
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.trigger === containerRef.current) {
                    trigger.kill();
                }
            });

            // Title animation for mobile
            gsap.fromTo(titleRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            );

            // Animate each project panel individually
            gsap.utils.toArray(".project-panel").forEach((panel, index) => {
                gsap.fromTo(panel,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        delay: index * 0.1,
                        scrollTrigger: {
                            trigger: panel,
                            start: "top 80%",
                            toggleActions: "play none none none"
                        }
                    }
                );
            });
        });

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.trigger === sectionRef.current ||
                    trigger.trigger === containerRef.current ||
                    trigger.trigger === titleRef.current) {
                    trigger.kill();
                }
            });
        };

    }, { scope: sectionRef, dependencies: [projects.length] });

    return (
        <section ref={sectionRef} className="relative">
            {/* Title Section */}
            <div ref={titleRef} className="c-space py-20">
                <h2 className="projects-title mb-4">My Projects</h2>
                <p className="text-neutral-400 max-w-2xl">
                    Here are some of my recent projects that showcase my skills in web and mobile development.
                </p>
            </div>

            {/* Projects Container */}
            <div ref={containerRef} className="relative bg-black-100 md:h-screen overflow-hidden">
                <div
                    ref={projectsWrapperRef}
                    className="flex md:h-full md:w-max"
                    style={{ width: `${projects.length * 100}vw` }}
                >
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-panel w-screen md:h-full flex-shrink-0 flex items-center justify-center px-5 md:px-20 py-10 md:py-0"
                        >
                            <div className="w-full max-w-7xl mx-auto">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                                    {/* Content */}
                                    <div className="order-2 lg:order-1">
                                        <p className="text-neutral-400 mb-2">{project.date}</p>
                                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                                            {project.title}
                                        </h3>
                                        <p className="text-neutral-300 text-lg mb-8 leading-relaxed">
                                            {project.description}
                                        </p>
                                        <a
                                            href={project.link}
                                            className="inline-flex items-center gap-2 text-white hover:text-neutral-300 transition-colors group"
                                        >
                                            <span className="text-lg font-medium">View Project</span>
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                                            >
                                                <path d="M7 17L17 7M17 7H7M17 7V17"/>
                                            </svg>
                                        </a>
                                    </div>

                                    {/* Image */}
                                    <div className="order-1 lg:order-2">
                                        <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900">
                                            <img
                                                src={project.image}
                                                alt={project.alt}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Progress Indicators - Only show on desktop */}
                <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 gap-3 z-10">
                    {projects.map((_, index) => (
                        <div
                            key={index}
                            className={`progress-dot w-2 h-2 rounded-full bg-white/30 transition-all duration-300 ${
                                index === 0 ? 'active' : ''
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* View All Projects Button */}
            <div className="c-space py-10 text-center">
                <button className="px-8 py-3 bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors">
                    View All Projects →
                </button>
            </div>

            <style jsx>{`
                .progress-dot.active {
                    width: 2rem !important;
                    background-color: white !important;
                }
            `}</style>
        </section>
    );
};

export default Projects;