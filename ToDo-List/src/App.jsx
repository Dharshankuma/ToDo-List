import React, { useState } from "react";
import ToDo from "./Components/ToDoList";
import "./App.css";
import { CalendarCheck } from "lucide-react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddtodo = () => {
    if (todo.trim() === "") {
      alert("Please enter a valid to-do item.");
      return;
    }

    setTodoList([
      ...todoList,
      { id: Date.now(), text: todo, completed: false },
    ]);
    setTodo("");
  };

  const handleToggleComplete = (id) => {
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };
  
  return (
    <div>
      <div className="app_container_content">
        <div className="input_container_content">
          <div className="app_header_content">
            <CalendarCheck size={28} strokeWidth={2} color="#ff7675" />
            <h1>To-Do List</h1>
          </div>

          <div className="input_box_btn_content">
            <input
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              className="formtxt_box_chng"
            />
            <button onClick={handleAddtodo} className="btn_box_chng">
              Add
            </button>
          </div>
          <div className="todo_list_content">
            <ToDo
              todoList={todoList}
              onToggleComplete={handleToggleComplete}
              onDelete={handleDeleteTodo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
