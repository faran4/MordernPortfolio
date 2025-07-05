import React, {useEffect, useState} from 'react'
import {navLinks} from "../constants/index.js";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [hideNavbar, setHideNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(true);

            // Check if projects section is in view
            const projectsSection = document.querySelector('#work');
            if (projectsSection) {
                const rect = projectsSection.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Hide navbar when projects section reaches the top
                // Show navbar when projects section is completely out of view
                if (rect.top <= 0 && rect.bottom > windowHeight * 0.1) {
                    setHideNavbar(true);
                } else {
                    setHideNavbar(false);
                }
            }
        }

        window.addEventListener('scroll', handleScroll);
        // Run once on mount to check initial state
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'} ${hideNavbar ? 'navbar-hidden' : 'navbar-visible'}`}>
            <div className="inner">
                <a className="logo" href="#hero">
                    Faran
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({link, name}) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline"/>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href="#contact" className="contact-btn group">
                    <div className="inner">
                        <span>Contact me</span>
                    </div>
                </a>

            </div>

        </header>
    )
}
export default Navbar