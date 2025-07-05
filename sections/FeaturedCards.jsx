import React, { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {abilities} from "../constants/index.js";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

const FeaturedCards = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        // Animate each card individually with stagger
        gsap.fromTo(".featured-card",
            {
                opacity: 0,
                y: 50,
                scale: 0.9
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "power2.out",
                stagger: 0.4, // Increased delay to 0.4s between each card
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                    end: "top 50%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, []);

    return (
        <div ref={sectionRef} className="w-full padding-x-lg">
            <div className="mx-auto grid-3-cols">
                {abilities.map((ability, index) => (
                    <div key={index} className="featured-card card-border rounded-xl p-8 flex flex-col gap-4 opacity-0">
                        <div className="size-14 flex items-center justify-center rounded-full">
                            <img src={ability.imgPath} alt={ability.title} className="w-full h-full object-contain" />
                        </div>
                        <h3 className="text-white text-2xl font-semibold">{ability.title}</h3>
                        <p className="text-white-50 text-lg">{ability.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default FeaturedCards