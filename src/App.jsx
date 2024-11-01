import React, {StrictMode} from "react";
import AnimationContainer from "./components/AnimationContainer.jsx";
import ButtonAdd from "./components/ButtonAdd.jsx";
import ButtonDelete from "./components/ButtonDelete.jsx";
import ButtonUpdate from "./components/ButtonUpdate.jsx";
import LogoContainer from "./components/LogoContainer.jsx";
import TaskContainer from "./components/TaskContainer.jsx";
import TaskItem from "./components/TaskItem.jsx";
import TodoHeader from "./components/TodoHeader.jsx";
import styles from "./styles/styleAppContainer.module.css";
import animations from "./styles/styleAnimationContainer.module.css";

const App = () => {

  return (
    <React.StrictMode>
    <div className={styles.flexContainer}>
      <div className={styles.appContainer}>
        <AnimationContainer className={animations.animLeft}/> <LogoContainer /> <AnimationContainer className={animations.animRight}/>
        <TodoHeader className={styles.flexContainer}/>
        <ButtonAdd className={styles.flexContainer}/> <ButtonDelete className={styles.flexContainer}/> <ButtonUpdate className={styles.flexContainer}/>
        <TaskContainer className={styles.flexContainer}/>  
      </div>
    </div>
    </React.StrictMode>
  )
};

export default App