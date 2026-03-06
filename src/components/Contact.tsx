// import LinkButton from "./LinkButton"

// const Contact = () => {
//     return (
//         <div className="mt-24 bg-white">
//             <div className="container">
//                 <div className="flex items-center justify-center gap-12">
//                     <div className="w-1/2 border border-gray-100 p-6 rounded-3xl h-[700px] flex items-center justify-center">
//                         <img src="/img/talk.jpg" className="rounded-3xl h-[650px] w-full object-cover object-top" />
//                     </div>
//                     <div className="w-1/2">
//                         <div className="">
//                             <h5 className="text-lg font-semibold uppercase tracking-wide text-(--my-purple) md:text-xl">
//                                 Get In Touch
//                             </h5>
//                             <h2 className=" text-3xl font-bold  text-gray-900 sm:text-4xl md:text-5xl">Ready to Elevate
//                                 Your <span className="text-(--my-green) block">HSE Standards?  </span></h2>

//                             <p className="mt-4">Whether you need a consultation, a quote, or simply want to understand how we can help protect your people and your operations — we'd love to hear from you. Reach out through any of the channels below.</p>
//                         </div>
//                         <div className="mt-6 flex flex-col gap-3">
//                             <div className="flex gap-4 items-center bg-[#fdf6fd] hover:bg-[#feedfe] rounded-lg p-2">
//                                 <div className="h-12 w-12 flex items-center justify-center bg-[#ffbbff] rounded-lg text-(--my-purple)"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call-icon lucide-phone-call"><path d="M13 2a9 9 0 0 1 9 9" /><path d="M13 6a5 5 0 0 1 5 5" /><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg></div>
//                                 <div className="flex flex-col">
//                                     <h4 className="text-xl font-bold">Phone</h4>
//                                     <p className="text-sm"><a href="tel:+2348127107336" target="_blank">+234 812 710 7336</a> </p>
//                                 </div>
//                             </div>
//                             <div className="flex gap-4 items-center bg-[#fdf6fd] hover:bg-[#feedfe] rounded-lg p-2">
//                                 <div className="h-12 w-12 flex items-center justify-center bg-[#ffbbff] rounded-lg text-(--my-purple)">
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
//                                 </div>
//                                 <div className="flex flex-col">
//                                     <h4 className="text-xl font-bold">Email</h4>
//                                     <p className="text-sm"><a href="mailto:tabhseservices@gmail.com" target="_blank">tabhseservices@gmail.com</a> </p>
//                                 </div>
//                             </div>
//                             <div className="flex gap-4 items-center bg-[#fdf6fd] hover:bg-[#feedfe] rounded-lg p-2">
//                                 <div className="h-12 w-12 flex items-center justify-center bg-[#ffbbff] rounded-lg text-(--my-purple)">
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
//                                 </div>
//                                 <div className="flex flex-col">
//                                     <h4 className="text-xl font-bold">Office</h4>
//                                     <p className="text-sm"><a href="https://maps.google.com/?q=Enahoro+Housing+Estate+Ogba+Lagos" target="_blank">Enahoro Housing Estate, Ogba, Lagos State.</a> </p>
//                                 </div>
//                             </div>
//                             <div className="flex gap-4 items-center bg-[#fdf6fd] hover:bg-[#feedfe] rounded-lg p-2">
//                                 <div className="h-12 w-12 flex items-center justify-center bg-[#ffbbff] rounded-lg text-(--my-purple)"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg></div>
//                                 <div className="flex flex-col">
//                                     <h4 className="text-xl font-bold">Linkedin</h4>
//                                     <p className="text-sm"><a href="https://www.linkedin.com/company/tab-hse-services" target="_blank">TAB HSE Services</a> </p>
//                                 </div>
//                             </div>
//                             <div className="mt-5">
//                                 <LinkButton
//                                     color="bg-(--my-green) text-white hover:bg-green-700"
//                                     to="/"
//                                     children="Send us a message"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>

//         </div>
//     )
// }

// export default Contact

import LinkButton from "./LinkButton"

const Contact = () => {
    return (
        <div className="mt-24 bg-white">
            <div className="container ">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
                    {/* Image - hidden on mobile, shown on lg+ */}
                    <div className="flex w-full lg:w-1/2 border border-gray-100 p-6 rounded-3xl h-[700px] items-center justify-center rounded-tr-[250px]">
                        <img src="/img/talk.jpg" className="rounded-3xl h-[650px] w-full object-cover object-top rounded-tr-[250px]" />
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2">
                        <div>
                            <h5 className="text-lg font-semibold uppercase tracking-wide text-(--my-purple) md:text-xl">
                                Get In Touch
                            </h5>
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
                                Ready to Elevate Your{" "}
                                <span className="text-(--my-green) block">HSE Standards?</span>
                            </h2>
                            <p className="mt-4 text-gray-600 text-sm sm:text-base">
                                Whether you need a consultation, a quote, or simply want to understand how we can help protect your people and your operations — we'd love to hear from you. Reach out through any of the channels below.
                            </p>
                        </div>

                        <div className="mt-6 flex flex-col gap-3">
                            {/* Phone */}
                            <div className="flex gap-4 items-center bg-[#fdf6fd] hover:bg-[#feedfe] rounded-lg p-3 sm:p-2 transition-colors">
                                <div className="h-12 w-12  flex items-center justify-center bg-[#ffbbff] rounded-lg text-(--my-purple)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M13 2a9 9 0 0 1 9 9" /><path d="M13 6a5 5 0 0 1 5 5" />
                                        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                                    </svg>
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <h4 className="text-base sm:text-xl font-bold">Phone</h4>
                                    <p className="text-sm truncate"><a href="tel:+2348127107336" target="_blank">+234 812 710 7336</a></p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex gap-4 items-center bg-[#fdf6fd] hover:bg-[#feedfe] rounded-lg p-3 sm:p-2 transition-colors">
                                <div className="h-12 w-12  flex items-center justify-center bg-[#ffbbff] rounded-lg text-(--my-purple)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" />
                                    </svg>
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <h4 className="text-base sm:text-xl font-bold">Email</h4>
                                    <p className="text-sm truncate"><a href="mailto:info@tabhseservices.com" target="_blank">info@tabhseservices.com</a></p>
                                </div>
                            </div>

                            {/* Office */}
                            <div className="flex gap-4 items-center bg-[#fdf6fd] hover:bg-[#feedfe] rounded-lg p-3 sm:p-2 transition-colors">
                                <div className="h-12 w-12  flex items-center justify-center bg-[#ffbbff] rounded-lg text-(--my-purple)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <h4 className="text-base sm:text-xl font-bold">Office</h4>
                                    <p className="text-sm"><a href="https://maps.google.com/?q=Enahoro+Housing+Estate+Ogba+Lagos" target="_blank">Enahoro Housing Estate, Ogba, Lagos State.</a></p>
                                </div>
                            </div>

                            {/* LinkedIn */}
                            <div className="flex gap-4 items-center bg-[#fdf6fd] hover:bg-[#feedfe] rounded-lg p-3 sm:p-2 transition-colors">
                                <div className="h-12 w-12  flex items-center justify-center bg-[#ffbbff] rounded-lg text-(--my-purple)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
                                    </svg>
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <h4 className="text-base sm:text-xl font-bold">LinkedIn</h4>
                                    <p className="text-sm truncate"><a href="https://www.linkedin.com/company/tab-hse-services" target="_blank">TAB HSE Services</a></p>
                                </div>
                            </div>

                            <div className="mt-5">
                                <LinkButton
                                    color="bg-(--my-green) text-white hover:bg-green-700"
                                    to="/contact-us"
                                    children="Send us a message"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact