import React, {StrictMode} from "react";
import AnimationFrame from "./components/AnimationContainer.jsx";
import ButtonAdd from "./components/ButtonAdd.jsx";
import ButtonDelete from "./components/ButtonDelete.jsx";
import ButtonUpdate from "./components/ButtonUpdate.jsx";
import LogoFrame from "./components/LogoContainer.jsx";
import TaskContainer from "./components/TaskContainer.jsx";
import TaskItem from "./components/TaskItem.jsx";
import TodoHeader from "./components/TodoHeader.jsx";
import styles from "./styles/styleAppContainer.module.css";

const App = () => {

  return (
    <React.StrictMode>
      <div className={styles.appContainer}>
        <AnimationContainer /><LogoContainer /><AnimationCOntainer />
        <TodoHeader />
        <ButtonAdd /><ButtonDelete /><ButtonUpdate />
        <TaskContainer>  
            {/*TaskItems instantiate here*/}
        </TaskContainer>
      </div>
    </React.StrictMode>
  )
};

export default App