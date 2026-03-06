


const AboutSectionForPage = () => {
    return (
        <section className="bg-white py-12 md:py-16 mt-12">
            <div className="container">
                <div className="flex flex-col md:flex-row md:items-center md:gap-12 xl:gap-16">

                    {/* Image side */}
                    <div className="md:w-1/2">
                        <div className="relative">
                            {/* Decorative background block */}
                            <div className="absolute -bottom-4 -left-4 w-full h-full rounded-4xl rounded-br-[200px] bg-(--my-purple)/10 -z-10" />
                            <div className="aspect-4/3 overflow-hidden rounded-4xl shadow-xl rounded-br-[200px]">
                                <img
                                    src="/img/about-2.jpg"
                                    alt="TAB HSE Services - Sustainable industrial solutions"
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text side */}
                    <div className="mt-16 md:mt-0 md:w-1/2">

                        {/* Label */}
                        <span className="text-(--my-green) text-xs font-bold tracking-widest uppercase">
                            Who We Are
                        </span>

                        {/* Heading */}
                        <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl leading-tight">
                            About <span className="text-(--my-green)">TAB HSE</span>{" "}
                            <span className="text-(--my-purple)">Services</span>
                        </h2>

                        {/* Underline */}
                        <div className="mt-3 h-1 w-16 rounded-full bg-(--my-purple)" />

                        {/* Body */}
                        <div className="mt-6 space-y-4 text-sm text-gray-600 leading-relaxed">
                            <p>
                                TAB HSE Services is a premier consultancy company at the forefront of
                                building safer, healthier, and more sustainable industrial landscapes.
                                We go beyond compliance, offering par excellence solutions in Health,
                                Safety, and Environment (HSE) that are tailored to the modern market.
                            </p>
                            <p>
                                Our expertise empowers organizations to not only meet regulatory
                                demands but to excel, transforming their operations into models of
                                efficiency, responsibility, and long-term viability. From comprehensive
                                training to strategic sustainability integration, we are the dedicated
                                partner for businesses committed to protecting their people, their
                                planet, and their performance.
                            </p>
                        </div>

                        {/* Stats row */}
                        <div className="mt-8 grid grid-cols-3 gap-4">
                            <div className="rounded-2xl bg-(--my-purple)/10 border border-(--my-purple)/20 p-4 text-center">
                                <p className="text-2xl font-black text-(--my-purple)">20+</p>
                                <p className="text-xs text-gray-500 mt-1 leading-snug">Projects Delivered</p>
                            </div>
                            <div className="rounded-2xl bg-(--my-green)/10 border border-(--my-green)/20 p-4 text-center">
                                <p className="text-2xl font-black text-(--my-green)">50+</p>
                                <p className="text-xs text-gray-500 mt-1 leading-snug">Clients Served</p>
                            </div>
                            <div className="rounded-2xl bg-(--my-purple)/10 border border-(--my-purple)/20 p-4 text-center">
                                <p className="text-2xl font-black text-(--my-purple)">5+</p>
                                <p className="text-xs text-gray-500 mt-1 leading-snug">Years Experience</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSectionForPage;