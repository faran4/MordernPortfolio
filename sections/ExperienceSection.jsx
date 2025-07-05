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
        <section id="experience" className="w-full md:mt-40 mt-20 section-padding xl:px-0">
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader title="Professional Work Experience" sub="💼 My Career Overview" />
            </div>

            <div className="mt-32 relative">
                {/* Central timeline line */}
                <div className="timeline-wrapper">
                    <div className="gradient-line" />
                </div>

                <div className="relative z-50 xl:space-y-32 space-y-16">
                    {expCards.map((card, index) => (
                        <div key={card.title} className="exp-card-wrapper">
                            {/* Left side - Glow Card */}
                            <div className="xl:w-5/12 w-full">
                                <GlowCard card={card} index={index}>
                                    <div className="flex items-center gap-4">
                                        <img src={card.imgPath} alt={card.title} className="size-20 rounded-full flex-shrink-0"/>
                                        <div>
                                            <h3 className="text-white font-medium text-lg">{card.imgText}</h3>
                                        </div>
                                    </div>
                                </GlowCard>
                            </div>

                            {/* Center - Timeline Logo */}
                            <div className="timeline-logo-container">
                                <div className="timeline-logo">
                                    <img src={card.logoPath} alt="logo" className="w-full h-full object-cover rounded-full"/>
                                </div>
                            </div>

                            {/* Right side - Experience Text */}
                            <div className="xl:w-5/12 w-full">
                                <div className="expText">
                                    <h1 className="font-semibold text-3xl text-white">{card.title}</h1>
                                    <p className="my-5 text-white-50 flex items-center gap-2">
                                        <span className="w-4 h-4 bg-black-50 rounded-sm"></span>
                                        {card.date}
                                    </p>
                                    <p className="text-[#839cb5] italic mb-4">
                                        Responsibilities
                                    </p>
                                    <ul className="list-disc ml-5 space-y-3 text-white-50">
                                        {card.responsibilities.map((responsibility, idx) => (
                                            <li key={idx} className="text-base leading-relaxed">
                                                {responsibility}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection