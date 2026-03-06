
// export default Clients;
import { useEffect, useRef, useState } from "react"

const Clients = () => {
    const logos = [
        { src: "/img/tab-1.png", alt: "Client 1" },
        { src: "/img/tab-2.png", alt: "Client 2" },
        { src: "/img/tab-3.png", alt: "Client 3" },
        { src: "/img/tab-4.png", alt: "Client 4" },
    ]

    const trackRef = useRef<HTMLDivElement>(null)
    const [paused, setPaused] = useState(false)
    const currentIndex = useRef(0)
    const isAnimating = useRef(false)

    useEffect(() => {
        const track = trackRef.current
        if (!track) return

        // Width of one logo card (including margin)
        const step = () => track.scrollWidth / (logos.length * 2)

        const slideToNext = () => {
            if (paused || isAnimating.current) return
            isAnimating.current = true

            currentIndex.current += 1

            // If we've gone through all original logos, reset silently to 0
            if (currentIndex.current >= logos.length) {
                // slide to the duplicate position first
                track.style.transition = `transform 700ms cubic-bezier(0.4, 0, 0.2, 1)`
                track.style.transform = `translateX(-${currentIndex.current * step()}px)`

                setTimeout(() => {
                    // instant reset to start (no transition)
                    track.style.transition = "none"
                    currentIndex.current = 0
                    track.style.transform = `translateX(0px)`

                    setTimeout(() => {
                        isAnimating.current = false
                    }, 50)
                }, 750)
            } else {
                track.style.transition = `transform 700ms cubic-bezier(0.4, 0, 0.2, 1)`
                track.style.transform = `translateX(-${currentIndex.current * step()}px)`

                setTimeout(() => {
                    isAnimating.current = false
                }, 750)
            }
        }

        // Pause between slides
        const PAUSE = 2000 // ms between each slide

        const interval = setInterval(() => {
            if (!paused) slideToNext()
        }, PAUSE + 700)

        return () => clearInterval(interval)
    }, [paused, logos.length])

    return (
        <section className="py-10 bg-white px-8">
            <div className="container overflow-hidden">
                <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-800 mb-8">
                    Trusted By
                </h2>

                <div
                    className="relative"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    <div
                        ref={trackRef}
                        className="flex whitespace-nowrap will-change-transform"
                        style={{ transform: "translateX(0px)" }}
                    >
                        {/* Original set */}
                        {logos.map((logo, idx) => (
                            <div key={idx} className="shrink-0 mx-8 sm:mx-10 md:mx-14 lg:mx-20">
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-14 sm:h-16 md:h-20 w-auto object-contain"
                                    loading="lazy"
                                />
                            </div>
                        ))}

                        {/* Duplicate set for seamless reset */}
                        {logos.map((logo, idx) => (
                            <div key={`dup-${idx}`} className="shrink-0 mx-8 sm:mx-10 md:mx-14 lg:mx-20">
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-14 sm:h-16 md:h-20 w-auto object-contain"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Clients