import React from 'react';
import {motion} from "motion/react";

const Card = ({style, text, image, containerRef}) => {
    return image && !text ? (<motion.img
            className="absolute w-15 cursor-grab"
            src={image}
            style={style}
            whileHover={{scale: 1.1}}
            drag
            dragConstraints={containerRef}
            dragElastic={1}
            alt="card image"/>) : (<motion.div
            className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-600 font-extralight
        bg-gray-700 w-[12rem] cursor-grab"
            style={style}
            whileHover={{scale: 1.1}}
            drag
            dragConstraints={containerRef}
            dragElastic={1}
        >
            {text}
        </motion.div>)
}
export default Card
