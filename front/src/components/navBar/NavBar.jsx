import React, { useContext } from "react";
import styles from "./navBar.module.css";
import { Link } from "react-router-dom";
import { FormattedDate, FormattedMessage } from 'react-intl'; 
import { langContext } from "../../context/langContext";

const NavBar = () => {
  const languaje = useContext(langContext); 

  return (
    <div className={styles.navContainer}>
      <div>
        <div>          
          <FormattedDate value={Date.now()} year="numeric" month="long" day="numeric" weekday="long" />
        </div>
        <div className={styles.langbtn}>
          <button onClick={() => languaje.setLang('es-Ar')}>esp</button> 
          <button onClick={() => languaje.setLang('en-US')}>eng</button>
        </div>
      </div>
      <div className={styles.divContainer}>

        <Link to="/"> <FormattedMessage id="nav.logohome" defaultMessage="LogoHome" /> </Link>
        <Link to="/about"> <FormattedMessage id="nav.about" defaultMessage="about" /> </Link>
        <Link to="/features"> <FormattedMessage id="nav.features" defaultMessage="features" /> </Link>
        <Link to="/cuatro"> <FormattedMessage id="nav.four" defaultMessage="cuatro" /></Link>
        <Link to="/cinco"> <FormattedMessage id="nav.five" defaultMessage="cinco" /></Link>
        <Link to="/events"> <FormattedMessage id="nav.events" defaultMessage="events" /> </Link>
        <Link to="/contact"> <FormattedMessage id="nav.contact" defaultMessage="contact" /> </Link>

      </div>
    </div>
  )
}

export default NavBar;

