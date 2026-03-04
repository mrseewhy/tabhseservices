// import LinkButton from './LinkButton'

// const CTA = () => {
//     return (
//         <div className='bg-white mt-24 py-12'>
//             <div className='container'>
//                 <div className='flex gap-6 items-center justify-center'>
//                     <div className='w-1/2'>
//                         <div >
//                             <h5 className="text-lg font-semibold uppercase tracking-wide text-(--my-purple) md:text-xl">
//                                 Partner With Confidence
//                             </h5>
//                             <h2 className=" text-3xl font-bold  text-gray-900 sm:text-4xl md:text-5xl">Ready to Elevate Your <br /> <span className="text-(--my-green)">Safety Standards</span>?</h2>
//                             <p className='mt-5'>Strengthen compliance, protect your workforce, and build systems that drive measurable safety performance across your organisation.</p>
//                             <div className="mt-8 flex flex-wrap gap-4">
//                                 <LinkButton
//                                     color="bg-(--my-green) text-white hover:bg-green-700"
//                                     to="/"
//                                     children="Schedule Consultation →"
//                                 />
//                                 <LinkButton
//                                     color="bg-gray-900 text-white hover:bg-gray-700"
//                                     to="/"
//                                     children="Explore Services"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                     <div className='w-1/2 h-[400px] '>
//                         <img src='/img/about.jpg' alt='cta-img' className='h-[400px] w-full object-cover rounded-3xl rounded-bl-[200px]' />
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default CTA

import LinkButton from './LinkButton'

const CTA = () => {
    return (
        <div className='bg-white mt-24 py-12'>
            <div className='container'>
                <div className='flex flex-col-reverse lg:flex-row gap-8 lg:gap-6 items-center justify-center'>
                    {/* Text Content */}
                    <div className='w-full lg:w-1/2'>
                        <h5 className="text-lg font-semibold uppercase tracking-wide text-(--my-purple) md:text-xl">
                            Partner With Confidence
                        </h5>
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
                            Ready to Elevate Your{" "}
                            <br className="hidden sm:block" />
                            <span className="text-(--my-green)">Safety Standards</span>?
                        </h2>
                        <p className='mt-5 text-gray-600 text-sm sm:text-base'>
                            Strengthen compliance, protect your workforce, and build systems that drive measurable safety performance across your organisation.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <LinkButton
                                color="bg-(--my-green) text-white hover:bg-green-700"
                                to="/contact-us"
                                children="Schedule Consultation →"
                            />
                            <LinkButton
                                color="bg-gray-900 text-white hover:bg-gray-700"
                                to="/services"
                                children="Explore Services"
                            />
                        </div>
                    </div>

                    {/* Image */}
                    <div className='w-full lg:w-1/2 h-[280px] sm:h-[350px] lg:h-[400px]'>
                        <img
                            src='/img/about.jpg'
                            alt='cta-img'
                            className='h-full w-full object-cover rounded-3xl rounded-bl-[100px] sm:rounded-bl-[150px] lg:rounded-bl-[200px]'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA