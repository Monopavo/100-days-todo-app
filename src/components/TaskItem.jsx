import React, {useState} from "react";
import ButtonDelete from "./ButtonDelete";
import ButtonEdit from "./ButtonEdit";
import styles from "../styles/styleTaskItem.module.css";


const TaskItem = ({handleTextInput, index, list, setList, task, text}) => {
    const [isEditable, setIsEditable] = useState(false);

    const handleBlur= () => {
        !isEditable && setIsEditable(false);
    };

    const handleFocus = () => {
        setIsEditable(true);
    };

    return(
        <>
            <div className={styles.taskItem}>
                <textarea 
                    className={styles.taskItemInput}
                    placeholder="Enter your task here."
                    onBlur={handleBlur}
                    onChange={(e) => handleTextInput(e, index)}
                    onFocus={handleFocus}
                    value={text}
                    disabled={false}
                />
                <ButtonEdit
                    isEditable={isEditable}
                    setIsEditable={setIsEditable}
                />
                <ButtonDelete
                    list={list}
                    setList={setList}
                    task={task}
                    />
            </div>
        </>
    );
};

export default TaskItem;