


import LinkButton from "./LinkButton"

const Hero = () => {
    return (
        <div className="relative overflow-hidden bg-linear-to-br from-black via-[#0b0f1f] to-[#0f172a]">

            {/* ── Main content ── */}
            <div className="relative container  text-white  flex flex-col md:flex-row items-center min-h-screen">

                {/* LEFT — copy */}
                <div className="w-full md:w-1/2 flex flex-col justify-center py-24 md:py-0">
                    <h1 className="text-xl text-(--my-purple) uppercase mb-2 font-head]">
                        TAB HSE Services
                    </h1>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase  mb-4 font-head">
                        Building Safer,{" "}
                        <span className="text-(--my-green)">Healthier</span>{" "}
                        Industries<span className="text-(--my-purple)">.</span>
                    </h2>
                    <p className="text-gray-200 max-w-lg leading-relaxed font-body">
                        TAB HSE Services partners with organisations across Nigeria to embed robust
                        safety culture, environmental sustainability, and compliance excellence —
                        from policy to practice.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <LinkButton
                            color="bg-(--my-green) text-white hover:bg-green-700"
                            to="/"
                            children="Schedule Consultation →"
                        />
                        <LinkButton
                            color="bg-gray-900 text-white hover:bg-gray-700"
                            to="/"
                            children="Explore Services"
                        />
                    </div>
                </div>

                {/* RIGHT — blob + circle image */}
                <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end pb-24 md:pb-0">
                    {/* <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[460px] lg:h-[460px]"> */}
                    <div className="relative w-full h-[460px] " >

                        {/* Blob behind the circle — top-left peek */}
                        <div
                            className="absolute -top-[8%] -left-[6%] w-[55%] h-[62%] bg-white/[0.07] pointer-events-none"
                            style={{ borderRadius: "60% 40% 30% 70% / 50% 60% 40% 50%" }}
                        />

                        {/* Circle image */}
                        <div className="absolute inset-0  overflow-hidden border-2 border-white/10 bg-cover bg-center bg-[url('/img/hero-bg2.jpg')] rounded-tl-[200px] rounded-[40px]" />
                    </div>
                </div>
            </div>

            {/* ── Outward curve at bottom ── */}
            <div className="absolute bottom-0 left-0 right-0 pointer-events-none leading-none">
                <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
                    className="block w-full h-12 md:h-16 lg:h-20">
                    <path d="M0,0 Q720,80 1440,0 L1440,80 L0,80 Z" fill="white" />
                </svg>
            </div>
        </div>
    )
}

export default Hero