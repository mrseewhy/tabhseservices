import AboutSectionForPage from "../components/AboutSectionForPage"
import CoreValues from "../components/CoreValues"
import WhatGuidesUs from "../components/WhatGuidesUs"

const About = () => {
    return (
        <div className="bg-white">
            <AboutSectionForPage />
            <WhatGuidesUs />
            <CoreValues />
        </div>
    )
}

export default About