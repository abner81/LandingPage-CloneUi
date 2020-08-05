import React from 'react'

import Ilustration from '../../../static/assets/images/illustration.svg'
import PontoImg from '../../../static/assets/images/pontos.svg';

import './styles.css'

export default function MainOne() {
  return (
    <>
      <article id="full-primary-content" className="container">
        <img src={PontoImg} alt='decoracao' />
        <div id="left-content">
          <h2>Virtual healthcare for you</h2>
          <span>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </span>
          <button type="text">
            <a href="/">Consult today</a>
          </button>
        </div>

        <div id="right-content">
          <img src={Ilustration} alt='ilustracao'/>
        </div>
      </article>
    </>
  )
}
