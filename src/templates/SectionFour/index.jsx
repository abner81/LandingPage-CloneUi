import React from 'react'

import donwloadVector from '../../../static/assets/images/download-vector.svg'
import background from '../../../static/assets/images/section-four-background.svg'
import divider from '../../../static/assets/images/traco-bottom.svg'

import './styles.css'

export default function SectionFour() {
  return (
    <div className='section-four-div'>
      <article id="fullContent-four-section" className="container">
        <div className="left-content-four">
          <h3>Download our mobile apps</h3>
          <img src={divider} alt="" />
          <p>
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </p>

          <button type="text" className="button-section-four">
            <a href="/">Download</a>
            <img src={donwloadVector} />
          </button>
        </div>

        <img src={background} alt="" id="background-section-four" />
      </article>
    </div>
  )
}
