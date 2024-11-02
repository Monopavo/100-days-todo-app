import React from "react";
import TaskItem from "./TaskItem.jsx";
import styles from "../styles/styleTaskContainer.module.css";

const TaskContainer = ({handleTextInput, list}) => {

    return (
        <div>
            <ul className={styles.taskContainer}>
            {!list || list.length === 0 ? (
                <TaskItem text="No tasks available."/>
            ) : (
                list.map((task, index) => (
                    <TaskItem
                        key={index}
                        text={task.text}
                        handleTextInput={handleTextInput}
                        index={index}
                    />))
                )}
            </ul>
        </div>
    );
};
    
export default TaskContainer;