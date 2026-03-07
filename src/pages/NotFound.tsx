import { Link } from "react-router-dom";
import LinkButton from "../components/LinkButton";

const NotFoundPage = () => {
    return (
        <div className="relative min-h-screen bg-linear-to-br from-black via-[#0b0f1f] to-[#0f172a] flex items-center justify-center overflow-hidden">

            {/* Dot grid */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />

            {/* Blurred orbs */}
            <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-(--my-purple) opacity-10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-(--my-green) opacity-10 blur-3xl pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-lg mx-auto">

                {/* 404 */}
                <p className="text-[120px] md:text-[160px] font-black leading-none text-white opacity-5 select-none">
                    404
                </p>

                {/* Floating label over the 404 */}
                <div className="-mt-16 md:-mt-20 relative z-10">
                    <div className="flex items-center justify-center gap-3 mb-5">
                        <div className="h-px w-8 bg-(--my-purple) opacity-60" />
                        <span className="text-(--my-green) text-xs font-bold tracking-widest uppercase">
                            Page Not Found
                        </span>
                        <div className="h-px w-8 bg-(--my-green) opacity-60" />
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                        Looks Like You're{" "}
                        <span className="text-(--my-purple)">Lost</span>
                    </h1>

                    <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-(--my-purple)" />

                    <p className="mt-6 text-gray-400 text-sm leading-relaxed">
                        The page you're looking for doesn't exist or may have been moved.
                        Let's get you back on track.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4 justify-center">
                        <LinkButton
                            color="bg-(--my-green) text-white hover:bg-green-700"
                            to="/"
                            children="← Back to Home"
                        />
                        <LinkButton
                            color="bg-white/10 text-white hover:bg-white/20"
                            to="/contact-us"
                            children="Contact Us"
                        />
                    </div>

                    {/* Quick links */}
                    <div className="mt-12 pt-8 border-t border-white/10">
                        <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-4">
                            Or visit one of these pages
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {[
                                { label: "About Us", to: "/about-us" },
                                { label: "Services", to: "/services" },
                                { label: "Why Us", to: "/why-us" },
                                { label: "Contact", to: "/contact-us" },
                            ].map((link) => (
                                <Link
                                    key={link.label}
                                    to={link.to}
                                    className="text-xs font-semibold text-gray-400 hover:text-(--my-green) transition-colors duration-200 px-4 py-2 rounded-xl border border-white/10 hover:border-(--my-green)/40"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom curve */}
            <div className="absolute bottom-0 left-0 right-0 pointer-events-none leading-none">
                <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
                    className="block w-full h-8 md:h-12">
                    <path d="M0,0 Q720,60 1440,0 L1440,60 L0,60 Z" fill="white" fillOpacity="0.03" />
                </svg>
            </div>
        </div>
    );
};

export default NotFoundPage;