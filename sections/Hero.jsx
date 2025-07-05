import {useRef, useState} from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import Shapes from "../components/Shapes.jsx";
import {SparklesCore} from "../components/ui/sparkles.jsx";
import {Spotlight} from "../components/ui/spotlight-new.jsx";

gsap.registerPlugin(useGSAP);

const Hero = () => {
    const component = useRef(null);

    // Only add this state for sequential loading
    const [showHeavyComponents, setShowHeavyComponents] = useState(false);

    useGSAP(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // First: Load heavy components when name animation starts
            tl.call(() => {
                setShowHeavyComponents(true);
            }, null, 0.5); // Load heavy components right when name starts

            // Your original name animation
            tl.fromTo(".name-animation", {
                    x: -100, opacity: 0, rotate: -10
                },
                {
                    x: 0,
                    opacity: 1,
                    rotate: 0,
                    ease: "elastic.out(1, 0.3)",
                    duration: 1,
                    transformOrigin: "left top",
                    delay: 0.5,
                    stagger: {
                        each: 0.1,
                        from: "random",
                    }
                }
            );

            // Your original job title animation
            tl.fromTo(".job-title", {
                    y: 20,
                    opacity: 0,
                    scale: 1.2
                }, {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    ease: "elastic.out(1, 0.3)",
                    duration: 1,
                }
            );

        }, component);
        return () => ctx.revert();
    }, []);

    const renderLetters = (name, key) => {
        if (!name) return;

        return name.split('').map((letter, index) => {
            return <span key={index}
                         className={`name-animation name-animation-${key} inline-block opacity-0 will-change-transform`}>{letter}</span>
        })
    }

    return (
        <section ref={component} className="relative px-4 py-10 md:px-6 md:py-14 lg:py-16 min-h-screen overflow-hidden">
            {/* Spotlight loads immediately but optimized */}
            <Spotlight
                duration={12}
                xOffset={30}
                width={400}
                height={1000}
                smallWidth={180}
            />

            {/* Main content with higher z-index */}
            <div className="relative z-10 mx-auto w-full max-w-7xl grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center">
                {/* 3D Models with Sparkles - Load only after name animation starts */}
                <div className="relative col-start-1 md:col-start-2 md:row-start-1">
                    {/* Sparkles background for 3D area only */}
                    {showHeavyComponents && (
                        <div className="absolute inset-0">
                            <SparklesCore
                                particleDensity={120}
                                speed={4}
                                minSize={1}
                                maxSize={3}
                            />
                        </div>
                    )}
                    {/* 3D Models */}
                    {showHeavyComponents && (
                        <div className="relative z-10">
                            <Shapes />
                        </div>
                    )}
                </div>

                {/* Text content - Your original structure */}
                <div className="col-start-1 md:row-start-1">
                    <h1 className="mb-8 font-extrabold leading-none tracking-tighter"
                        style={{fontSize: 'clamp(3rem, 20vmin, 20rem)'}}
                        aria-label="Faran Imam Software Developer">
                        <span className="block text-slate-300">{renderLetters("Faran", "first")}</span>
                        <span className="-mt-[.2em] block text-slate-500">{renderLetters("Imam", "last")}</span>
                        <span
                            className="job-title block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-2xl
                                 font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl">
                                Software Developer
                        </span>
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default Hero;