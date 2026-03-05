import { Link } from "react-router-dom"
import ServiceCard from "./ServiceCard";
const services = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb-icon lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>,
        title: "Consultancy Services",
        description: "Expert guidance on HSE policy, safety systems, audits, hazard assessments, Project Safety Management, HSE Manpower Supply and incident management to ensure compliance and operational safety."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>,
        title: "Environmental Sustainability",
        description: "Assessments, strategies, and audits focused on environmental impact, waste management, carbon reduction, and sustainable practices."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap-icon lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></svg>,
        title: "Training Services",
        description: "Impactful programs in HSE, emergency response, ISO standards, quality management, and specialized topics like waste recycling for all levels."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>,
        title: "Commercial/Procurement",
        description: "Supply of high-quality PPE, safety signage, fire equipment, first aid tools, and security systems like CCTV and scanners."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wrench-icon lucide-wrench"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" /></svg>,
        title: "Technical Services",
        description: "Procurement and installation of fire systems, security integrations, sensors, and emergency evacuation plans."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings-icon lucide-settings"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" /><circle cx="12" cy="12" r="3" /></svg>,
        title: "Management Systems",
        description: "Development, implementation, training, and certification for ISO standards (45001, 14001, 9001, 41001) in health, safety, environment, and quality."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building-icon lucide-building"><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M12 6h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M16 6h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" /><path d="M8 6h.01" /><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" /><rect x="4" y="2" width="16" height="20" rx="2" /></svg>,
        title: "Facilities Management",
        description: "Cleaning, safety inspections, maintenance items procurement, energy audits with IoT integration, and overall facility safety management."
    }
];

const Services = () => {
    return (
        <div className="bg-white mt-24">
            <div className="container">
                <div className="flex flex-col md:flex-row items-start gap-6 md:items-end justify-between">
                    <div>
                        <h5 className="text-lg font-semibold uppercase tracking-wide text-(--my-purple) md:text-xl">
                            Our Services
                        </h5>
                        <h2 className=" text-3xl font-bold  text-gray-900 sm:text-4xl md:text-5xl">Comprehensive  <span className="text-(--my-green)">HSE Solutions</span></h2>
                    </div>

                    <Link to={"/services"}> <span className="text-(--my-purple) font-semibold text-sm">View Services &darr;</span></Link>

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                    {services.map((service, index) => {
                        return (
                            <div key={index + service.title} className="">
                                <ServiceCard title={service.title} description={service.description} icon={service.icon} />
                            </div>
                        )
                    })

                    }


                </div>
            </div>
        </div>
    )
}

export default Services