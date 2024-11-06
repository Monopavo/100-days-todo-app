import React, {useEffect, useState} from "react";
import ButtonAdd from "./components/ButtonAdd.jsx";
import ButtonLocalClear from "./components/ButtonLocalClear.jsx";
import ButtonLocalSave from "./components/ButtonLocalSave.jsx";
import LogoContainer from "./components/LogoContainer.jsx";
import TaskContainer from "./components/TaskContainer.jsx";
import TodoHeader from "./components/TodoHeader.jsx";
import styles from "./styles/styleAppContainer.module.css";

const App = () => {
  const [list, setList] = useState([]);

  const handleTextInput = (event, index) => {
    const flatList = [...list];
    flatList[index].text = event.target.value;
    setList(flatList);
  };

  useEffect(()=> { 
    const localList = localStorage.getItem("MonopavoToDoList");
    localList && setList(JSON.parse(localList));
    }, []);

  return (
    <React.StrictMode>
      <div className={styles.appContainer}>
        <TodoHeader/>
        <LogoContainer/> 
        <ButtonAdd
          list={list}
          setList={setList}/>
        <ButtonLocalClear 
          setList={setList}/>
        <ButtonLocalSave 
          list={list}/>
        <TaskContainer
          handleTextInput={handleTextInput}
          list={list}
          setList={setList}/>
      </div>
    </React.StrictMode>
  );
};

export default App