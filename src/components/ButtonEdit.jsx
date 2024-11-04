import React, {useState, useEffect} from "react";
import styles from "../styles/styleButtonEdit.module.css";

const ButtonEdit = ({isEditable, setIsEditable}) => {
    const [classToggle, setClassToggle] = useState(styles.buttonEdit);
    const [textToggle, setTextToggle] = useState("EDIT");

    const updateTask = () => {
        setIsEditable(!isEditable);
    };

    useEffect(() => { 
        setClassToggle(isEditable ? 
            styles.buttonSave : styles.buttonEdit);
        setTextToggle(isEditable ? 
            "SAVE" : "EDIT");
        }, [isEditable]);
   
    return(
        <>
            <button
                className={classToggle}
                onClick={updateTask}
            >
                {textToggle}
            </button>
        </>
    );
};


export default ButtonEdit;