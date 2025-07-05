"use client";
import React from "react";
import { motion } from "motion/react";

export const Spotlight = ({
                              gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 55%, .015) 50%, hsla(210, 100%, 45%, 0) 80%)",
                              gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .04) 0, hsla(210, 100%, 55%, .015) 80%, transparent 100%)",
                              gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .03) 0, hsla(210, 100%, 45%, .015) 80%, transparent 100%)",
                              translateY = -350,
                              width = 400,
                              height = 1000,
                              smallWidth = 180,
                              duration = 12,
                              xOffset = 30
                          } = {}) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 1, // Much faster fade in
                ease: "easeOut"
            }}
            className="pointer-events-none absolute inset-0 h-full w-full transform-gpu"
            style={{ willChange: 'opacity' }}
        >
            {/* First spotlight beam - left side */}
            <motion.div
                animate={{
                    x: [0, xOffset, 0],
                }}
                transition={{
                    duration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
                className="absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none transform-gpu"
                style={{ willChange: 'transform' }}
            >
                {/* Main gradient */}
                <div
                    style={{
                        transform: `translateY(${translateY}px) rotate(-45deg)`,
                        background: gradientFirst,
                        width: `${width}px`,
                        height: `${height}px`,
                        willChange: 'transform'
                    }}
                    className="absolute top-0 left-0 transform-gpu backface-hidden"
                />

                {/* Secondary gradient */}
                <div
                    style={{
                        transform: "rotate(-45deg) translate(5%, -50%)",
                        background: gradientSecond,
                        width: `${smallWidth}px`,
                        height: `${height}px`,
                        willChange: 'transform'
                    }}
                    className="absolute top-0 left-0 origin-top-left transform-gpu backface-hidden"
                />

                {/* Tertiary gradient */}
                <div
                    style={{
                        transform: "rotate(-45deg) translate(-180%, -70%)",
                        background: gradientThird,
                        width: `${smallWidth}px`,
                        height: `${height}px`,
                        willChange: 'transform'
                    }}
                    className="absolute top-0 left-0 origin-top-left transform-gpu backface-hidden"
                />
            </motion.div>

            {/* Second spotlight beam - right side */}
            <motion.div
                animate={{
                    x: [0, -xOffset, 0],
                }}
                transition={{
                    duration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
                className="absolute top-0 right-0 w-screen h-screen z-40 pointer-events-none transform-gpu"
                style={{ willChange: 'transform' }}
            >
                {/* Main gradient */}
                <div
                    style={{
                        transform: `translateY(${translateY}px) rotate(45deg)`,
                        background: gradientFirst,
                        width: `${width}px`,
                        height: `${height}px`,
                        willChange: 'transform'
                    }}
                    className="absolute top-0 right-0 transform-gpu backface-hidden"
                />

                {/* Secondary gradient */}
                <div
                    style={{
                        transform: "rotate(45deg) translate(-5%, -50%)",
                        background: gradientSecond,
                        width: `${smallWidth}px`,
                        height: `${height}px`,
                        willChange: 'transform'
                    }}
                    className="absolute top-0 right-0 origin-top-right transform-gpu backface-hidden"
                />

                {/* Tertiary gradient */}
                <div
                    style={{
                        transform: "rotate(45deg) translate(180%, -70%)",
                        background: gradientThird,
                        width: `${smallWidth}px`,
                        height: `${height}px`,
                        willChange: 'transform'
                    }}
                    className="absolute top-0 right-0 origin-top-right transform-gpu backface-hidden"
                />
            </motion.div>
        </motion.div>
    );
};