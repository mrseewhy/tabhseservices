import Clients from "../components/Clients";
import LinkButton from "../components/LinkButton";

const reasons = [
    {
        accent: "purple",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        title: "True Partnership",
        description:
            "We don't just work for you — we work with you. Our approach is rooted in genuine collaboration, taking time to understand your unique challenges, culture, and goals before proposing any solution.",
    },
    {
        accent: "green",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: "Beyond Compliance",
        description:
            "We go further than ticking boxes. Our solutions are designed to transform your operations into models of efficiency, responsibility, and long-term viability — not just meet the minimum standard.",
    },
    {
        accent: "purple",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
            </svg>
        ),
        title: "Comprehensive Expertise",
        description:
            "From HSE consultancy and environmental impact assessments to facilities management, ISO systems, and procurement — we cover the full spectrum so you have one trusted partner for all your needs.",
    },
    {
        accent: "green",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
        title: "Practical & Innovative",
        description:
            "We combine real-world practicality with cutting-edge thinking. Our training programs and consulting services are built for the modern market — actionable, measurable, and built to last.",
    },
    {
        accent: "purple",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
        title: "Lasting Impact",
        description:
            "We are committed to walking alongside you on the journey to excellence in Health, Safety, Environment, Sustainability, and Human Capacity Development — delivering results that endure.",
    },
    {
        accent: "green",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
        title: "Nigeria-Focused",
        description:
            "We understand the local regulatory landscape, industry context, and operational realities across Nigeria. Our solutions are built for the environment you actually operate in.",
    },
];

const stats = [
    { value: "100+", label: "Projects Delivered", accent: "purple" },
    { value: "50+", label: "Clients Served", accent: "green" },
    { value: "5+", label: "Years Experience", accent: "purple" },
    { value: "7", label: "Service Areas", accent: "green" },
];


const WhyTAB = () => {
    return (
        <div className="bg-white">


            {/* ── Hero statement ── */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="text-(--my-green) text-xs font-bold tracking-widest uppercase">
                            Why Choose Us
                        </span>
                        <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl leading-tight">
                            We Don't Just Work{" "}
                            <span className="text-(--my-purple)">For</span> You.{" "}
                            <br className="hidden sm:block" />
                            We Work{" "}
                            <span className="text-(--my-green)">With</span> You.
                        </h2>
                        <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-(--my-purple)" />
                        <p className="mt-6 text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto">
                            At TAB HSE Services, you gain more than a service provider. You gain a
                            trusted partner dedicated to achieving your goals and delivering lasting
                            impact — in Health, Safety, Environment, Sustainability, and Human
                            Capacity Development.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Stats ── */}
            <section className="py-10 bg-gray-50">
                <div className="container">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {stats.map((s) => (
                            <div
                                key={s.label}
                                className={`rounded-2xl p-6 text-center border ${s.accent === "purple"
                                    ? "bg-(--my-purple)/10 border-(--my-purple)/20"
                                    : "bg-(--my-green)/10 border-(--my-green)/20"
                                    }`}
                            >
                                <p className={`text-3xl font-black ${s.accent === "purple" ? "text-(--my-purple)" : "text-(--my-green)"
                                    }`}>
                                    {s.value}
                                </p>
                                <p className="text-xs text-gray-500 mt-1 leading-snug">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Reasons grid ── */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="text-center mb-14">
                        <span className="text-(--my-green) text-xs font-bold tracking-widest uppercase">
                            What Sets Us Apart
                        </span>
                        <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
                            The TAB HSE{" "}
                            <span className="text-(--my-green)">Difference</span>
                        </h2>
                        <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-(--my-purple)" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reasons.map((r) => {
                            const isPurple = r.accent === "purple";
                            return (
                                <div
                                    key={r.title}
                                    className={`rounded-2xl p-7 border hover:-translate-y-1 transition-transform duration-300 ${isPurple
                                        ? "bg-(--my-purple)/10 border-(--my-purple)/20"
                                        : "bg-(--my-green)/10 border-(--my-green)/20"
                                        }`}
                                >
                                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${isPurple
                                        ? "bg-(--my-purple)/20 text-(--my-purple)"
                                        : "bg-(--my-green)/20 text-(--my-green)"
                                        }`}>
                                        {r.icon}
                                    </div>
                                    <h3 className="text-gray-900 font-bold text-lg mb-3">{r.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{r.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── PRIME values strip ── */}
            <section className="relative py-16 md:py-20 overflow-hidden bg-linear-to-br from-black via-[#0b0f1f] to-[#0f172a]">

                {/* Dot grid */}
                <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                    }}
                />

                <div className="relative container">
                    <div className="text-center mb-12">
                        <span className="text-(--my-green) text-xs font-bold tracking-widest uppercase">
                            Our Culture
                        </span>
                        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                            Guided by{" "}
                            <span className="text-(--my-green)">PRIME</span>{" "}
                            Values
                        </h2>
                        <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-(--my-purple)" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {[
                            { letter: "P", title: "Partnership", accent: "purple" },
                            { letter: "R", title: "Responsibility", accent: "green" },
                            { letter: "I", title: "Innovation", accent: "purple" },
                            { letter: "M", title: "Mastery", accent: "green" },
                            { letter: "E", title: "Evolution", accent: "purple" },
                        ].map((v) => {
                            const isPurple = v.accent === "purple";
                            return (
                                <div
                                    key={v.letter}
                                    className="rounded-2xl p-6 text-center border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300"
                                >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-black text-white mx-auto mb-4 ${isPurple ? "bg-(--my-purple)" : "bg-(--my-green)"
                                        }`}>
                                        {v.letter}
                                    </div>
                                    <p className="text-white font-semibold text-sm">{v.title}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Clients ── */}
            <section className="py-16 bg-gray-50">
                <div className="container">
                    <div className="text-center mb-10">
                        <span className="text-(--my-green) text-xs font-bold tracking-widest uppercase">
                            Trusted By
                        </span>
                        <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
                            Our <span className="text-(--my-purple)">Clients</span>
                        </h2>
                        <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-(--my-purple)" />
                    </div>
                    <Clients />
                    {/* <div className="flex flex-wrap items-center justify-center gap-4">
                        {clients.map((c) => (
                            <div
                                key={c}
                                className="rounded-2xl border border-gray-200 bg-white px-8 py-4 text-gray-700 font-bold text-sm hover:border-(--my-purple)/40 hover:bg-(--my-purple)/5 transition-colors duration-300"
                            >
                                {c}
                            </div>
                        ))}
                    </div> */}
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="relative py-16 md:py-24 overflow-hidden">

                {/* Dot grid */}
                {/* <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: "radial-gradient(circle, #7B2D8B 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                        opacity: 0.06,
                    }}
                /> */}

                <div className="relative container">
                    <div className="max-w-2xl mx-auto text-center">
                        <span className="text-(--my-green) text-xs font-bold tracking-widest uppercase">
                            Get Started
                        </span>
                        <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl leading-tight">
                            Ready to Partner{" "}
                            <span className="text-(--my-green)">With Us</span>?
                        </h2>
                        <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-(--my-purple)" />
                        <p className="mt-6 text-gray-600 text-sm leading-relaxed">
                            Let's walk alongside your organisation on the journey to excellence
                            in health, safety, environment, and sustainability.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-12 justify-center">
                            <LinkButton
                                color="bg-(--my-green) text-white hover:bg-green-700"
                                to="/contact-us"
                                children="Schedule Consultation →"
                            />
                            <LinkButton
                                color="bg-gray-900 text-white hover:bg-gray-700"
                                to="/services"
                                children="Explore Services"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyTAB;