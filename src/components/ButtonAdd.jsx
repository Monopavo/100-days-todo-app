import React, {useState} from "react";
import styles from "../styles/styleButtonAdd.module.css";

const ButtonAdd = ({list, setList}) => {
    const [taskID, setTaskID] = useState(0);

    const addTask = () => {
        const newTask = {id: taskID, text: ""};
        setList([...list, newTask]);
        setTaskID(taskID + Math.random);
    };

    return(
        <>
            <button 
                className={styles.buttonAdd}
                onClick={addTask}
            >
                {"\u002B"}
            </button>
        </>
    );
};

export default ButtonAdd;