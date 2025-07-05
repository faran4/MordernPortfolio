import React, {useRef} from 'react';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const sectionRef = useRef(null);
    const projectsContainerRef = useRef(null);
    const headerRef = useRef(null);

    const projects = [
        {
            id: 1,
            date: "January 2024",
            title: "Modern Userfriendly Taxi-App ReactNative",
            description: "An app built with ReactNative, Expo, & TailwindCss for a fast, User-friendly experience.",
            image: "/project1.png",
            alt: "Ryde"
        },
        {
            id: 2,
            date: "March 2024",
            title: "Library Management Platform",
            description: "A comprehensive digital solution for managing library resources, book cataloging, and user management with an intuitive interface.",
            image: "/project2.png",
            alt: "Library Management Platform"
        },
        {
            id: 3,
            date: "May 2024",
            title: "YC Directory - A Startup Showcase App",
            description: "A modern platform showcasing Y Combinator startups with detailed profiles, filtering capabilities, and real-time updates.",
            image: "/project3.png",
            alt: "YC Directory"
        }
    ];

    useGSAP(() => {
        // 1. Section entrance animation
        gsap.fromTo(sectionRef.current,
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // 2. Header animation - appears when section starts
        gsap.fromTo(headerRef.current,
            { y: -50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // 3. Main pinning animation - starts right after header appears
        const totalDistance = (projects.length - 1) * 100;

        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${window.innerHeight * projects.length * 0.8}`, // Reduced multiplier for smoother transition
            pin: true,
            scrub: 1,
            animation: gsap.to(projectsContainerRef.current, {
                y: `-${totalDistance}vh`,
                ease: "none"
            }),
            onUpdate: (self) => {
                const progress = self.progress;

                // Update progress indicators
                projects.forEach((_, index) => {
                    const progressBar = document.querySelector(`[data-progress="${index}"] .projects-progress-fill`);
                    if (progressBar) {
                        const progressValue = Math.max(0, Math.min(100, (progress * projects.length - index) * 100));
                        gsap.to(progressBar, {
                            width: `${progressValue}%`,
                            duration: 0.1
                        });
                    }
                });

                // Animate each project as it comes into view
                projects.forEach((project, index) => {
                    const projectElement = document.querySelector(`[data-project-id="${project.id}"]`);
                    if (projectElement) {
                        const projectProgress = (progress * projects.length) - index;

                        if (projectProgress >= 0 && projectProgress <= 1) {
                            // Project is active
                            gsap.to(projectElement, {
                                opacity: 1,
                                scale: 1,
                                duration: 0.3
                            });
                        } else if (projectProgress > 1) {
                            // Project has passed
                            gsap.to(projectElement, {
                                opacity: 0.3,
                                scale: 0.95,
                                duration: 0.3
                            });
                        } else {
                            // Project is coming
                            gsap.to(projectElement, {
                                opacity: 0,
                                scale: 0.9,
                                duration: 0.3
                            });
                        }
                    }
                });
            }
        });

        // 4. Initialize project states
        projects.forEach((project, index) => {
            const projectElement = document.querySelector(`[data-project-id="${project.id}"]`);
            if (projectElement) {
                gsap.set(projectElement, {
                    opacity: index === 0 ? 1 : 0,
                    scale: index === 0 ? 1 : 0.9
                });
            }
        });

    }, { scope: sectionRef });

    return (
        <section
            id="work"
            ref={sectionRef}
            className="projects-fullscreen"
        >
            {/* Fixed Header */}
            <div
                ref={headerRef}
                className="projects-header"
            >
                <div className="projects-header-content">
                    <h1 className="projects-title">
                        My Projects
                    </h1>
                    <button className="projects-view-all-btn">
                        View All Projects →
                    </button>
                </div>
            </div>

            {/* Projects Container */}
            <div
                ref={projectsContainerRef}
                className="projects-scroll-container"
            >
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        data-project-id={project.id}
                        className="project-fullscreen-card group"
                    >
                        {/* Project Card Container */}
                        <div className="project-card-container">
                            {/* Content Side - Always on left, 50% width */}
                            <div className="project-content-section">
                                <div className="project-content-wrapper">
                                    {/* Top Section - Date and Title */}
                                    <div className="project-content-top">
                                        <p className="project-date">
                                            {project.date}
                                        </p>
                                        <h2 className="project-title-main">
                                            {project.title}
                                        </h2>
                                    </div>

                                    {/* Bottom Section - Description and Link */}
                                    <div className="project-content-bottom">
                                        <p className="project-description">
                                            {project.description}
                                        </p>

                                        <div className="project-website-link">
                                            See the Website
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                className="project-btn-icon"
                                            >
                                                <path d="M7 17L17 7M17 7H7M17 7V17"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Image Side - Always on right, 50% width, no padding */}
                            <div className="project-image-section">
                                <div className="project-image-wrapper">
                                    <img
                                        src={project.image}
                                        alt={project.alt}
                                        className="project-image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Progress Indicators */}
            <div className="projects-progress-wrapper">
                <div className="projects-progress-container">
                    {projects.map((_, index) => (
                        <div
                            key={index}
                            data-progress={index}
                            className="projects-progress-bar"
                        >
                            <div className="projects-progress-fill"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;