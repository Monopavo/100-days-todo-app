import React from "react";
import styles from "../styles/styleButtonAdd.module.css";

const ButtonAdd = ({list, setList}) => {

    const addTask = () => {
        const newTask = {text: ""};
        setList([...list, newTask]);
    };

    return(
        <button 
        className={styles.buttonAdd}
        onClick={addTask}
        >
            ADD
        </button>
    );
};

export default ButtonAdd;