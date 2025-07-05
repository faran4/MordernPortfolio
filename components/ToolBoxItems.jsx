import React from 'react'

const ToolBoxItems = ({items, direction = 'left'}) => {
    return (
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right, transparent, black 10%, black 90%, transparent)]">
            <div className={`flex flex-none py-4 ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}>
                {/* First set of items */}
                {items.map(item => (
                    <div key={item.title}
                         className="inline-flex items-center gap-4 mx-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg whitespace-nowrap">
                        <div
                            className="size-10 flex-shrink-0"
                            style={{
                                background: 'linear-gradient(45deg, #374151, #ffffff)',
                                WebkitMask: `url(${item.icon}) center/contain no-repeat`,
                                mask: `url(${item.icon}) center/contain no-repeat`
                            }}
                        ></div>
                        <span className="font-semibold">{item.title}</span>
                    </div>
                ))}
                {/* Duplicate items for seamless loop */}
                {items.map(item => (
                    <div key={`${item.title}-duplicate`}
                         className="inline-flex items-center gap-4 mx-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg whitespace-nowrap">
                        <div
                            className="size-10 flex-shrink-0"
                            style={{
                                background: 'linear-gradient(45deg, #374151, #ffffff)',
                                WebkitMask: `url(${item.icon}) center/contain no-repeat`,
                                mask: `url(${item.icon}) center/contain no-repeat`
                            }}
                        ></div>
                        <span className="font-semibold">{item.title}</span>
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
