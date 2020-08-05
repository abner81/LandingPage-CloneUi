import React from "react"

import imgBottom from "../../../static/assets/images/traco-bottom.svg"
import leftBackground from "../../../static/assets/images/left-background-two.svg"
import pontoRight from "../../../static/assets/images/pontos.svg"
import lupa from "../../../static/assets/images/lupa.svg"
import pharmacyIcon from "../../../static/assets/images/pharmacyIcon.svg"
import consultationIcon from "../../../static/assets/images/consultationIcon.svg"
import detailsIcon from "../../../static/assets/images/detailsIcon.svg"
import careIcon from "../../../static/assets/images/careIcon.svg"
import trackingIcon from "../../../static/assets/images/trackingIcon.svg"

import CardSection from "../../components/CardSection"

import "./styles.css"

export default function SectionTwo() {
  return (
    <div id="two-section-content">
      <img className="left-background" src={leftBackground} alt="" />
      <img className="right-background" src={pontoRight} alt="" />
      <article className="container">
        <div id="top-content">
          <h3>Our services</h3>
          <img src={imgBottom} alt="" />
          <p>
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>
        </div>

        <section className="main-content">
          <CardSection
            icon={lupa}
            title="Search doctor"
            description="Choose your doctor from thousands of specialist, general, and trusted
        hospitals"
          />
          <CardSection
            icon={pharmacyIcon}
            title="Online pharmacy"
            description="Buy  your medicines with our mobile application with a simple delivery system"
          />
          <CardSection
            icon={consultationIcon}
            title="Consultation"
            description="Free consultation with our trusted doctors and get the best recomendations"
          />
          <CardSection
            icon={detailsIcon}
            title="Details info"
            description="Free consultation with our trusted doctors and get the best recomendations"
          />
          <CardSection
            icon={careIcon}
            title="Emergency care"
            description="You can get 24/7 urgent care for yourself or your children and your
              lovely family"
          />
          <CardSection
            icon={trackingIcon}
            title="Tracking"
            description="Track and save your medical history and health data "
          />
        </section>

        <div className='button-a'>
          <a href='/'>Learn more</a>
        </div>
      </article>
    </div>
  )
}
