import {useRef, useState} from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import Shapes from "../components/Shapes.jsx";
import {SparklesCore} from "../components/ui/sparkles.jsx";
import {Spotlight} from "../components/ui/spotlight-new.jsx";

gsap.registerPlugin(useGSAP);

const Hero = () => {
    const component = useRef(null);

    // Separate states for sparkles and shapes
    const [showSparkles, setShowSparkles] = useState(false);
    const [showShapes, setShowShapes] = useState(false);

    useGSAP(() => {
        let ctx = gsap.context(() => {
            // Set initial state immediately to prevent flashing
            gsap.set(".name-animation", {
                x: -100,
                opacity: 0,
                rotate: -10
            });

            gsap.set(".job-title", {
                y: 20,
                opacity: 0,
                scale: 1.2
            });

            const tl = gsap.timeline();

            // Now animate from the set position
            tl.to(".name-animation", {
                x: 0,
                opacity: 1,
                rotate: 0,
                ease: "elastic.out(1, 0.5)",
                duration: 0.8,
                transformOrigin: "left top",
                delay: 0.2,
                stagger: {
                    each: 0.05,
                    from: "random",
                }
            });

            // Faster job title animation
            tl.to(".job-title", {
                y: 0,
                opacity: 1,
                scale: 1,
                ease: "elastic.out(1, 0.5)",
                duration: 0.8,
            }, "-=0.4");

            // Load sparkles after job title appears
            tl.call(() => {
                setShowSparkles(true);
            }, null, "-=0.2");

            // Load shapes after sparkles
            tl.call(() => {
                setShowShapes(true);
            }, null, "+=0.3");

        }, component);
        return () => ctx.revert();
    }, []);

    const renderLetters = (name, key) => {
        if (!name) return;

        return name.split('').map((letter, index) => {
            return <span key={index}
                         className={`name-animation name-animation-${key} inline-block will-change-transform`}>{letter}</span>
        })
    }

    return (
        <section ref={component} className="relative px-4 py-10 md:px-6 md:py-14 lg:py-16 min-h-screen overflow-hidden">
            {/* Spotlight loads immediately */}
            <Spotlight
                duration={8} // Faster rotation
                xOffset={40} // More movement
                width={400}
                height={1000}
                smallWidth={180}
            />

            {/* Main content with higher z-index */}
            <div className="relative z-10 mx-auto w-full max-w-7xl grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center gap-16 md:gap-0">
                {/* 3D Models with Sparkles - Move to top on mobile */}
                <div className="relative col-start-1 row-start-1 md:col-start-2 md:row-start-1 mt-20 md:mt-0">
                    {/* Sparkles background - always rendered but with controlled opacity */}
                    <div className="absolute inset-0" style={{ opacity: showSparkles ? 1 : 0, transition: 'opacity 0.6s ease-out' }}>
                        <SparklesCore
                            particleDensity={120}
                            speed={4}
                            minSize={1}
                            maxSize={3}
                        />
                    </div>
                    {/* 3D Models - always rendered but with controlled opacity */}
                    <div className="relative z-10" style={{ opacity: showShapes ? 1 : 0, transition: 'opacity 0.5s ease-out' }}>
                        <Shapes />
                    </div>
                </div>

                {/* Text content - Move to bottom on mobile */}
                <div className="col-start-1 row-start-2 md:row-start-1">
                    <h1 className="mb-8 font-extrabold leading-none tracking-tighter text-center md:text-left"
                        style={{fontSize: 'clamp(3rem, 20vmin, 20rem)'}}
                        aria-label="Faran Imam Software Developer">
                        <span className="block text-slate-300">{renderLetters("Faran", "first")}</span>
                        <span className="-mt-[.2em] block text-slate-500">{renderLetters("Imam", "last")}</span>
                        <span
                            className="job-title block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-2xl
                                 font-bold uppercase tracking-[.2em] text-transparent will-change-transform md:text-4xl mt-4 md:mt-6">
                                Software Developer
                        </span>
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default Hero;