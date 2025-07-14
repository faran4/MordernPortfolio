import {useRef, useState} from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import Shapes from "../components/Shapes.jsx";
import {SparklesCore} from "../components/ui/sparkles.jsx";
import {Spotlight} from "../components/ui/spotlight-new.jsx";

gsap.registerPlugin(useGSAP);

const Hero = () => {
    const component = useRef(null);

    // Your existing states for sparkles and shapes
    const [showSparkles, setShowSparkles] = useState(false);
    const [showShapes, setShowShapes] = useState(false);

    // Your EXACT existing useGSAP animation
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

    // Your EXACT existing renderLetters function
    const renderLetters = (name, key) => {
        if (!name) return;

        return name.split('').map((letter, index) => {
            return <span key={index}
                         className={`name-animation name-animation-${key} inline-block will-change-transform`}>{letter}</span>
        })
    }

    return (
        <section ref={component} className="relative c-space min-h-screen overflow-hidden bg-black-100">
            {/* Enhanced background accents - Projects style */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/[0.02]"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/[0.02]"></div>
            </div>

            {/* Your EXACT existing Spotlight */}
            <Spotlight
                duration={8}
                xOffset={40}
                width={400}
                height={1000}
                smallWidth={180}
            />

            {/* Enhanced main content with Projects spacing */}
            <div className="relative z-10 mx-auto w-full max-w-7xl py-16">
                {/* Added Projects-style eyebrow label */}
                <div className="flex items-center gap-6 mb-8">
                    <div className="h-[1px] w-24 bg-white/20"></div>
                    <span className="text-white/40 uppercase tracking-[0.2em] text-xs font-light">
                        Full Stack Developer
                    </span>
                </div>

                <div className="grid min-h-[60vh] grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
                    {/* Your EXACT existing 3D Models section */}
                    <div className="relative col-start-1 row-start-1 md:col-start-2 md:row-start-1 h-[400px] md:h-[500px]">
                        {/* Your EXACT existing Sparkles */}
                        <div className="absolute inset-0" style={{ opacity: showSparkles ? 0.6 : 0, transition: 'opacity 0.6s ease-out' }}>
                            <SparklesCore
                                particleDensity={120}
                                speed={4}
                                minSize={1}
                                maxSize={3}
                                particleColor="#ffffff"
                            />
                        </div>
                        {/* Your EXACT existing 3D Models */}
                        <div className="relative z-10" style={{ opacity: showShapes ? 1 : 0, transition: 'opacity 0.5s ease-out' }}>
                            <Shapes />
                        </div>
                    </div>

                    {/* Your existing text content with Projects-style enhancements */}
                    <div className="col-start-1 row-start-2 md:row-start-1">
                        {/* Your EXACT existing h1 */}
                        <h1 className="mb-8 font-extrabold leading-none tracking-tighter text-center md:text-left"
                            style={{fontSize: 'clamp(3rem, 20vmin, 20rem)'}}
                            aria-label="Faran Imam Software Developer">
                            <span className="block text-white">{renderLetters("Faran", "first")}</span>
                            <span className="-mt-[.2em] block text-white/60">{renderLetters("Imam", "last")}</span>
                            <span
                                className="job-title block text-2xl font-bold uppercase tracking-[.2em] text-white/40 will-change-transform md:text-4xl mt-4 md:mt-6">
                                    Software Developer
                            </span>
                        </h1>

                        {/* Added Projects-style description */}
                        <p className="text-white/60 text-lg max-w-2xl leading-relaxed mb-8 text-center md:text-left">
                            Crafting innovative digital experiences through cutting-edge web and mobile technologies
                        </p>

                        {/* Added Projects-style subtle navigation hint */}
                        <div className="flex items-center gap-8 justify-center md:justify-start">
                            <div className="h-[1px] w-16 bg-white/10"></div>
                            <span className="text-white/30 text-xs uppercase tracking-widest">
                                Scroll to explore
                            </span>
                            <div className="h-[1px] w-16 bg-white/10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;