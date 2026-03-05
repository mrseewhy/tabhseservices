// import LinkButton from "../components/LinkButton";

// const services = [
//     {
//         accent: "purple",
//         icon: (
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
//                 <polyline points="14 2 14 8 20 8" />
//                 <line x1="16" y1="13" x2="8" y2="13" />
//                 <line x1="16" y1="17" x2="8" y2="17" />
//                 <polyline points="10 9 9 9 8 9" />
//             </svg>
//         ),
//         title: "Consultancy Services",
//         description: "Strategic HSE guidance tailored to your organisation's needs — from policy to practice.",
//         items: [
//             "HSE policy formulation and integration",
//             "Corporate representation and counselling",
//             "Safety management system setup and integration",
//             "HSE manual development and pocketbook publications",
//             "Project Safety and Personnel Management",
//             "Workplace Hazard Assessments",
//             "Occupational Health and Safety (OHS) Compliance Audits",
//             "Emergency Response and Preparedness Planning",
//             "Incident Investigation and Reporting",
//         ],
//     },
//     {
//         accent: "green",
//         icon: (
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//             </svg>
//         ),
//         title: "Environmental Sustainability Services",
//         description: "Comprehensive environmental solutions that protect ecosystems and drive sustainable operations.",
//         items: [
//             "Environmental Impact Assessments (EIA)",
//             "Environmental Study",
//             "Sustainability Strategy Development",
//             "Waste Management Consulting",
//             "Carbon Footprint Analysis and Emission Reduction Planning",
//             "Environmental Compliance Audits",
//         ],
//     },
//     {
//         accent: "purple",
//         icon: (
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//                 <circle cx="9" cy="7" r="4" />
//                 <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
//                 <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//             </svg>
//         ),
//         title: "Training Services",
//         description: "Impactful, practical training programs designed to build competence at every level of your organisation.",
//         items: [
//             "General Health, Safety & Environment (officer, supervisor and management levels)",
//             "Emergency preparedness/response training (Fire safety, First aid etc.)",
//             "Environmental Impact Assessment (EIA)",
//             "Environmental Study",
//             "Sustainability Strategy Development",
//             "Environmental Management System ISO 14001",
//             "Quality Assurance, Quality Control and Project Management",
//             "Specialized training to suit company mode of operations",
//             "Waste Management, Recycling and Upcycling specialized trainings",
//         ],
//     },
//     {
//         accent: "green",
//         icon: (
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
//                 <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
//             </svg>
//         ),
//         title: "Commercial / Procurement Services",
//         description: "High-quality supply and procurement of safety equipment, tools, signage, and security systems.",
//         items: [
//             "Personal Protective Equipment (PPE): safety footwear, hard hats, goggles, earmuffs, hand gloves, aprons, respirators, etc.",
//             "Safety Books, Posters, Stickers, Banners and Customized Safety Signages",
//             "Standardized signage",
//             "Fire prevention and fighting gadgets and equipment",
//             "First aid tools",
//             "Security systems: CCTV, Network Slammers, Metal Detector Scanners, etc.",
//         ],
//     },
//     {
//         accent: "purple",
//         icon: (
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <circle cx="12" cy="12" r="3" />
//                 <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
//                 <path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
//             </svg>
//         ),
//         title: "Technical Services",
//         description: "End-to-end procurement, installation, and integration of fire, security, and emergency systems.",
//         items: [
//             "Procurement and Installation of Fire Systems: Smoke detectors, Fire Alarms, Fire Pumps and Hydrant systems, FM200, Portable and Automatic Extinguishers",
//             "Procurement and Installation of Security Systems, Sensors, Doors, IOT Integration",
//             "Emergency Evacuation and Response Plan Technical Services",
//         ],
//     },
//     {
//         accent: "green",
//         icon: (
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
//             </svg>
//         ),
//         title: "Management Systems Services",
//         description: "Development, implementation, and integration of internationally recognised management standards.",
//         items: [
//             "Development of Management Systems (ISO 45001, ISO 14001, ISO 9001 & ISO 41001)",
//             "Implementation and Integration of Management Standards",
//             "Training and Certification Programs for ISO Management Systems",
//         ],
//     },
//     {
//         accent: "purple",
//         icon: (
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
//                 <polyline points="9 22 9 12 15 12 15 22" />
//             </svg>
//         ),
//         title: "Facilities Management Services",
//         description: "Complete facility safety, maintenance, and personnel management solutions for your workspace.",
//         items: [
//             "Basic cleaning and industrial cleaning services",
//             "Facility Safety Inspection and Audits",
//             "Procurement of facility maintenance equipment and materials",
//             "Personnel management",
//             "Energy Efficiency & Management (Audits & IoT integration)",
//             "General Facility Safety Management",
//         ],
//     },
// ];

// const Services = () => {
//     return (
//         <div className="bg-white">

//             {/* ── Intro ── */}
//             <section className="py-16 md:py-20">
//                 <div className="container">
//                     <div className="max-w-3xl mx-auto text-center">
//                         <span className="text-(--my-green) text-xs font-bold tracking-widest uppercase">
//                             What We Offer
//                         </span>
//                         <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl leading-tight">
//                             A Full Suite of{" "}
//                             <span className="text-(--my-green)">HSE</span> &{" "}
//                             <span className="text-(--my-purple)">Sustainability</span> Solutions
//                         </h2>
//                         <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-(--my-purple)" />
//                         <p className="mt-6 text-gray-600 text-sm leading-relaxed">
//                             TAB HSE Services provides a comprehensive suite of Health, Safety,
//                             Environmental and Sustainability services designed to help organisations
//                             maintain compliance, protect employees, and minimise environmental impact.
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             {/* ── Services grid ── */}
//             <section className="pb-20">
//                 <div className="container">
//                     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//                         {services.map((s) => {
//                             const isPurple = s.accent === "purple";
//                             return (
//                                 <div
//                                     key={s.title}
//                                     className={`rounded-2xl border p-7 flex flex-col hover:-translate-y-1 transition-transform duration-300 ${isPurple
//                                         ? "bg-(--my-purple)/10 border-(--my-purple)/20"
//                                         : "bg-(--my-green)/10 border-(--my-green)/20"
//                                         }`}
//                                 >
//                                     {/* Icon + Title */}
//                                     <div className="flex items-center gap-4 mb-4">
//                                         <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isPurple
//                                             ? "bg-(--my-purple)/20 text-(--my-purple)"
//                                             : "bg-(--my-green)/20 text-(--my-green)"
//                                             }`}>
//                                             {s.icon}
//                                         </div>
//                                         <h3 className="text-gray-900 font-bold text-base leading-snug">
//                                             {s.title}
//                                         </h3>
//                                     </div>

//                                     {/* Description */}
//                                     <p className="text-gray-500 text-sm leading-relaxed mb-5">
//                                         {s.description}
//                                     </p>

//                                     {/* Divider */}
//                                     <div className={`h-px w-full mb-5 ${isPurple ? "bg-(--my-purple)/20" : "bg-(--my-green)/20"
//                                         }`} />

//                                     {/* Micro services list */}
//                                     <ul className="flex flex-col gap-2 flex-1">
//                                         {s.items.map((item) => (
//                                             <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
//                                                 <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${isPurple ? "bg-(--my-purple)" : "bg-(--my-green)"
//                                                     }`} />
//                                                 {item}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>

//             {/* ── CTA ── */}
//             <section className="relative py-16 md:py-24 overflow-hidden bg-linear-to-br from-black via-[#0b0f1f] to-[#0f172a]">

//                 {/* Dot grid */}
//                 <div
//                     className="absolute inset-0 opacity-10 pointer-events-none"
//                     style={{
//                         backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
//                         backgroundSize: "28px 28px",
//                     }}
//                 />

//                 <div className="relative container">
//                     <div className="max-w-2xl mx-auto text-center">
//                         <span className="text-(--my-green) text-xs font-bold tracking-widest uppercase">
//                             Get Started
//                         </span>
//                         <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl leading-tight">
//                             Not Sure Where{" "}
//                             <span className="text-(--my-green)">to Start</span>?
//                         </h2>
//                         <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-(--my-purple)" />
//                         <p className="mt-6 text-gray-300 text-sm leading-relaxed">
//                             Our team will walk you through the right services for your organisation's
//                             needs. Schedule a free consultation and let's find the best path forward together.
//                         </p>
//                         <div className="mt-8 flex flex-wrap gap-4 justify-center">
//                             <LinkButton
//                                 color="bg-(--my-green) text-white hover:bg-green-700"
//                                 to="/contact-us"
//                                 children="Schedule Consultation →"
//                             />
//                             <LinkButton
//                                 color="bg-white/10 text-white hover:bg-white/20"
//                                 to="/why-us"
//                                 children="Why TAB HSE"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Services;


import LinkButton from "../components/LinkButton";

const services = [
    {
        accent: "purple",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
            </svg>
        ),
        title: "Consultancy Services",
        description: "Strategic HSE guidance tailored to your organisation's needs — from policy to practice.",
        items: [
            "HSE policy formulation and integration",
            "Corporate representation and counselling",
            "Safety management system setup and integration",
            "HSE manual development and pocketbook publications",
            "Project Safety and Personnel Management",
            "Workplace Hazard Assessments",
            "Occupational Health and Safety (OHS) Compliance Audits",
            "Emergency Response and Preparedness Planning",
            "Incident Investigation and Reporting",
        ],
    },
    {
        accent: "green",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: "Environmental Sustainability Services",
        description: "Comprehensive environmental solutions that protect ecosystems and drive sustainable operations.",
        items: [
            "Environmental Impact Assessments (EIA)",
            "Environmental Study",
            "Sustainability Strategy Development",
            "Waste Management Consulting",
            "Carbon Footprint Analysis and Emission Reduction Planning",
            "Environmental Compliance Audits",
        ],
    },
    {
        accent: "purple",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        title: "Training Services",
        description: "Impactful, practical training programs designed to build competence at every level of your organisation.",
        items: [
            "General Health, Safety & Environment (officer, supervisor and management levels)",
            "Emergency preparedness/response training (Fire safety, First aid etc.)",
            "Environmental Impact Assessment (EIA)",
            "Environmental Study",
            "Sustainability Strategy Development",
            "Environmental Management System ISO 14001",
            "Quality Assurance, Quality Control and Project Management",
            "Specialized training to suit company mode of operations",
            "Waste Management, Recycling and Upcycling specialized trainings",
        ],
    },
    {
        accent: "green",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
        ),
        title: "Commercial / Procurement Services",
        description: "High-quality supply and procurement of safety equipment, tools, signage, and security systems.",
        items: [
            "Personal Protective Equipment (PPE): safety footwear, hard hats, goggles, earmuffs, hand gloves, aprons, respirators, etc.",
            "Safety Books, Posters, Stickers, Banners and Customized Safety Signages",
            "Standardized signage",
            "Fire prevention and fighting gadgets and equipment",
            "First aid tools",
            "Security systems: CCTV, Network Slammers, Metal Detector Scanners, etc.",
        ],
    },
    {
        accent: "purple",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                <path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
            </svg>
        ),
        title: "Technical Services",
        description: "End-to-end procurement, installation, and integration of fire, security, and emergency systems.",
        items: [
            "Procurement and Installation of Fire Systems: Smoke detectors, Fire Alarms, Fire Pumps and Hydrant systems, FM200, Portable and Automatic Extinguishers",
            "Procurement and Installation of Security Systems, Sensors, Doors, IOT Integration",
            "Emergency Evacuation and Response Plan Technical Services",
        ],
    },
    {
        accent: "green",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
        title: "Management Systems Services",
        description: "Development, implementation, and integration of internationally recognised management standards.",
        items: [
            "Development of Management Systems (ISO 45001, ISO 14001, ISO 9001 & ISO 41001)",
            "Implementation and Integration of Management Standards",
            "Training and Certification Programs for ISO Management Systems",
        ],
    },
    {
        accent: "purple",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
        title: "Facilities Management Services",
        description: "Complete facility safety, maintenance, and personnel management solutions for your workspace.",
        items: [
            "Basic cleaning and industrial cleaning services",
            "Facility Safety Inspection and Audits",
            "Procurement of facility maintenance equipment and materials",
            "Personnel management",
            "Energy Efficiency & Management (Audits & IoT integration)",
            "General Facility Safety Management",
        ],
    },
];

const ServicesPage = () => {
    return (
        <div className="bg-white">

            {/* ── Intro ── */}
            <section className="py-16 md:py-20">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="text-(--my-green) text-xs font-bold tracking-widest uppercase">
                            What We Offer
                        </span>
                        <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl leading-tight">
                            A Full Suite of{" "}
                            <span className="text-(--my-green)">HSE</span> &{" "}
                            <span className="text-(--my-purple)">Sustainability</span> Solutions
                        </h2>
                        <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-(--my-purple)" />
                        <p className="mt-6 text-gray-600 text-sm leading-relaxed">
                            TAB HSE Services provides a comprehensive suite of Health, Safety,
                            Environmental and Sustainability services designed to help organisations
                            maintain compliance, protect employees, and minimise environmental impact.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Services grid ── */}
            <section className="pb-20">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {services.map((s) => {
                            const isPurple = s.accent === "purple";
                            return (
                                <div
                                    key={s.title}
                                    className={`rounded-2xl border p-7 flex flex-col hover:-translate-y-1 transition-transform duration-300 ${isPurple
                                        ? "bg-(--my-purple)/10 border-(--my-purple)/20"
                                        : "bg-(--my-green)/10 border-(--my-green)/20"
                                        }`}
                                >
                                    {/* Icon + Title */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isPurple
                                            ? "bg-(--my-purple)/20 text-(--my-purple)"
                                            : "bg-(--my-green)/20 text-(--my-green)"
                                            }`}>
                                            {s.icon}
                                        </div>
                                        <h3 className="text-gray-900 font-bold text-base leading-snug">
                                            {s.title}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-500 text-sm leading-relaxed mb-5">
                                        {s.description}
                                    </p>

                                    {/* Divider */}
                                    <div className={`h-px w-full mb-5 ${isPurple ? "bg-(--my-purple)/20" : "bg-(--my-green)/20"
                                        }`} />

                                    {/* Micro services list */}
                                    <ul className="flex flex-col gap-2 flex-1">
                                        {s.items.map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                                                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${isPurple ? "bg-(--my-purple)" : "bg-(--my-green)"
                                                    }`} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="relative py-16 md:py-24 overflow-hidden bg-white">

                {/* Dot grid */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: "radial-gradient(circle, #7B2D8B 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                        opacity: 0.06,
                    }}
                />

                <div className="relative container">
                    <div className="max-w-2xl mx-auto text-center">
                        <span className="text-(--my-green) text-xs font-bold tracking-widest uppercase">
                            Get Started
                        </span>
                        <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl leading-tight">
                            Not Sure Where{" "}
                            <span className="text-(--my-green)">to Start</span>?
                        </h2>
                        <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-(--my-purple)" />
                        <p className="mt-6 text-gray-600 text-sm leading-relaxed">
                            Our team will walk you through the right services for your organisation's
                            needs. Schedule a free consultation and let's find the best path forward together.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4 justify-center">
                            <LinkButton
                                color="bg-(--my-green) text-white hover:bg-green-700"
                                to="/contact-us"
                                children="Schedule Consultation →"
                            />
                            <LinkButton
                                color="bg-gray-900 text-white hover:bg-gray-700"
                                to="/why-us"
                                children="Why TAB HSE"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;