import React, {useState} from "react";
import ButtonAdd from "./components/ButtonAdd.jsx";
import ButtonDelete from "./components/ButtonDelete.jsx";
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

  return (
    <React.StrictMode>
        <TodoHeader/>
        <LogoContainer/> 
        <ButtonAdd
          list={list}
          setList={setList}/>
        <ButtonDelete/>
      <TaskContainer
          handleTextInput={handleTextInput}
          list={list}
          setList={list}/>
    </React.StrictMode>
  );
};

export default App