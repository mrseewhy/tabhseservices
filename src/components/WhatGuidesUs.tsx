

const WhatGuidesUs = () => {
    return (
        <section className="w-full bg-white py-20">
            <div className="container">

                {/* Section Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
                        What Guides <span className="text-(--my-green)">Us</span>
                    </h2>
                    <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-(--my-purple)" />
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Mission Card */}
                    <div className="rounded-2xl bg-(--my-purple)/10 border border-(--my-purple)/20 p-8 hover:-translate-y-1 transition-transform duration-300">

                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 rounded-xl bg-(--my-purple)/20 flex items-center justify-center shrink-0 text-(--my-purple)">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <circle cx="12" cy="12" r="6" />
                                    <circle cx="12" cy="12" r="2" />
                                </svg>
                            </div>
                            <span className="text-(--my-purple) text-xs font-bold tracking-widest uppercase">
                                Our Mission
                            </span>
                        </div>

                        <p className="text-gray-700 leading-relaxed text-sm">
                            To partner with industries to embed a robust culture of health,
                            safety, and environmental responsibility — delivering innovative,
                            practical, and sustainable consulting services and training programs
                            that mitigate risk, ensure regulatory compliance, enhance operational excellence, and drive meaningful progress toward a sustainable future.
                        </p>

                        <div className="mt-6 pt-5 border-t border-(--my-purple)/20 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-(--my-purple) inline-block shrink-0" />
                            <span className="text-(--my-purple) text-xs font-semibold">
                                Innovative · Practical · Sustainable
                            </span>
                        </div>
                    </div>

                    {/* Vision Card */}
                    <div className="rounded-2xl bg-(--my-green)/10 border border-(--my-green)/20 p-8 hover:-translate-y-1 transition-transform duration-300">

                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 rounded-xl bg-(--my-green)/20 flex items-center justify-center text-(--my-green) shrink-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            </div>
                            <span className="text-(--my-green) text-xs font-bold tracking-widest uppercase">
                                Our Vision
                            </span>
                        </div>

                        <p className="text-gray-700 leading-relaxed text-sm">
                            To be the undisputed catalyst for transformative HSE and
                            sustainability standards — setting the benchmark for excellence
                            and inspiring a future where every workplace is a beacon of
                            safety and environmental stewardship.
                        </p>

                        <div className="mt-6 pt-5 border-t border-(--my-green)/20 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-(--my-green) inline-block shrink-0" />
                            <span className="text-(--my-green) text-xs font-semibold">
                                Excellence · Stewardship · Impact
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhatGuidesUs;