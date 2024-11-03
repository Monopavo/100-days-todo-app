import React, {useState} from "react";
import styles from "../styles/styleTodoHeader.module.css";

const TodoHeader = () => {
    
    return(
        <>
            <h1 className={styles.todoHeader}>
                Monopavo's To-Do App (WIP)
            </h1>
        </>
    );
};

export default TodoHeader;