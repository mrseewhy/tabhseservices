

import LinkButton from "./LinkButton";

const AboutSection = () => {
    return (
        <section className="bg-white py-12 md:py-16 ">
            <div className="container ">
                <div className="flex flex-col md:flex-row md:items-center md:gap-12 xl:gap-16">
                    {/* Image side */}
                    <div className="md:w-1/2">
                        <div className="aspect-4/3 overflow-hidden rounded-4xl shadow-xl rounded-br-[200px]">
                            <img
                                src="/img/about-2.jpg"
                                alt="TAB HSE Services - Sustainable industrial solutions"
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Text side */}
                    <div className="mt-16 lg:mt-0 md:w-1/2">
                        <h5 className="text-lg font-semibold uppercase tracking-wide text-(--my-purple) md:text-xl">
                            About Us
                        </h5>

                        <h2 className="mt-3 text-3xl font-bold  text-gray-900 sm:text-4xl md:text-5xl">
                            Empowering Safer, <br className="hidden sm:inline" />
                            <span className="text-(--my-green)">Sustainable Futures</span>
                        </h2>

                        <div className="mt-5 space-y-5 text-base  text-gray-700 ">
                            <p>
                                TAB HSE Services is a premier consultancy company at the forefront of
                                building safer, healthier, and more sustainable industrial landscapes.
                                We go beyond compliance, offering par excellence solutions in Health,
                                Safety, and Environment (HSE) that are tailored to the modern market.
                            </p>


                        </div>

                        {/* ← YOUR ORIGINAL BUTTON RESTORED EXACTLY */}
                        <div className="mt-8">
                            <LinkButton
                                color="bg-(--my-green) text-white hover:bg-green-700"
                                to="/"
                                children="Discover More"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
