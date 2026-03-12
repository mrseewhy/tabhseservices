import AboutSectionForPage from "../components/AboutSectionForPage"
import CoreValues from "../components/CoreValues"
import Gallery from "../components/Gallery"
import WhatGuidesUs from "../components/WhatGuidesUs"

const About = () => {
    return (

        <div className="bg-white">
            <AboutSectionForPage />
            <WhatGuidesUs />
            <CoreValues />
            <Gallery />
            <div className="mt-12 md:mt-20"></div>

        </div>

    )
}

export default About