import { useState } from "react";
import PageHeader from "../components/PageHeader";

const serviceOptions = [
    "Consultancy Services",
    "Environmental Sustainability Services",
    "Training Services",
    "Commercial / Procurement Services",
    "Technical Services",
    "Management Systems Services",
    "Facilities Management Services",
];

const contactDetails = [
    {
        accent: "purple",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2a9 9 0 0 1 9 9" />
                <path d="M13 6a5 5 0 0 1 5 5" />
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
            </svg>
        ),
        label: "Phone",
        value: "+234 812 710 7336",
        href: "tel:+2348127107336",
    },
    {
        accent: "green",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
        ),
        label: "Email",
        value: "tabhseservices@gmail.com",
        href: "mailto:tabhseservices@gmail.com",
    },
    {
        accent: "purple",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
        label: "Office",
        value: "Enahoro Housing Estate, Ogba, Lagos State.",
        href: "https://maps.google.com/?q=Enahoro+Housing+Estate+Ogba+Lagos",
    },
    {
        accent: "green",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
        label: "LinkedIn",
        value: "TAB HSE Services",
        href: "https://www.linkedin.com/company/tab-hse-services",
    },
];

type Purpose = "inquire" | "project" | "";

const ContactPage = () => {
    const [purpose, setPurpose] = useState<Purpose>("");
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        purpose: "" as Purpose,
        service: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (name === "purpose") setPurpose(value as Purpose);
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const inputClass =
        "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-(--my-purple) focus:bg-white transition-colors duration-200";

    const labelClass = "block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5";

    return (
        <div className="bg-white">

            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">

                        {/* ── Left — contact info ── */}
                        <div className="lg:w-5/12 xl:w-4/12">
                            <span className="text-(--my-green) text-xs font-bold tracking-widest uppercase">
                                Get In Touch
                            </span>
                            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">
                                Let's Start a{" "}
                                <span className="text-(--my-purple)">Conversation</span>
                            </h2>
                            <div className="mt-3 h-1 w-16 rounded-full bg-(--my-purple)" />
                            <p className="mt-5 text-gray-600 text-sm leading-relaxed">
                                Whether you have a question, need a consultation, or are ready to
                                start a project — our team is here to help. Reach out and we'll
                                get back to you promptly.
                            </p>

                            {/* Contact cards */}
                            <div className="mt-8 flex flex-col gap-3">
                                {contactDetails.map((c) => {
                                    const isPurple = c.accent === "purple";
                                    return (
                                        <a
                                            key={c.label}
                                            href={c.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={`flex items-center gap-4 rounded-2xl border p-4 hover:-translate-y-0.5 transition-transform duration-200 ${isPurple
                                                ? "bg-(--my-purple)/10 border-(--my-purple)/20"
                                                : "bg-(--my-green)/10 border-(--my-green)/20"
                                                }`}
                                        >
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isPurple
                                                ? "bg-(--my-purple)/20 text-(--my-purple)"
                                                : "bg-(--my-green)/20 text-(--my-green)"
                                                }`}>
                                                {c.icon}
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                                    {c.label}
                                                </p>
                                                <p className="text-sm font-semibold text-gray-800 truncate">
                                                    {c.value}
                                                </p>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* ── Right — form ── */}
                        <div className="lg:w-7/12 xl:w-8/12">
                            <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-8 md:p-10">

                                {submitted ? (
                                    /* Success state */
                                    <div className="flex flex-col items-center justify-center py-16 text-center">
                                        <div className="w-16 h-16 rounded-full bg-(--my-green)/20 flex items-center justify-center mb-6">
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-(--my-green)">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                        <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
                                            Thank you for reaching out. Our team will review your message and get back to you shortly.
                                        </p>
                                        <button
                                            onClick={() => {
                                                setSubmitted(false);
                                                setForm({ name: "", email: "", purpose: "", service: "", message: "" });
                                                setPurpose("");
                                            }}
                                            className="mt-8 text-sm font-semibold text-(--my-purple) hover:underline"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex flex-col gap-6">

                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">Send Us a Message</h3>
                                            <p className="text-gray-500 text-sm mt-1">Fill in the form below and we'll be in touch.</p>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            {/* Name */}
                                            <div>
                                                <label className={labelClass}>Full Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    placeholder="e.g. John Doe"
                                                    className={inputClass}
                                                />
                                            </div>

                                            {/* Email */}
                                            <div>
                                                <label className={labelClass}>Email Address</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    placeholder="e.g. john@company.com"
                                                    className={inputClass}
                                                />
                                            </div>
                                        </div>

                                        {/* Purpose */}
                                        <div>
                                            <label className={labelClass}>Purpose</label>
                                            <div className="flex gap-3">
                                                {[
                                                    { value: "inquire", label: "General Inquiry" },
                                                    { value: "project", label: "Project" },
                                                ].map((opt) => (
                                                    <button
                                                        key={opt.value}
                                                        type="button"
                                                        onClick={() => {
                                                            setPurpose(opt.value as Purpose);
                                                            setForm((prev) => ({ ...prev, purpose: opt.value as Purpose, service: "" }));
                                                        }}
                                                        className={`flex-1 py-3 rounded-xl text-sm font-semibold border transition-all duration-200 ${purpose === opt.value
                                                            ? "bg-(--my-purple) border-(--my-purple) text-white"
                                                            : "bg-white border-gray-200 text-gray-600 hover:border-(--my-purple)/40"
                                                            }`}
                                                    >
                                                        {opt.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Service — only when Project is selected */}
                                        {purpose === "project" && (
                                            <div>
                                                <label className={labelClass}>Service Required</label>
                                                <div className="relative">
                                                    <select
                                                        name="service"
                                                        value={form.service}
                                                        onChange={handleChange}
                                                        className={`${inputClass} appearance-none pr-10 cursor-pointer`}
                                                    >
                                                        <option value="" disabled>Select a service...</option>
                                                        {serviceOptions.map((s) => (
                                                            <option key={s} value={s}>{s}</option>
                                                        ))}
                                                    </select>
                                                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                            <polyline points="6 9 12 15 18 9" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Message */}
                                        <div>
                                            <label className={labelClass}>Message</label>
                                            <textarea
                                                name="message"
                                                value={form.message}
                                                onChange={handleChange}
                                                rows={5}
                                                placeholder="Tell us more about how we can help you..."
                                                className={`${inputClass} resize-none`}
                                            />
                                        </div>

                                        {/* Submit */}
                                        <button
                                            onClick={handleSubmit}
                                            className="w-full sm:w-auto sm:px-12 py-3 rounded-xl bg-(--my-green) text-white text-sm font-bold hover:bg-green-700 transition-colors duration-200"
                                        >
                                            Send Message →
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;