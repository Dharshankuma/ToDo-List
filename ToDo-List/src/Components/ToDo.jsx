import React from "react";
import { Calendar1, Circle, CircleCheck, Trash2 } from "lucide-react";
import { useState } from "react";
import "./ToDo.css";

const ToDo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddToDoList = () => {
    if (todo.trim() === "") {
      alert("please enter a task");
      return;
    }
    setTodoList([
      ...todoList,
      { id: Date.now(), task: todo, completed: false },
    ]);
    setTodo("");
  };

  const handleDeleteToDoList = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const handleToggleCompleteTask = (id) => {
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div>
      <div class="actual_whole_content_div">
        <div class="todo_content_div">
          <h2 className="todo_title_header">
            <Calendar1
              className="todo_icon"
              color="red"
              strokeWidth={2}
              size={25}
            />
            To-Do List
          </h2>
          <div className="todo_input_getter">
            <input
              type="text"
              className="formtxt_box_chng"
              placeholder="Add a new task...."
              onChange={(e) => setTodo(e.target.value)}
              maxlength={25}
              value={todo}
            />
            <button className="btn_chng_frm" onClick={handleAddToDoList}>
              Add
            </button>
          </div>

          <div class="todo_list_content">
            {todoList.length === 0 ? (
              <p className="todo_list_empty"></p>
            ) : (
              <ul className="todo_list_items_content">
                {todoList.map((item) => (
                  <li
                    key={item.id}
                    style={{
                      cursor: "pointer",
                      color: item.completed ? "gray" : "black",
                    }}
                    className="todo_list_item"
                  >
                    <span
                      style={{ cursor: "pointer", marginRight: "10px" }}
                      onClick={() => handleToggleCompleteTask(item.id)}
                    >
                      {item.completed ? (
                        <CircleCheck
                          color={"green"}
                          strokeWidth={2}
                          className="circle_size"
                        />
                      ) : (
                        <Circle
                          color={"gray"}
                          strokeWidth={2}
                          className="circle_size"
                        />
                      )}
                    </span>
                    <span className={`todo_task_text ${item.completed ? "completed" : ""}`}>{item.task}</span>
                    <span
                      className="todo_delete_icon"
                      style={{ cursor: "pointer" ,marginLeft: "auto"}}
                    >
                      <Trash2
                        color={"red"}
                        strokeWidth={2}
                        onClick={() => handleDeleteToDoList(item.id)}
                      />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
