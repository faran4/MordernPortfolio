import React from 'react'

const ToolBoxItems = ({items, direction = 'left'}) => {
    return (
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right, transparent, black 10%, black 90%, transparent)]">
            <div className={`flex flex-none py-3 ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}>
                {/* First set of items */}
                {items.map(item => (
                    <div key={item.title} className="toolbox-item">
                        <div
                            className="toolbox-icon"
                            style={{
                                background: 'linear-gradient(45deg, #374151, #1f2937)',
                                WebkitMask: `url(${item.icon}) center/contain no-repeat`,
                                mask: `url(${item.icon}) center/contain no-repeat`
                            }}
                        ></div>
                        <span className="toolbox-text">{item.title}</span>
                    </div>
                ))}
                {/* Duplicate items for seamless loop */}
                {items.map(item => (
                    <div key={`${item.title}-duplicate`} className="toolbox-item">
                        <div
                            className="toolbox-icon"
                            style={{
                                background: 'linear-gradient(45deg, #374151, #1f2937)',
                                WebkitMask: `url(${item.icon}) center/contain no-repeat`,
                                mask: `url(${item.icon}) center/contain no-repeat`
                            }}
                        ></div>
                        <span className="toolbox-text">{item.title}</span>
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes scroll-left {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                @keyframes scroll-right {
                    0% {
                        transform: translateX(-50%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }

                .animate-scroll-left {
                    animation: scroll-left 20s linear infinite;
                }

                .animate-scroll-right {
                    animation: scroll-right 20s linear infinite;
                }
            `}</style>
        </div>
    )
}

export default ToolBoxItems