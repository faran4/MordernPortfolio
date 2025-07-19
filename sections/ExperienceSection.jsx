import React from 'react'
import TitleHeader from "../components/TitleHeader.jsx";
import {expCards} from "../constants/index.js";
import GlowCard from "../components/GlowCard.jsx";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
    useGSAP(() => {
        gsap.utils.toArray(".timeline-card").forEach((card) => {
            gsap.fromTo(card,
                {
                    xPercent: -100,
                    opacity: 0,
                    transformOrigin: "left left",
                },
                {
                    xPercent: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        end: "top 20%",
                        toggleActions: "play none none none"
                    }
                }
            )
        })

        // Timeline line grows/shrinks based on scroll position (both directions)
        gsap.set('.gradient-line', { scaleY: 0, transformOrigin: "top top" });

        gsap.to('.gradient-line', {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
                trigger: ".mt-32",
                start: "top 80%",
                end: "bottom top",
                scrub: 1,
                onUpdate: (self) => {
                    gsap.set('.gradient-line', {
                        scaleY: self.progress,
                        transformOrigin: "top top"
                    });
                }
            }
        })

        // Logo animations - only appear when scrolling down
        gsap.utils.toArray(".timeline-logo").forEach((logo, index) => {
            gsap.set(logo, { opacity: 0, scale: 0 });

            ScrollTrigger.create({
                trigger: logo,
                start: "top 75%",
                onEnter: () => {
                    gsap.to(logo, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        ease: "back.out(1.7)"
                    });
                }
                // Removed onLeave, onEnterBack, onLeaveBack for one-time animation
            });
        })

        // Experience text animation from left (one-time only)
        gsap.utils.toArray(".expText").forEach((text) => {
            gsap.fromTo(text,
                {
                    xPercent: 0,
                    opacity: 0,
                },
                {
                    xPercent: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: text,
                        start: "top 60%",
                        toggleActions: "play none none none"
                    }
                }
            )
        })

    },[]);

    return (
        <section id="experience" className="relative bg-black-100 min-h-screen flex items-center overflow-hidden">
            {/* Premium background accents */}
            <div className="absolute inset-0">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"></div>
            </div>

            <div className="w-full relative z-10 py-16">
                {/* Premium Header */}
                <div className="c-space mb-16 px-5 md:px-10 lg:px-20">
                    <div className="flex items-center gap-6 mb-8">
                        <div className="h-[1px] w-24 bg-white/20"></div>
                        <span className="text-white/40 uppercase tracking-[0.2em] text-xs font-light">💼 Career Journey</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                        Experience
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
                        Professional milestones and achievements that shaped my development journey
                    </p>
                </div>

                <div className="mt-32 relative px-5 md:px-10 lg:px-20">
                    {/* Central timeline line - positioned relative to this container */}
                    <div className="timeline-wrapper xl:absolute xl:left-1/2 xl:-translate-x-1/2">
                        <div className="gradient-line" />
                    </div>

                    <div className="relative z-50 xl:space-y-32 space-y-16">
                        {expCards.map((card, index) => (
                            <div key={card.title} className="exp-card-wrapper">
                                {/* Left side - Premium Glow Card */}
                                <div className="xl:w-5/12 w-full">
                                    <GlowCard card={card} index={index}>
                                        <div className="flex items-center gap-4">
                                            <div className="relative">
                                                <img
                                                    src={card.imgPath}
                                                    alt={card.title}
                                                    className="size-20 object-cover flex-shrink-0 relative z-10 border-2 border-white/10 rounded-full"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-white font-semibold text-lg leading-tight">{card.imgText}</h3>
                                                <div className="h-[1px] w-12 bg-white/20 mt-2"></div>
                                            </div>
                                        </div>
                                    </GlowCard>
                                </div>

                                {/* Center - Timeline Logo */}
                                <div className="timeline-logo-container xl:absolute xl:left-1/2 xl:-translate-x-1/2">
                                    <div className="timeline-logo">
                                        <img src={card.logoPath} alt="logo" className="w-full h-full object-cover"/>
                                    </div>
                                </div>

                                {/* Right side - Experience Text (No Box) */}
                                <div className="xl:w-5/12 w-full">
                                    <div className="expText">
                                        {/* Premium Date Badge */}
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="w-2 h-2 bg-white/60 rounded-full"></span>
                                            <span className="text-white/60 text-sm uppercase tracking-wider font-medium">
                                                {card.date}
                                            </span>
                                            <div className="flex-1 h-[1px] bg-white/20"></div>
                                        </div>

                                        {/* Title */}
                                        <h1 className="font-bold text-3xl md:text-4xl text-white mb-8 leading-tight">
                                            {card.title}
                                        </h1>

                                        {/* Responsibilities Label */}
                                        <p className="text-white/40 text-xs uppercase tracking-[0.2em] font-medium mb-6">
                                            Key Responsibilities
                                        </p>

                                        {/* Responsibilities List */}
                                        <div className="space-y-4">
                                            {card.responsibilities.map((responsibility, idx) => (
                                                <div key={idx} className="flex items-start gap-4">
                                                    <div className="w-1.5 h-1.5 bg-white/50 rounded-full mt-2 flex-shrink-0"></div>
                                                    <p className="text-white/70 text-base leading-relaxed">
                                                        {responsibility}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection