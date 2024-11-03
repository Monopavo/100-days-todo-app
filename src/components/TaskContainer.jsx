import React from "react";
import TaskItem from "./TaskItem.jsx";
import styles from "../styles/styleTaskContainer.module.css";

const TaskContainer = ({handleTextInput, list, setList}) => {

    return (
        <>
            <ul className={styles.taskContainer}>
            {!list || list.length === 0 ? (
                <p>No tasks available.</p>
            ) : (
                list.map((task, index) => (
                    <TaskItem
                        handleTextInput={handleTextInput}
                        index={index}
                        list={list}
                        setList={setList}

                        task={task}
                        id={task.id}
                        key={task.id}
                        text={task.text}
                    />))
                )}
            </ul>
        </>
    );
};
    
export default TaskContainer;