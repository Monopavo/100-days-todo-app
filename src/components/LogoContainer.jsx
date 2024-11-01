import React, {useState} from "react";
import styles from "../styles/styleLogoContainer.module.css";
import Logo from "../assets/monopavoLogo.svg";

const LogoContainer = () => {

    return(
        <a href="https://github.com/Monopavo" target="_blank"><img className={styles.logoFrame} src={Logo}/></a>
    )
};

export default LogoContainer;