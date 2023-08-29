import { useState } from "react";
import "./App.css";
import UseStateComp from "./components/useState/UseStateComp";
import UseContext from "./components/useContext/UseContext";
import UseEffect from "./components/useEffect/UseEffect";
import UseReducer from "./components/useReducer/UseReducer";
import ClickButton from "./components/Baitap/ClickButton";
import ToDoList from "./components/Baitap/ToDoList";
import DemKiTu from "./components/Baitap/DemKiTu";
import DongHoBamGio from "./components/Baitap/DongHoBamGio";

function App() {
  return (
    <>
      {/* <UseStateComp /> */}
      {/* <UseContext /> */}
      {/* <UseEffect /> */}
      {/* <UseReducer /> */}
      {/* <ClickButton /> */}
      {/* <ToDoList /> */}
      {/* <DemKiTu /> */}
      <DongHoBamGio />
    </>
  );
}

export default App;
