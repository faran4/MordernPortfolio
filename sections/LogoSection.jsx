import React, { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

const LogoIcon = ({icon}) => {
    return (
        <div className="marquee-item flex items-center gap-3">
            <img src="/Starsvg.svg" alt="sparkle" className="w-6 h-6 flex-shrink-0"/>
            <p className="text-white font-medium whitespace-nowrap text-base">{icon.text}</p>
        </div>
    )
}

const logoText = [
    {
        text: 'Maintainable',
    },
    {
        text: 'Scalable',
    },
    {
        text: 'Search Optimized',
    },
    {
        text: 'Fast',
    },
    {
        text: 'Secure',
    },
    {
        text: 'Responsive',
    },
    {
        text: 'Accessible',
    },
]

const LogoSection = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        // Simple fade-in animation when scrolling into view
        gsap.fromTo(sectionRef.current,
            {
                opacity: 0,
                y: 30
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                    end: "top 60%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, []);

    return (
        <div ref={sectionRef} className="md:my-20 my-10 relative opacity-0">
            <div className="gradient-edge" />
            <div className="gradient-edge" />

            <div className="marquee h-16 bg-black-50">
                <div className="marquee-box md:gap-16 gap-12">
                    {logoText.map((icon) => (
                        <LogoIcon key={icon.text} icon={icon}/>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {logoText.map((icon) => (
                        <LogoIcon key={`${icon.text}-duplicate`} icon={icon}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default LogoSection