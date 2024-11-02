import React from "react";
import styles from "../styles/styleButtonDelete.module.css";

const ButtonDelete = () => {
    
    const deleteTask = () => {
    };

    return(
        <button 
        className={styles.buttonDelete}
        onClick={deleteTask}
        >
            DELETE
        </button>
    );
};

export default ButtonDelete;