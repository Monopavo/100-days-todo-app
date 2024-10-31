import React, {useState} from "react";
import styles from "../styles/styleLogoFrame.module.css";
import Logo from "../assets/monopavoLogo.png";

const LogoFrame = () => {

    return(
        <img className={styles.logoFrame} src={Logo}/>
    )
};

export default LogoFrame;