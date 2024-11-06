import React from "react";
import styles from "../styles/styleTodoHeader.module.css";

const TodoHeader = () => {
    
    return(
        <>
            <h1 className={styles.todoHeader}>
                Monopavo's To-Do App
            </h1>
        </>
    );
};

export default TodoHeader;