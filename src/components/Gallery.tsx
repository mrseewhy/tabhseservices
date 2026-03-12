import { useState, useEffect, useCallback } from "react";

const images = [
    { src: "/img/gallery/1.jpeg", alt: "TAB HSE Services - Gallery 1" },
    { src: "/img/gallery/2.jpeg", alt: "TAB HSE Services - Gallery 2" },
    { src: "/img/gallery/3.jpeg", alt: "TAB HSE Services - Gallery 3" },
    { src: "/img/gallery/4.jpeg", alt: "TAB HSE Services - Gallery 4" },
    { src: "/img/gallery/5.jpeg", alt: "TAB HSE Services - Gallery 5" },
    { src: "/img/gallery/6.jpeg", alt: "TAB HSE Services - Gallery 6" },
    // { src: "/img/gallery/gallery-7.jpg", alt: "TAB HSE Services - Gallery 7" },
    // { src: "/img/gallery/gallery-8.jpg", alt: "TAB HSE Services - Gallery 8" },
];

const Gallery = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const isOpen = activeIndex !== null;

    const openImage = (index: number) => setActiveIndex(index);
    const closeImage = () => setActiveIndex(null);

    const prev = useCallback(() => {
        if (activeIndex === null) return;
        setActiveIndex((activeIndex - 1 + images.length) % images.length);
    }, [activeIndex]);

    const next = useCallback(() => {
        if (activeIndex === null) return;
        setActiveIndex((activeIndex + 1) % images.length);
    }, [activeIndex]);

    // Keyboard navigation
    useEffect(() => {
        if (!isOpen) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
            if (e.key === "Escape") closeImage();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [isOpen, prev, next]);

    // Lock body scroll when lightbox is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <section className="bg-white mt-24 py-4">
            <div className="container">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-start gap-4 md:items-end justify-between mb-12">
                    <div>
                        <h5 className="text-lg font-semibold uppercase tracking-wide text-(--my-purple) md:text-xl">
                            Our Gallery
                        </h5>
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
                            Moments in <span className="text-(--my-green)">Action</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 text-sm max-w-xs leading-relaxed text-left md:text-right">
                        A glimpse into our work, training sessions, and partnerships across Nigeria.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            onClick={() => openImage(index)}
                            className="relative group aspect-square overflow-hidden rounded-2xl cursor-pointer"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8" />
                                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                        <line x1="11" y1="8" x2="11" y2="14" />
                                        <line x1="8" y1="11" x2="14" y2="11" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {isOpen && activeIndex !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
                    onClick={closeImage}
                >
                    {/* Close button */}
                    <button
                        onClick={closeImage}
                        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200 border border-white/20"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {/* Prev button */}
                    <button
                        onClick={(e) => { e.stopPropagation(); prev(); }}
                        className="absolute left-3 md:left-6 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200 border border-white/20"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>

                    {/* Image */}
                    <div
                        className="relative max-w-4xl w-full mx-16 md:mx-24"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={images[activeIndex].src}
                            alt={images[activeIndex].alt}
                            className="w-full max-h-[80vh] object-contain rounded-2xl"
                        />

                        {/* Counter + thumbnail strip */}
                        <div className="mt-4 flex flex-col items-center gap-3">

                            {/* Counter */}
                            <p className="text-white/60 text-xs font-semibold tracking-widest uppercase">
                                {activeIndex + 1} / {images.length}
                            </p>

                            {/* Thumbnail strip */}
                            <div className="flex gap-2 overflow-x-auto pb-1 max-w-full px-2">
                                {images.map((img, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveIndex(i)}
                                        className={`shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${i === activeIndex
                                            ? "border-(--my-green) opacity-100"
                                            : "border-transparent opacity-50 hover:opacity-80"
                                            }`}
                                    >
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Next button */}
                    <button
                        onClick={(e) => { e.stopPropagation(); next(); }}
                        className="absolute right-3 md:right-6 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200 border border-white/20"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>
                </div>
            )}
        </section>
    );
};

export default Gallery;