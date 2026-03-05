
// const WhyUs = () => {
//     return (
//         <div className="mt-24 py-20 lg:py-28 overflow-hidden bg-linear-to-br from-black via-[#0b0f1f] to-[#0f172a]">
//             <div className="container">
//                 <div className="text-center">
//                     <h5 className="text-lg font-semibold uppercase tracking-wide text-(--my-purple) md:text-xl">
//                         Why Choose TAB HSE Services?
//                     </h5>
//                     <h2 className=" text-3xl font-bold  text-white sm:text-4xl md:text-5xl">What Sets Us   <span className="text-(--my-green)">Apart</span></h2>
//                 </div>
//                 <div className="mt-8">
//                     <p className="text-gray-200  max-w-4xl mx-auto text-justify lg:text-center">
//                         At TAB HSE Services, we don’t just work for you, we work with you.
//                         Our approach is rooted in true partnership, and sustaining good relationship.
//                         We are committed to walking alongside you on the journey to excellence in
//                         Health, Safety, Environment, Sustainability and Human Capacity Development.
//                         With us, you gain more than a service provider. You gain a trusted partner
//                         dedicated to achieving your goals and delivering lasting impact when you
//                         choose US.
//                     </p>
//                 </div>

//             </div>

//         </div>
//     )
// }

// export default WhyUs


const WhyUs = () => {
    return (
        <div className="relative mt-24 py-20 lg:py-28 overflow-hidden bg-linear-to-br from-black via-[#0b0f1f] to-[#0f172a]">

            {/* ── Dot grid overlay ── */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />

            <div className="relative container">
                <div className="text-center">
                    <h5 className="text-lg font-semibold uppercase tracking-wide text-(--my-purple) md:text-xl">
                        Why Choose TAB HSE Services?
                    </h5>
                    <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                        What Sets Us <span className="text-(--my-green)">Apart</span>
                    </h2>
                </div>
                <div className="mt-8">
                    <p className="text-gray-200 max-w-4xl mx-auto text-justify lg:text-center">
                        At TAB HSE Services, we don't just work for you, we work with you.
                        Our approach is rooted in true partnership, and sustaining good relationship.
                        We are committed to walking alongside you on the journey to excellence in
                        Health, Safety, Environment, Sustainability and Human Capacity Development.
                        With us, you gain more than a service provider. You gain a trusted partner
                        dedicated to achieving your goals and delivering lasting impact when you
                        choose US.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default WhyUs