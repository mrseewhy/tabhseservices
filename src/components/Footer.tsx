


import { Link } from "react-router-dom"
import LinkButton from "./LinkButton"

const Footer = () => {
    return (
        <div className="relative overflow-hidden bg-linear-to-br from-black via-[#0b0f1f] to-[#0f172a] text-white mt-24 pb-6 py-16">
            <div className="container ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-6">

                    {/* About */}
                    <div className="flex flex-col gap-2">
                        <h5 className="text-lg font-semibold uppercase tracking-wide text-(--my-purple) md:text-xl">
                            About Us
                        </h5>
                        <p className="text-sm text-gray-400 mb-4">Premier HSE consultancy helping organisations maintain compliance, protect people, and embed sustainable environmental responsibility across Nigeria.</p>
                        <LinkButton
                            color="bg-(--my-green) text-white hover:bg-green-700"
                            to="/contact-us"
                            children="Schedule Consultation →"
                        />
                    </div>

                    {/* Services */}
                    <div className="flex flex-col gap-2">
                        <h5 className="text-lg font-semibold uppercase tracking-wide text-(--my-purple) md:text-xl">
                            Our Services
                        </h5>
                        <ul className="text-sm text-gray-400 flex flex-col gap-2 list-disc pl-4 marker:text-(--my-green)">
                            <li>Consultancy Services</li>
                            <li>Environmental Sustainability</li>
                            <li>Training Services</li>
                            <li>Commercial / Procurement</li>
                            <li>Technical Services</li>
                            <li>Management Systems</li>
                            <li>Facilities Management</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="flex flex-col gap-2">
                        <h5 className="text-lg font-semibold uppercase tracking-wide text-(--my-purple) md:text-xl">
                            Company
                        </h5>
                        <ul className="text-sm text-gray-400 flex flex-col gap-2 list-disc pl-4 marker:text-(--my-purple)">
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/about-us"}>About Us</Link></li>
                            <li><Link to={"/services"}>Our Services</Link></li>
                            <li><Link to={"/why-us"}>Why TAB HSE</Link></li>
                            <li><Link to={"/contact-us"}>Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-2">
                        <h5 className="text-lg font-semibold uppercase tracking-wide text-(--my-purple) md:text-xl">
                            Contact
                        </h5>
                        <div className="flex flex-col">
                            {/* Phone */}
                            <div className="flex gap-3 items-center hover:bg-[#19151520] rounded-lg p-2 transition-colors">
                                <div className="h-8 w-8  flex items-center justify-center bg-[#ffbbff] rounded-lg text-(--my-purple)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M13 2a9 9 0 0 1 9 9" /><path d="M13 6a5 5 0 0 1 5 5" />
                                        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                                    </svg>
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <h4 className="text-sm font-bold">Phone</h4>
                                    <p className="text-xs truncate"><a href="tel:+2348127107336" target="_blank">+234 812 710 7336</a></p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex gap-3 items-center hover:bg-[#19151520] rounded-lg p-2 transition-colors">
                                <div className="h-8 w-8  flex items-center justify-center bg-[#ffbbff] rounded-lg text-(--my-purple)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" />
                                    </svg>
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <h4 className="text-sm font-bold">Email</h4>
                                    <p className="text-xs truncate"><a href="mailto:tabhseservices@gmail.com" target="_blank">tabhseservices@gmail.com</a></p>
                                </div>
                            </div>

                            {/* Office */}
                            <div className="flex gap-3 items-center hover:bg-[#19151520] rounded-lg p-2 transition-colors">
                                <div className="h-8 w-8  flex items-center justify-center bg-[#ffbbff] rounded-lg text-(--my-purple)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <h4 className="text-sm font-bold">Office</h4>
                                    <p className="text-xs"><a href="https://maps.google.com/?q=Enahoro+Housing+Estate+Ogba+Lagos" target="_blank">Enahoro Housing Estate, Ogba, Lagos State.</a></p>
                                </div>
                            </div>

                            {/* LinkedIn */}
                            <div className="flex gap-3 items-center hover:bg-[#19151520] rounded-lg p-2 transition-colors">
                                <div className="h-8 w-8  flex items-center justify-center bg-[#ffbbff] rounded-lg text-(--my-purple)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
                                    </svg>
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <h4 className="text-sm font-bold">LinkedIn</h4>
                                    <p className="text-xs truncate"><a href="https://www.linkedin.com/company/tab-hse-services" target="_blank">TAB HSE Services</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-gray-800 mt-4 text-center sm:text-left">
                    <p className="text-xs text-gray-400">© {new Date().getFullYear()} <Link to={"/"}>TAB HSE Services</Link>. All rights reserved.</p>
                    <p className="text-xs text-gray-400">Designed By <a href="https://bigyarddigital.com/" target="_blank">Bigyard Digital.</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer