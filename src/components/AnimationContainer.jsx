import React, {useState} from "react";
import styles from "../styles/styleAnimationContainer.module.css";

const AnimationContainer = ({className}) => {
    
    return(
        <figure className={`${styles.animationContainer} ${className}`}>TEST</figure>
    )
}

export default AnimationContainer;