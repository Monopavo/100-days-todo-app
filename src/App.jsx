import React, {StrictMode} from "react";
import ButtonAdd from "./components/ButtonAdd.jsx";
import ButtonDelete from "./components/ButtonDelete.jsx";
import ButtonUpdate from "./components/ButtonUpdate.jsx";
import LogoFrame from "./components/LogoFrame.jsx";
import TaskContainer from "./components/TaskContainer.jsx";
import TaskItem from "./components/TaskItem.jsx";
import TodoHeader from "./components/TodoHeader.jsx";
import styles from "./styles/styleAppContainer.module.css";

const App = () => {

  return (
    <React.StrictMode>
      <div className={styles.appContainer}>
        <TodoHeader />
        <LogoFrame />
        <TaskContainer>  
            {/*TaskItems instantiate here*/}
        </TaskContainer> 
        <ButtonAdd />
        <ButtonDelete />
        <ButtonUpdate />
      </div>
    </React.StrictMode>
  )
};

export default App