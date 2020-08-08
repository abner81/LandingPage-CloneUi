import React from 'react'

import imgBottom from "../../../static/assets/images/traco-bottom.svg"
import background from '../../../static/assets/images/section-three.svg'

import './styles.css'

export default function SectionThree() {
  return (
    <article id="content-three-flex" className="container">
      <img src={background} alt="" id="img-background" />

      <div className="right-content-three">
        <h3>Leading Healthcare providers</h3>
        <img src={imgBottom} alt="" />
        <p>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone. To us, it’s not just work. We take
          pride in the solutions we deliver
        </p>

        <button type="text" className="button-section-three">
          <a href="/">Learn more</a>
        </button>
      </div>
    </article>
  )
}
