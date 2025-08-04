import React, { useState } from "react";
import { Circle, CircleCheck, Trash2 } from "lucide-react";
import "./ToDoList.css";

const ToDoList = ({ todoList, onDelete, onToggleComplete }) => {
  return (
    <div className="actual_todo_list_content">
      {todoList.length == 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul className="todo_list_items_content">
          {todoList.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <span style={{ cursor: "pointer",marginRight: "10px" }} onClick={() => onToggleComplete(todo.id)}>
                {todo.completed ? (
                  <CircleCheck color={"green"} strokeWidth={2} className="circle_size"/>
                ) : (
                  <Circle color={"gray"} strokeWidth={2} className="circle_size"/>
                )}
              </span>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  flex: 1,
                }}
              >
                {todo.text}
              </span>
              <div className="todo_actions_content">
                <Trash2 color="red" onClick={() => onDelete(todo.id)} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToDoList;
