import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"

interface NavItem {
    url: string
    name: string
}

const navItems: NavItem[] = [
    { url: "/", name: "Home" },
    { url: "/about-us", name: "About Us" },
    { url: "/services", name: "Services" },
    { url: "/why-us", name: "Why Us" },
    { url: "/contact-us", name: "Contact Us" },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsOpen(false)
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <nav className="bg-white sticky top-0 z-50 border-b border-(--my-green)">
            <div className="container relative">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <NavLink to="/" className="shrink-0">
                        <img src="/img/logo.png" alt="TAB HSE Services" className="h-14" />
                    </NavLink>

                    {/* Desktop Nav — centered absolutely */}
                    <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    to={item.url}
                                    className={({ isActive }) =>
                                        `relative font-semibold text-sm transition-colors duration-200 pb-1
                                        after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#00A651]
                                        after:transition-all after:duration-300
                                        ${isActive
                                            ? "text-[#00A651] after:w-full"
                                            : "text-gray-700 hover:text-[#00A651] after:w-0 hover:after:w-full"
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Right side: CTA + Hamburger */}
                    <div className="flex items-center gap-3">
                        <NavLink
                            to="/contact-us"
                            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00A651] text-white text-sm font-semibold hover:bg-[#008a44] transition-colors duration-200 shadow-sm"
                        >
                            Schedule Consultation
                            <span className="text-base leading-none">→</span>
                        </NavLink>

                        {/* Hamburger */}
                        <button
                            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"}`}>
                <ul className="flex flex-col px-6 py-4 gap-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <NavLink
                                to={item.url}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `block py-2.5 px-3 rounded-md font-semibold text-sm transition-colors duration-200 ${isActive
                                        ? "text-[#00A651] bg-green-50 border-l-2 border-[#00A651]"
                                        : "text-gray-700 hover:text-[#00A651] hover:bg-green-50"
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                    <li className="pt-3">
                        <NavLink
                            to="/contact-us"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#00A651] text-white text-sm font-semibold hover:bg-[#008a44] transition-colors duration-200"
                        >
                            Schedule Consultation →
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar