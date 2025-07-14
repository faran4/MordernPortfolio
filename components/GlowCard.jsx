import React, {useRef} from 'react'

const GlowCard = ({card, children, index}) => {
    const cardRefs = useRef([]);

    const handleMouseMove = (index) => (e) => {
        const card = cardRefs.current[index];
        if (!card) return;

        //get the mouse position relative to card
        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        //calc the angle from the center of the card
        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
        angle = (angle + 360) % 360;
        card.style.setProperty('--start', angle + 60);
    }

    return (
        <div
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseMove={handleMouseMove(index)}
            className="premium-glow-card timeline-card group"
        >
            {/* Animated glow effect following mouse */}
            <div className="premium-glow-effect"/>

            {/* Card content */}
            <div className="relative z-10 p-8">
                {/* Star rating with premium styling */}
                <div className="flex items-center gap-1 mb-6">
                    {Array.from({length: 5}, (_, i) => (
                        <div key={i} className="relative">
                            <div className="absolute inset-0 bg-yellow-400/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img
                                src="/star.png"
                                alt="star"
                                className="size-5 relative z-10 opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                            />
                        </div>
                    ))}
                    <div className="flex-1 h-[1px] bg-white/15 ml-4"></div>
                </div>

                {/* Review text with premium styling */}
                <div className="mb-6">
                    <p className="text-white/80 text-lg leading-relaxed group-hover:text-white transition-colors duration-300 italic">
                        "{card.review}"
                    </p>
                </div>

                {/* Children content */}
                <div className="relative">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default GlowCard