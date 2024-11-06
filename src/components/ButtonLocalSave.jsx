import React from "react";
import styles from "../styles/styleButtonLocalSave.module.css";

const ButtonLocalSave = ({list}) => {

    const saveLocal = () => {
        const response = confirm("This list will be saved. Is that okay?")
        if (response) {
            localStorage.setItem("MonopavoToDoList", JSON.stringify(list));
            alert("List saved.");
        } else { 
            alert("List save cancelled.")
        };
    };

    return(
        <>
            <button 
                className={styles.buttonLocalSave}
                onClick={saveLocal}
            >
                {"\u2913"}
            </button>
        </>
    );
};

export default ButtonLocalSave;