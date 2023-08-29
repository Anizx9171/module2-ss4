import React, { useState } from "react";

export default function ToDoList() {
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState("");
  let toDo = JSON.parse(localStorage.getItem("todolist")) || [];
  function getValueInput(e) {
    setValue(e);
  }
  function addNewWork() {
    localStorage.setItem("todolist", JSON.stringify([...toDo, value]));
    setValue("");
    setJobs(toDo);
  }
  function deleteWork(e) {
    let index = toDo.find((val) => val == e);
    let newToDo = toDo.filter((e) => e != index);
    localStorage.setItem("todolist", JSON.stringify(newToDo));
    setJobs(toDo);
  }
  return (
    <>
      <h1>Thêm công việc</h1>
      <input value={value} onChange={(e) => getValueInput(e.target.value)} />
      <button onClick={addNewWork}>Thêm</button>
      <ul>
        {toDo.map((e, i) => {
          return (
            <li key={i}>
              {e} <button onClick={() => deleteWork(e)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
