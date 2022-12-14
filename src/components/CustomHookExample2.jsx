import React from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";

function CustomHookExample2() {
  const [task, setTask] = useLocalStorage("task", "");
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const onSubmit = (e) => {
    e.preventDefault();

    const taskObject = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };

    setTasks([...tasks, taskObject]);
  };

  return (
    <>
      <form className="w-50" onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Task</label>
          <input
            className="form-control"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <hr />
      {tasks.map((item, index) => (
        <h3 key={index}>{item.task}</h3>
      ))}
    </>
  );
}

export default CustomHookExample2;
