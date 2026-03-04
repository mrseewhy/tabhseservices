
const PageHeader = ({ title }: { title: string }) => {
    return (
        <div className="h-36 md:h-52 overflow-hidden bg-linear-to-br from-black via-[#0b0f1f] to-[#0f172a]">
            <div className="container h-full">
                <div className="flex flex-col justify-center h-full">
                    <h2 className=" text-3xl font-bold  text-white sm:text-4xl md:text-5xl">
                        {title}
                    </h2>
                    <div className=" mt-2 h-1 w-36 bg-linear-to-r from-(--my-green) to-(--my-purple)" />
                </div>
            </div>
        </div>
    )
}

export default PageHeader