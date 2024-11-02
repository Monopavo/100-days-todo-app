import React, {useState} from "react";
import styles from "../styles/styleTaskItem.module.css";

const TaskItem = ({handleTextInput, index, text}) => {
    const [isEditable, setIsEditable] = useState(true);

    return(
        <input 
            className={styles.taskItem}
            onBlur={()=> setIsEditable(false)}
            onFocus={()=> setIsEditable(true)}
            placeholder="Enter your task here."
            type="text"
            onChange={e => handleTextInput(e, index)}
            value={text}
        />
    )
};

export default TaskItem