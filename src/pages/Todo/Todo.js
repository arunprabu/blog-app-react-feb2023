import React, { useReducer, useState } from "react";

const Todo = () => {

  const [todos, setTodos ] = useState(['hooks demo', 'unit testing demo','redux-toolkit']);

  // const [todoState, todoDispatch ] = useReducer()

  return (
    <div>
      <h1>Welcome to My Todos App!</h1>
      <p>Enter Todo</p>
      <input
        type="text"
        placeholder="enter todo item"
        className="form-control"
        style={{ width: "30%", display: "inline-block" }}
      />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setTodos([
            ...todos,
            "react performance tuning"
          ]);
        }}
      >
        Add Todo
      </button>
      <h2>The Todos are here</h2>
      <div className="card">
        <ul className="list-group list-group-flush">
          {todos?.map((todo, index) => {
            return (
              // Using index as key as last resort as I have no option, right now
              <li className="list-group-item" key={index}>
                {todo}
                <button type="button" className="btn btn-info">
                  Edit
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
