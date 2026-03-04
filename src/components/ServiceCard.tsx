import type { ReactNode } from 'react';

const ServiceCard = ({ title, description, icon }: { title: string, description: string, icon: ReactNode }) => {
    return (
        <div className="border border-(--my-purple) p-8 rounded-3xl flex flex-col gap-4 rounded-bl-[70px] h-[250px] sm:h-[370px] lg:h-[350px] xl:h-[280px]">
            <div className="w-12 h-12 grid place-items-center rounded-lg bg-[#ffbbff] text-(--my-purple)">
                {icon}
            </div>
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="">{description}</p>
        </div>
    )
}

export default ServiceCard