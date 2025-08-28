import React, { useState } from "react";

function Todo(props) {
  return (
    <>
      <h3>{props.tasks}</h3>
    </>
  );
}

function TodoList() {
  const MyList = [
    { id: 1, Name: "Play game" },
    { id: 2, Name: "Do Home Work" },
    { id: 3, Name: "Cook Food" },
    { id: 4, Name: "Do cleaning" },
    { id: 5, Name: "Go with Friends" },
    { id: 6, Name: "Prayer Time" },
  ];

  const [tasks, setTasks] = useState(false);

  return (
    <>
     
      <button onClick={() => setTasks(!tasks)}>
        {tasks ? "Hide tasks" : "Click to see tasks"}
      </button>

      {tasks ? (
        MyList.map((list) => <Todo key={list.id} tasks={list.Name} />)
      ) : (
        <h1>Your tasks </h1>
      )}
    </>
  );
}

export default TodoList;
