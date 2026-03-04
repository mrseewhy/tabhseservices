

//     return (
//         <div className="py-10 bg-white">
//             <div className="px-10 max-w-[1280px] mx-auto">
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-center">
//                     <div className=" p-6">
//                         <img src="/img/tab-1.png" alt="logo-1" />
//                     </div>
//                     <div className=" p-4"> <img src="/img/tab-2.png" alt="logo-2" /></div>
//                     <div className=" p-4"> <img src="/img/tab-3.png" alt="logo-3" /></div>
//                     <div className=" p-4"> <img src="/img/tab-4.png" alt="logo-4" /></div>
//                 </div>

//             </div>

//         </div>
//     )
// }

// export default Clients

const Clients = () => {
    const logos = [
        { src: "/img/tab-1.png", alt: "Client 1" },
        { src: "/img/tab-2.png", alt: "Client 2" },
        { src: "/img/tab-3.png", alt: "Client 3" },
        { src: "/img/tab-4.png", alt: "Client 4" },
    ];

    return (
        <section className="py-4 md:py-10 bg-white">
            <div className="container mx-auto">
                {/* Heading stays centered inside container */}
                {/* <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-800 mb-8">
                    Trusted By
                </h2> */}

                {/* Marquee wrapper - everything is constrained here */}
                <div className="relative overflow-hidden group rounded-xl  py-6">
                    {/* Inner mask to prevent logos from touching edges */}
                    <div className="relative mx-8 md:mx-12 lg:mx-16">
                        {/* Scrolling track */}
                        <div
                            className="
                flex animate-scroll-to-left whitespace-nowrap
                will-change-transform
                group-hover:grayscale
                transition-all duration-500
              "
                        >
                            {/* First set */}
                            {logos.map((logo, idx) => (
                                <div
                                    key={idx}
                                    className="shrink-0 mx-6 sm:mx-8 md:mx-10 lg:mx-12"
                                >
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="h-14 sm:h-16 md:h-20 w-auto object-contain transition duration-400"
                                        loading="lazy"
                                    />
                                </div>
                            ))}

                            {/* Duplicate set for seamless loop */}
                            {logos.map((logo, idx) => (
                                <div
                                    key={`dup-${idx}`}
                                    className="shrink-0 mx-6 sm:mx-8 md:mx-10 lg:mx-12"
                                >
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="h-14 sm:h-16 md:h-20 w-auto object-contain transition duration-400"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Fade edges so logos don't look cut off abruptly */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-white to-transparent z-10" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-white to-transparent z-10" />
                </div>
            </div>

            {/* Animation definitions - control speed here */}
            <style >{`
        @keyframes scroll-to-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-to-left {
          animation: scroll-to-left 38s linear infinite;   /* ← change number = speed (32s–45s range feels good) */
        }

        /* Optional pause on hover */
        .group:hover .animate-scroll-to-left {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
};

export default Clients;