import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import { addTodo, removeTodo } from "./store/reduces/todoReduces";
export default function App() {
  const [todoItem, setTodo] = useState("");

  const state = useSelector((state) => state);
  const { todoStore } = state;
  const { todoItems } = todoStore;
  const dispatch = useDispatch();

  const onTodoChanged = (e) => {
    setTodo(e.target.value);
  };

  const onAddTodoItem = () => {
    dispatch({
      type: addTodo.toString(),
      payload: todoItem,
    });
    setTodo("");
  };

  return (
    <div>
      <div className="list-header">
        <h3>TODO LIST</h3>
      </div>
      <input type="text" value={todoItem} onChange={onTodoChanged} />
      <button type="submit" onClick={onAddTodoItem}>
        ADD
      </button>
      {todoItems.map((item, index) => {
        return <TodoItem item={item} index={index} key={`${index}`} />;
      })}
    </div>
  );
}

const TodoItem = React.memo(({ item, index }) => {
  const dispatch = useDispatch();

  const onItemClicked = (index) => {
    dispatch({
      type: removeTodo.toString(),
      payload: index,
    });
  };

  var r = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  var g = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  var b = Math.floor(Math.random() * (255 - 0 + 1) + 0);

  return (
    <div
      key={`${index}`}
      className="item-container"
      style={{
        backgroundColor: `rgb(${r},${g},${b})`,
      }}
      onClick={() => onItemClicked(index)}
    >
      <h5 style={{ color: "grey" }}>{item}</h5>
    </div>
  );
});
