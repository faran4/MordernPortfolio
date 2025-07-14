import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechIcon from "../components/TechIcon.jsx";
import { techStackIcons } from "../constants/index.js";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TechStack = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);

    useGSAP(() => {
        // Title animation - matching other sections
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

        // Premium staggered card animation
        gsap.fromTo('.premium-tech-card',
            {
                opacity: 0,
                y: 60,
                rotateX: 15,
                scale: 0.9
            },
            {
                opacity: 1,
                y: 0,
                rotateX: 0,
                scale: 1,
                duration: 1.2,
                ease: "power2.out",
                stagger: {
                    each: 0.1,
                    from: "start"
                },
                scrollTrigger: {
                    trigger: '.premium-tech-grid',
                    start: 'top 70%',
                    once: true
                }
            }
        );

        // Floating animation for tech icons
        gsap.to('.tech-icon-float', {
            y: -10,
            duration: 2,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1,
            stagger: {
                each: 0.3,
                from: "random"
            }
        });

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="relative bg-black-100 min-h-screen flex items-center">
            {/* Premium background accents - matching other sections */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.005] rounded-full blur-3xl"></div>
            </div>

            <div className="w-full c-space relative z-10 py-16">
                {/* Premium Title Section - matching Projects style */}
                <div ref={titleRef} className="mb-20 opacity-0">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-6 mb-8">
                            <div className="h-[1px] w-24 bg-white/20"></div>
                            <span className="text-white/40 uppercase tracking-[0.2em] text-xs font-light">
                                🫱‍🫲 Skills & Expertise
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                            Tech Stack
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
                            The powerful technologies and tools I leverage to build exceptional digital experiences
                        </p>
                    </div>
                </div>

                {/* Premium Tech Grid - Flex Layout */}
                <div className="premium-tech-grid flex flex-wrap justify-center gap-6 md:gap-8 max-w-7xl mx-auto">
                    {techStackIcons.map((icon, index) => (
                        <div
                            key={icon.name}
                            className="premium-tech-card group relative opacity-0 w-64 sm:w-72 md:w-80 lg:w-72 xl:w-80"
                        >
                            {/* Premium card container - No Rounded Borders */}
                            <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-72 xl:h-80 bg-black-200/30 backdrop-blur-sm border border-white/[0.08] overflow-hidden transition-all duration-700 hover:border-white/[0.15] hover:bg-black-200/50 hover:-translate-y-3 hover:shadow-2xl transform-gpu preserve-3d">

                                {/* Original animated background */}
                                <div className="tech-card-animated-bg"/>

                                {/* Premium glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                {/* Content container */}
                                <div className="relative z-10 h-full flex flex-col">

                                    {/* 3D Icon Section - Original Size */}
                                    <div className="flex-1 flex items-center justify-center tech-icon-float">
                                        <div className="tech-icon-wrapper relative">
                                            <TechIcon model={icon} />
                                        </div>
                                    </div>

                                    {/* Premium Text Section */}
                                    <div className="relative z-20 p-4 pt-2">
                                        {/* Technology name */}
                                        <h3 className="text-white text-base md:text-lg font-semibold text-center group-hover:text-white transition-colors duration-500 leading-tight">
                                            {icon.name}
                                        </h3>



                                        {/* Bottom gradient line */}
                                        <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                                    </div>

                                    {/* Premium corner accent */}
                                    <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Premium border shimmer effect */}
                                <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                            </div>

                            {/* Card number indicator */}
                            <div className="absolute -top-2 -left-2 w-6 h-6 bg-black-200 border border-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <span className="text-white/60 text-xs font-mono">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechStack