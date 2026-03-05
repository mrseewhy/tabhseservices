
// const PageHeader = ({ title }: { title: string }) => {
//     return (
//         <div className="h-36 md:h-52 overflow-hidden bg-linear-to-br from-black via-[#0b0f1f] to-[#0f172a]">
//             <div className="container h-full">
//                 <div className="flex flex-col justify-center items-center h-full">
//                     <h2 className=" text-3xl font-bold  text-white sm:text-4xl md:text-5xl">
//                         {title}
//                     </h2>
//                     <div className=" mt-2 h-1 w-32 bg-linear-to-r from-(--my-green) to-(--my-purple)" />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default PageHeader

const PageHeader = ({ title }: { title: string }) => {
    return (
        <div className="relative w-full h-48 md:h-64 lg:h-72 overflow-hidden bg-linear-to-br from-black via-[#0b0f1f] to-[#0f172a]">

            {/* Decorative blurred orbs */}
            <div className="absolute -top-10 -left-10 w-56 h-56 rounded-full bg-purple-700 opacity-20 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-green-600 opacity-20 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 rounded-full bg-purple-900 opacity-10 blur-2xl" />

            {/* Subtle dot grid overlay */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />

            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-purple-500 to-transparent" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">

                {/* Breadcrumb-style label */}
                <span className="text-green-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3 opacity-80">
                    TAB HSE Services
                </span>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                    {title}
                </h1>

                {/* Animated underline bar */}
                <div className="mt-4 flex items-center gap-2">
                    <div className="h-px w-8 bg-purple-500 opacity-60" />
                    <div className="h-1 w-20 rounded-full bg-linear-to-r from-(--my-green) to-(--my-purple)" />
                    <div className="h-px w-8 bg-green-500 opacity-60" />
                </div>

            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-linear-to-t from-white/5 to-transparent" />
        </div>
    );
};

export default PageHeader;