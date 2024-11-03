import React, {useState} from "react";
import styles from "../styles/styleLogoContainer.module.css";
import Logo from "../assets/monopavoLogo.svg";

const LogoContainer = () => {

    return(
        <>
            <figure className={styles.logoContainer}>
                <a href="https://github.com/Monopavo" target="_blank">
                    <img src={Logo}/>
                </a>
            </figure>
        </>
    );
};

export default LogoContainer;