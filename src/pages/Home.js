import React from "react"


import SectionOne from "../templates/SectionOne/Index"

import '../../static/assets/styles/globalStyles.css'
import SectionTwo from "../templates/SectionTwo"
import SectionThree from "../templates/SectionThree"
import SectionFour from "../templates/SectionFour"

export default function Home() {
  return (
    <div>
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    </div>
  )
}
