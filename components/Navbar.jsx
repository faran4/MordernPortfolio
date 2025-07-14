import React, { useEffect, useState } from 'react';

const navLinks = [
    { link: "#about", name: "About" },
    { link: "#projects", name: "Projects" },
    { link: "#experience", name: "Experience" },
    { link: "#contact", name: "Contact" }
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            scrolled ? 'bg-black-100/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <a href="#hero" className="text-2xl font-bold text-white hover:scale-105 transition-transform tracking-tight">
                    Faran
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map(({ link, name }) => (
                        <a
                            key={name}
                            href={link}
                            className="group text-white/60 hover:text-white transition-colors relative"
                        >
                            <span className="text-sm uppercase tracking-wide font-light">{name}</span>
                            <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/40 transition-all group-hover:w-full"></div>
                        </a>
                    ))}
                </nav>

                {/* Contact Button */}
                <a
                    href="#contact"
                    className="group relative px-4 py-2 border border-white/20 text-white overflow-hidden transition-all duration-300 hover:border-white/40"
                >
                        <span className="relative z-10 text-sm uppercase tracking-widest font-light group-hover:text-black transition-colors">
                            Contact
                        </span>
                    <div className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </a>
            </div>
        </header>
    );
};

export default Navbar;