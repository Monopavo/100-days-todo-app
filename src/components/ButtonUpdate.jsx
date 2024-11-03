import React from "react";
import styles from "../styles/styleButtonUpdate.module.css";

const ButtonUpdate = ({setIsEditable}) => {

    const updateTask = () => {
        setIsEditable(true)
    };

    return(
        <>
            <button
                className={styles.buttonUpdate}
                onClick={updateTask}
            >
                UPDATE
            </button>
        </>
    );
};


export default ButtonUpdate;