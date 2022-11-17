import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./todo.css";
import { addTodo, deleteTodo, deleteALL } from "../actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = () => {
  const [inputTodo, setInputTodo] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Redux Todo Lists</h1>
        <div className="worksection">
          <input
            className="puttodo"
            type="text"
            placeholder="Put Your List Here"
            value={inputTodo}
            onChange={(event) => setInputTodo(event.target.value)}
          />
          <FontAwesomeIcon
            icon={faSquarePlus}
            size="2x"
            color="burlywood"
            transform={"left-17 down-4"}
            onClick={() => dispatch(addTodo(inputTodo), setInputTodo(""))}
          />
        </div>
        <div className="showlists">
          {list.map((elem) => {
            return (
              <div className="listItems" key={elem.id}>
                <h2>{elem.data}</h2>
                <FontAwesomeIcon
                  icon={faTrash}
                  color="burlywood"
                  title="Delete Item"
                  transform={"left-30"}
                  transform={"left-10 down-4"}
                  onClick={() => dispatch(deleteTodo(elem.id))}
                />
              </div>
            );
          })}
        </div>
        <div>
          <button className="btn" onClick={() => dispatch(deleteALL())}>
            Remove All
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
