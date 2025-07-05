import React, {useState} from 'react'
import { motion, AnimatePresence } from "motion/react";

export const CopyEmailButton = () => {
    const [copied, setCopied] = useState(false);
    const email = "faranimam4@gmail.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <motion.button
            className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
            onClick={copyToClipboard}
            whileHover={{y: -5}}
            whileTap={{scale: 1.1}}>
            <AnimatePresence mode="wait">
            {copied ? (<motion.p
                className="flex items-center justify-center gap-2"
                initial={{opacity: 0, y: -10}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -10}}
                transition={{duration: 0.1, ease: "easeInOut"}}
                key="copied"
            >
                <img src="logos/copy-done.svg" alt="copyIcon" className="w-5"/>
                Email has Copied
            </motion.p>) : (
                <motion.p
                    className="flex items-center justify-center gap-2"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.1}}
                    key="copy"
                >
                    <img src="logos/copy.svg"
                         alt="email icon"
                         className="w-5"
                    />
                    Copy Email Address
                </motion.p>)}
            </AnimatePresence>
        < /motion.button>
    )
};