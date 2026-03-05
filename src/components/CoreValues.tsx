// import { useState } from "react";

// const primeValues = [
//     {
//         letter: "P",
//         title: "Partnership",
//         description:
//             "We believe in collaborative success, working closely with our clients to understand their unique needs and build lasting relationships.",
//         accent: "purple",
//     },
//     {
//         letter: "R",
//         title: "Responsibility",
//         description:
//             "Guided by unwavering integrity, we are dedicated to protecting people through enhanced workplace safety and safeguarding the environment for generations to come.",
//         accent: "green",
//     },
//     {
//         letter: "I",
//         title: "Innovation",
//         description:
//             "We proactively seek and implement cutting-edge HSE and sustainability solutions that address today's challenges and anticipate tomorrow's needs.",
//         accent: "purple",
//     },
//     {
//         letter: "M",
//         title: "Mastery",
//         description:
//             "We are committed to delivering service par excellence, mastering our craft in every project, and building trust through unwavering honesty, transparency, and ethical action.",
//         accent: "green",
//     },
//     {
//         letter: "E",
//         title: "Evolution",
//         description:
//             "We continually adapt, learn, and advance our methods to address emerging risks, technologies, and global sustainability standards.",
//         accent: "purple",
//     },
// ];

// const CoreValues = () => {
//     const [activeIndex, setActiveIndex] = useState<number | null>(null);

//     return (
//         <section className="w-full bg-white py-8 px-6">
//             <div className="container">

//                 {/* Section Header */}
//                 <div className="text-center mb-8">

//                     <h2 className=" text-3xl font-bold  text-gray-900 sm:text-4xl md:text-5xl"> Our Core  <span className="text-(--my-green)">Values</span></h2>


//                 </div>



//                 {/* Value Cards */}
//                 <div className="flex flex-col gap-4">
//                     {primeValues.map((v, i) => {
//                         const isActive = activeIndex === i;
//                         const isPurple = v.accent === "purple";

//                         return (
//                             <div
//                                 key={v.letter}
//                                 onClick={() => setActiveIndex(isActive ? null : i)}
//                                 className={`rounded-2xl p-5 cursor-pointer transition-all duration-300 border ${isActive
//                                     ? isPurple
//                                         ? "bg-purple-50 border-(--my-purple)"
//                                         : "bg-green-50 border-(--my-green)"
//                                     : "bg-gray-50 border-gray-200 hover:border-gray-300 hover:bg-gray-100"
//                                     }`}
//                             >
//                                 <div className="flex items-center gap-5">
//                                     {/* Letter Badge */}
//                                     <div
//                                         className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-black text-white shrink-0 transition-transform duration-300 ${isActive ? "scale-110" : ""
//                                             } ${isPurple
//                                                 ? "bg-linear-to-br from-(--my-purple) to-[#ffbbff]"
//                                                 : "bg-linear-to-br from-(--my-green) to-[#9ff5ca]"
//                                             }`}
//                                     >
//                                         {v.letter}
//                                     </div>

//                                     {/* Content */}
//                                     <div className="flex-1 min-w-0">
//                                         <div className="flex items-center justify-between gap-4">
//                                             <h3 className="text-gray-900 text-xl font-bold">{v.title}</h3>
//                                             <div
//                                                 className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isActive ? "rotate-45" : "rotate-0"
//                                                     } ${isPurple ? "bg-purple-100" : "bg-green-100"}`}
//                                             >
//                                                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
//                                                     stroke={isPurple ? "#6b21a8" : "#15803d"} strokeWidth="2.5">
//                                                     <line x1="12" y1="5" x2="12" y2="19" />
//                                                     <line x1="5" y1="12" x2="19" y2="12" />
//                                                 </svg>
//                                             </div>
//                                         </div>

//                                         {/* Expandable Description */}
//                                         <div
//                                             className={`overflow-hidden transition-all duration-300 text-sm leading-relaxed text-gray-500 ${isActive ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
//                                                 }`}
//                                         >
//                                             {v.description}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>

//                 {/* Tagline */}
//                 <p className="text-center text-gray-400 text-xs font-semibold tracking-widest uppercase mt-14">
//                     ...HSE Services Par Excellence!
//                 </p>
//             </div>
//         </section>
//     );
// };

// export default CoreValues;


import { useState } from "react";

const primeValues = [
    {
        letter: "P",
        title: "Partnership",
        description:
            "We believe in collaborative success, working closely with our clients to understand their unique needs and build lasting relationships.",
        accent: "purple",
    },
    {
        letter: "R",
        title: "Responsibility",
        description:
            "Guided by unwavering integrity, we are dedicated to protecting people through enhanced workplace safety and safeguarding the environment for generations to come.",
        accent: "green",
    },
    {
        letter: "I",
        title: "Innovation",
        description:
            "We proactively seek and implement cutting-edge HSE and sustainability solutions that address today's challenges and anticipate tomorrow's needs.",
        accent: "purple",
    },
    {
        letter: "M",
        title: "Mastery",
        description:
            "We are committed to delivering service par excellence, mastering our craft in every project, and building trust through unwavering honesty, transparency, and ethical action.",
        accent: "green",
    },
    {
        letter: "E",
        title: "Evolution",
        description:
            "We continually adapt, learn, and advance our methods to address emerging risks, technologies, and global sustainability standards.",
        accent: "purple",
    },
];

const CoreValues = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="w-full bg-white py-20">
            <div className="container">

                {/* Section Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
                        Our Core <span className="text-(--my-green)">Values</span>
                    </h2>
                    <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-(--my-purple)" />
                    <p className="mt-5 text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
                        Our culture and client approach are defined by our{" "}
                        <span className="font-bold text-gray-800">PRIME</span> values —
                        five pillars that shape every engagement.
                    </p>
                </div>

                {/* Value Cards */}
                <div className="flex flex-col gap-3">
                    {primeValues.map((v, i) => {
                        const isActive = activeIndex === i;
                        const isPurple = v.accent === "purple";

                        return (
                            <div
                                key={v.letter}
                                onClick={() => setActiveIndex(isActive ? null : i)}
                                className={`rounded-2xl p-5 cursor-pointer transition-all duration-300 border ${isActive
                                        ? isPurple
                                            ? "bg-(--my-purple)/10 border-(--my-purple)/30"
                                            : "bg-(--my-green)/10 border-(--my-green)/30"
                                        : "bg-gray-50 border-gray-200 hover:border-gray-300 hover:bg-gray-100"
                                    }`}
                            >
                                <div className="flex items-center gap-5">

                                    {/* Letter Badge */}
                                    <div
                                        className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black text-white shrink-0 transition-transform duration-300 ${isActive ? "scale-110" : ""
                                            } ${isPurple ? "bg-(--my-purple)" : "bg-(--my-green)"
                                            }`}
                                    >
                                        {v.letter}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between gap-4">
                                            <h3 className="text-gray-900 text-lg font-bold">{v.title}</h3>
                                            <div
                                                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isActive ? "rotate-45" : "rotate-0"
                                                    } ${isPurple
                                                        ? "bg-(--my-purple)/20 text-(--my-purple)"
                                                        : "bg-(--my-green)/20 text-(--my-green)"
                                                    }`}
                                            >
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2.5">
                                                    <line x1="12" y1="5" x2="12" y2="19" />
                                                    <line x1="5" y1="12" x2="19" y2="12" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Expandable Description */}
                                        <div
                                            className={`overflow-hidden transition-all duration-300 text-sm leading-relaxed text-gray-500 ${isActive ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                                                }`}
                                        >
                                            {v.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Tagline */}
                <p className="text-center text-gray-400 text-xs font-semibold tracking-widest uppercase mt-14">
                    ...HSE Services Par Excellence!
                </p>
            </div>
        </section>
    );
};

export default CoreValues;