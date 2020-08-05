import React from 'react'

import "./styles.css"

export default function CardSection({icon, title, description}) {
  return (
    <div className="card-wrapper">
      <img src={icon} alt="search doctor" />
      <strong>{title}</strong>
      <p>{description}</p>
    </div>
  )
}
