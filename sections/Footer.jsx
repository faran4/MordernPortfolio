import React from 'react'
import { socialImgs } from "../constants/index.js";

const Footer = () => {
    return (
        <footer className="relative bg-black-100 pb-4">
            {/* Simple background accent */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.005] rounded-full blur-3xl"></div>
            </div>

            {/* Top divider */}
            <div className="w-full h-[1px] bg-white/10 mb-4"></div>

            <div className="w-full c-space relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 w-full max-w-6xl mx-auto items-center">

                    {/* Terms & Conditions */}
                    <div className="flex flex-col justify-center text-center md:text-left">
                        <p className="text-white/50 text-sm hover:text-white/70 transition-colors duration-300 cursor-pointer">
                            Terms & Conditions
                        </p>
                    </div>

                    {/* Social Icons - Premium Style */}
                    <div className="flex items-center justify-center gap-5">
                        {socialImgs.map((socialImg, index) => (
                            <div
                                key={index}
                                className="w-10 h-10 md:w-12 md:h-12 bg-black-200 border border-white/10 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-500 hover:border-white/20 hover:bg-black-50 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <img
                                    src={socialImg.imgPath}
                                    alt="social icon"
                                    className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="flex flex-col justify-center text-center md:text-right">
                        <p className="text-white/50 text-sm">
                            © {new Date().getFullYear()} Faran Imam. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer