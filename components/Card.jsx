import React from 'react';
import {motion} from "motion/react";

const Card = ({style, text, image, containerRef}) => {
    return image && !text ? (
        <motion.img
            className="absolute cursor-grab light-card-rectangular image-card"
            src={image}
            style={style}
            whileHover={{scale: 1.1}}
            drag
            dragConstraints={containerRef}
            dragElastic={1}
            alt="card image"
        />
    ) : (
        <motion.div
            className="absolute light-card-rectangular cursor-grab"
            style={style}
            whileHover={{scale: 1.1}}
            drag
            dragConstraints={containerRef}
            dragElastic={1}
        >
            <span className="light-card-text">
                {text}
            </span>
        </motion.div>
    )
}

export default Card