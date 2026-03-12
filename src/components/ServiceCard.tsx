// import type { ReactNode } from 'react';

// const ServiceCard = ({ title, description, icon }: { title: string, description: string, icon: ReactNode }) => {
//     return (
//         <div className="border border-(--my-purple) p-8 rounded-3xl flex flex-col gap-4 rounded-bl-[70px] h-[300px] sm:h-[370px] lg:h-[350px] xl:h-[280px]">
//             <div className="w-12 h-12 grid place-items-center rounded-lg bg-[#ffbbff] text-(--my-purple)">
//                 {icon}
//             </div>
//             <h3 className="text-2xl font-bold">{title}</h3>
//             <p className="">{description}</p>
//         </div>
//     )
// }

// export default ServiceCard


import type { ReactNode } from 'react';

const ServiceCard = ({ title, description, icon, image }: {
    title: string;
    description: string;
    icon: ReactNode;
    image: string;
}) => {
    return (
        <div className="border border-(--my-purple)/20 rounded-3xl rounded-bl-[70px] overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300 bg-white">

            {/* Image */}
            <div className="relative h-60 overflow-hidden rounded-bl-[70px]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Icon badge over image */}
                <div className="absolute bottom-4 left-5 w-11 h-11 rounded-xl bg-(--my-purple) flex items-center justify-center text-white shadow-lg">
                    {icon}
                </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col gap-3 flex-1">
                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;