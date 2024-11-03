import React, {useState} from "react";
import ButtonDelete from "./ButtonDelete";
import ButtonUpdate from "./ButtonUpdate";
import styles from "../styles/styleTaskItem.module.css";

const TaskItem = ({handleTextInput, index, list, setList, task, text}) => {
    const [isEditable, setIsEditable] = useState(false);
    
    const handleBlur = () => {
        setIsEditable(false);
    };

    return(
        <>
            <div className={styles.taskItem}>
                <textarea 
                    className={styles.taskItemInput}
                    onBlur={handleBlur}
                    disabled={!isEditable}
                    placeholder="Enter your task here."
                    type="text"
                    onChange={(e) => handleTextInput(e, index)}
                    value={text}
                />
                <ButtonUpdate
                    setIsEditable={setIsEditable}
                    task={task}/>
                <ButtonDelete
                    list={list}
                    setList={setList}
                    task={task}/>
            </div>
        </>
    );
};

export default TaskItem