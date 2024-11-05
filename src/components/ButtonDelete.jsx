import React, {useState} from "react";
import styles from "../styles/styleButtonDelete.module.css";

const ButtonDelete = ({list, setList, task}) => {

    const deleteTask = () => {
        const listSansTask = list.filter((e) => e.id !== task.id);
        setList(listSansTask);
    };

    return(
        <>
            <button 
                className={styles.buttonDelete}
                onClick={deleteTask}
            >
                &minus;
            </button>
        </>
    );
};

export default ButtonDelete;