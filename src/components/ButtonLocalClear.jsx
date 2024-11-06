import React from "react";
import styles from "../styles/styleButtonLocalClear.module.css";

const ButtonLocalClear= () => {

    const clearLocal = () => {
        const response = confirm("Are you sure you wish to clear all local list data?")
        if (response) {
            localStorage.clear();
            alert("List data deleted.");
            location.reload();
        } else {
            alert("Data deletion cancelled.")
        };
    };

    return(
        <>
            <button 
                className={styles.buttonLocalClear}
                onClick={clearLocal}
            >
                {"\u2613"}
            </button>
        </>
    );
};

export default ButtonLocalClear;