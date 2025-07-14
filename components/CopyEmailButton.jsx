import React, {useState} from 'react'
import { motion, AnimatePresence } from "motion/react";

export const CopyEmailButton = () => {
    const [copied, setCopied] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const email = "faranimam4@gmail.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    }

    return (
        <div className="relative">
            <motion.button
                className="premium-email-button"
                onClick={copyToClipboard}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                whileHover={{
                    y: -3,
                    boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{
                    scale: 0.98,
                    y: -1
                }}
                initial={{scale: 1}}
                animate={{
                    scale: copied ? [1, 1.05, 1] : 1
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeOut"
                }}
            >
                {/* Background gradient overlay */}
                <motion.div
                    className="premium-email-button-bg"
                    initial={{scale: 0, opacity: 0}}
                    animate={{
                        scale: isHovered ? 1 : 0,
                        opacity: isHovered ? 1 : 0
                    }}
                    transition={{duration: 0.3}}
                />

                {/* Border shimmer effect */}
                <div className="premium-email-button-border"></div>

                {/* Content */}
                <div className="premium-email-button-content">
                    <AnimatePresence mode="wait">
                        {copied ? (
                            <motion.div
                                className="flex items-center justify-center gap-3"
                                initial={{opacity: 0, y: 20, scale: 0.8}}
                                animate={{opacity: 1, y: 0, scale: 1}}
                                exit={{opacity: 0, y: -20, scale: 0.8}}
                                transition={{duration: 0.3, ease: "easeOut"}}
                                key="copied"
                            >
                                <motion.div
                                    initial={{scale: 0, rotate: -180}}
                                    animate={{scale: 1, rotate: 0}}
                                    transition={{delay: 0.1, duration: 0.4, ease: "backOut"}}
                                    className="premium-email-icon-wrapper"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        className="text-emerald-400"
                                    >
                                        <polyline points="20,6 9,17 4,12"></polyline>
                                    </svg>
                                </motion.div>
                                <span className="premium-email-text">Email Copied!</span>
                            </motion.div>
                        ) : (
                            <motion.div
                                className="flex items-center justify-center gap-3"
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, y: -20}}
                                transition={{duration: 0.3}}
                                key="copy"
                            >
                                <div className="premium-email-icon-wrapper">
                                    <motion.svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="text-white"
                                        whileHover={{rotate: 5}}
                                        transition={{duration: 0.2}}
                                    >
                                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                    </motion.svg>
                                </div>
                                <span className="premium-email-text">Copy Email</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Ripple effect */}
                <motion.div
                    className="premium-email-ripple"
                    initial={{scale: 0, opacity: 0.6}}
                    animate={{
                        scale: copied ? [0, 4] : 0,
                        opacity: copied ? [0.6, 0] : 0
                    }}
                    transition={{duration: 0.6}}
                />
            </motion.button>

            {/* Success message tooltip */}
            <AnimatePresence>
                {copied && (
                    <motion.div
                        className="premium-email-tooltip"
                        initial={{opacity: 0, y: 10, scale: 0.8}}
                        animate={{opacity: 1, y: 0, scale: 1}}
                        exit={{opacity: 0, y: 10, scale: 0.8}}
                        transition={{duration: 0.3}}
                    >
                        <div className="premium-email-tooltip-content">
                            <span className="text-xs font-medium">{email}</span>
                        </div>
                        <div className="premium-email-tooltip-arrow"></div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
};