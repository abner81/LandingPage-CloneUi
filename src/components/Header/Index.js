import React from "react";

import "./styles.css";
import LogoIcon from "../../../static/assets/images/logo.svg";

export default function Header() {
  return (
    <header className="container" id="header-nav">
      <div id="div-logo">
        <img src={LogoIcon} alt='logo' />
        <strong>Trafalgar</strong>
      </div>
      <nav id="nav-list">
        <a href="/">Home</a>
        <a href="/">Procurar Médico</a>
        <a href="/">Apps</a>
        <a href="/">Testemunhas</a>
        <a href="/">Sobre Nós</a>
      </nav>
    </header>
  )
}
