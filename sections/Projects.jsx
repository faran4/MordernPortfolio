import React, {useRef} from 'react';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);

    const projects = [
        {
            id: 1,
            date: "January 2024",
            title: "Modern Userfriendly Taxi-App ReactNative",
            description: "An app built with ReactNative, Expo, & TailwindCss for a fast, User-friendly experience.",
            image: "/project1.png",
            alt: "Ryde",
            link: "#",
            tech: ["React Native", "Expo", "TailwindCSS"]
        },
        {
            id: 2,
            date: "March 2024",
            title: "Library Management Platform",
            description: "A comprehensive digital solution for managing library resources, book cataloging, and user management with an intuitive interface.",
            image: "/project2.png",
            alt: "Library Management Platform",
            link: "#",
            tech: ["React", "Node.js", "MongoDB"]
        },
        {
            id: 3,
            date: "May 2024",
            title: "YC Directory - A Startup Showcase App",
            description: "A modern platform showcasing Y Combinator startups with detailed profiles, filtering capabilities, and real-time updates.",
            image: "/project3.png",
            alt: "YC Directory",
            link: "#",
            tech: ["Next.js", "TypeScript", "Prisma"]
        }
    ];

    useGSAP(() => {
        // Title animation
        gsap.fromTo(titleRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    once: true
                }
            }
        );

        // Simple fade in for each project card
        gsap.utils.toArray(".project-item").forEach((item, index) => {
            gsap.fromTo(item,
                {
                    opacity: 0,
                    y: 50
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: index * 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        once: true
                    }
                }
            );
        });

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="relative bg-black-100">
            {/* Subtle background accent */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/[0.02]"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/[0.02]"></div>
            </div>

            {/* Title Section */}
            <div ref={titleRef} className="c-space py-24 relative z-10">
                <div className="max-w-4xl">
                    <div className="flex items-center gap-6 mb-8">
                        <div className="h-[1px] w-24 bg-white/20"></div>
                        <span className="text-white/40 uppercase tracking-[0.2em] text-xs font-light">Featured Work</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                        Projects
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
                        Crafting digital experiences through innovative web and mobile solutions
                    </p>
                </div>
            </div>

            {/* Projects Container */}
            <div className="relative pb-28">
                <div className="c-space">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-item mb-24 last:mb-0"
                        >
                            <div className="group relative">
                                {/* Project Number - Large Background */}
                                <div className="absolute -left-12 top-0 text-[200px] font-bold text-white/[0.02] select-none pointer-events-none">
                                    0{index + 1}
                                </div>

                                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                                    {/* Image Section - Square */}
                                    <div className={`lg:col-span-5 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                                        <div className="relative aspect-square bg-black-200 overflow-hidden group-hover:shadow-2xl transition-shadow duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 z-10"></div>
                                            <img
                                                src={project.image}
                                                alt={project.alt}
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                                loading="lazy"
                                            />
                                            {/* Premium overlay effect */}
                                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500"></div>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className={`lg:col-span-7 flex flex-col justify-center ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                                        <div className="space-y-6">
                                            {/* Date and Number */}
                                            <div className="flex items-center gap-8">
                                                <span className="text-white/30 text-sm uppercase tracking-widest">{project.date}</span>
                                                <div className="flex-1 h-[1px] bg-white/10"></div>
                                                <span className="text-white/20 text-2xl font-light">0{index + 1}</span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                                {project.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-white/50 text-lg leading-relaxed max-w-2xl">
                                                {project.description}
                                            </p>

                                            {/* Tech Stack */}
                                            <div className="flex flex-wrap gap-3 pt-2">
                                                {project.tech.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-4 py-2 text-xs text-white/60 bg-white/[0.05] border border-white/10 uppercase tracking-wider"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* CTA */}
                                            <div className="pt-4">
                                                <a
                                                    href={project.link}
                                                    className="group/link inline-flex items-center gap-4"
                                                >
                                                    <span className="text-white text-lg font-light tracking-wide">View Project</span>
                                                    <div className="relative w-12 h-12 border border-white/20 flex items-center justify-center overflow-hidden group-hover/link:border-white/40 transition-colors">
                                                        <svg
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="1"
                                                            className="text-white/60 group-hover/link:text-white transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                                                        >
                                                            <path d="M7 17L17 7M17 7H7M17 7V17"/>
                                                        </svg>
                                                        {/* Diagonal line effect */}
                                                        <div className="absolute inset-0 bg-white/10 -translate-x-full -translate-y-full group-hover/link:translate-x-0 group-hover/link:translate-y-0 transition-transform duration-500"></div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom border */}
                                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* View All Projects - Premium Button */}
            <div className="c-space pb-12 flex justify-center">
                <button className="group relative px-12 py-5 bg-transparent border border-white/20 text-white overflow-hidden transition-all duration-500 hover:border-white/40">
                    <span className="relative z-10 flex items-center gap-3 text-base uppercase tracking-widest font-light">
                        All Projects
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="transition-transform duration-300 group-hover:translate-x-2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </span>
                    <div className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                    <span className="absolute inset-0 flex items-center justify-center gap-3 text-base uppercase tracking-widest font-light text-black -translate-x-full group-hover:translate-x-0 transition-transform duration-500 delay-75">
                        All Projects
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </span>
                </button>
            </div>
        </section>
    );
};

export default Projects;