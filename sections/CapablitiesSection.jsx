import React, { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { abilities } from "../constants/index.js";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

const CapabilitiesSection = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);

    // Minimal marquee items
    const principles = ['Fast', 'Secure', 'Scalable', 'Modern'];

    useGSAP(() => {
        // Title animation
        gsap.fromTo(titleRef.current,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 90%",
                    once: true
                }
            }
        );

        // Cards animation with hover
        gsap.fromTo(".capability-card",
            {
                opacity: 0,
                y: 30,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                stagger: 0.15,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    once: true
                }
            }
        );

        // Marquee fade in
        gsap.fromTo(".marquee-container",
            { opacity: 0 },
            {
                opacity: 1,
                duration: 0.8,
                delay: 0.5,
                scrollTrigger: {
                    trigger: ".marquee-container",
                    start: "top 95%",
                    once: true
                }
            }
        );
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="relative bg-black-100 min-h-screen flex items-center">
            {/* Subtle background accent */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-3xl"></div>
            </div>

            <div className="w-full c-space relative z-10 py-16">
                {/* Compact Title */}
                <div ref={titleRef} className="text-center mb-16 opacity-0">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                        Capabilities
                    </h2>
                    <div className="flex items-center justify-center gap-4 text-white/30">
                        <div className="h-[1px] w-16 bg-white/20"></div>
                        <span className="text-xs uppercase tracking-[0.2em]">What I Do</span>
                        <div className="h-[1px] w-16 bg-white/20"></div>
                    </div>
                </div>

                {/* Centered Flex Cards Container - Changed from grid to flex */}
                <div className="flex flex-wrap justify-center gap-6 mb-16 max-w-6xl mx-auto">
                    {abilities.slice(0, 3).map((ability, index) => (
                        <div
                            key={index}
                            className="capability-card group relative opacity-0 transform w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm"
                        >
                            <div className="relative bg-black-200/30 backdrop-blur-sm border border-white/[0.08] p-8 min-h-[220px] transition-all duration-500 hover:border-white/[0.15] hover:bg-black-200/50 hover:-translate-y-2 hover:shadow-2xl">
                                {/* Hover glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Card content */}
                                <div className="relative z-10 h-full flex flex-col">
                                    {/* Icon and Title Row */}
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            <img
                                                src={ability.imgPath}
                                                alt={ability.title}
                                                className="w-14 h-14 object-contain opacity-70 group-hover:opacity-100 transition-all duration-500 relative z-10"
                                            />
                                        </div>
                                        <h3 className="text-white text-2xl font-bold flex-1">
                                            {ability.title}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <p className="text-white/50 text-base leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                                        {ability.desc}
                                    </p>
                                </div>

                                {/* Bottom gradient line */}
                                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Centered Minimal Marquee */}
                <div className="marquee-container opacity-0 max-w-6xl mx-auto">
                    <div className="relative">
                        {/* Gradient edges */}
                        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black-100 to-transparent z-20"></div>
                        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black-100 to-transparent z-20"></div>

                        {/* Simple marquee */}
                        <div className="marquee h-10">
                            <div className="marquee-box">
                                {[...principles, ...principles].map((text, index) => (
                                    <div key={index} className="flex items-center">
                                        <span className="text-white/25 text-sm uppercase tracking-[0.25em] px-8">
                                            {text}
                                        </span>
                                        {index < principles.length * 2 - 1 && (
                                            <span className="text-white/15">•</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CapabilitiesSection