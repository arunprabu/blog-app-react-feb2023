import React, { useEffect, useReducer, useRef } from "react";
import todoReducer from "../../reducers/todoReducer";

const Todo = () => {
  // useReducer() returs state and dispatch in an array
  const [todoState, todoDispatch] = useReducer(todoReducer); // it needs the reducer and init state
  console.log(todoState);
  const todoInputRef = useRef(null);
  
  useEffect( () => {
    // right place for api call. 
    todoDispatch({
      type: "GET_TODOS",
      payload: [
        {
          id: 1,
          title: "delectus aut autem",
          isCompleted: false,
        },
        {
          id: 2,
          title: "quis ut nam facilis et officia qui",
          isCompleted: false
        }
      ]
    });
  }, []);

  const handleAddTodo = () => {
    console.log(todoInputRef.current.value);
    
     // if you want changes app wide
    // before we connect with the api
    // dispatch with type ADD_TODO_LOADING
    // after success api call
    // dispatch ADD_TODO_SUCCESS
    // upon failure api call
    // dispatch ADD_TODO_ERROR

    // if you want the changes to be comp wide work with useState for loading and handling errors
    todoDispatch({
      type: "ADD_TODO",
      payload: {
        id: new Date(),
        title: todoInputRef.current.value,
        isCompleted: false,
      },
    }); // dispatch with an action
  }

  return (
    <div>
      <h1>Welcome to My Todos App!</h1>
      <p>Enter Todo</p>
      <input
        type="text"
        placeholder="enter todo item"
        className="form-control"
        style={{ width: "30%", display: "inline-block" }}
        ref={todoInputRef}
      />
      <button type="button" className="btn btn-primary" onClick={handleAddTodo}>
        Add Todo
      </button>
      <h2>The Todos are here</h2>
      <div className="card">
        <ul className="list-group list-group-flush">
          {todoState?.map((todo) => {
            return (
              <li className="list-group-item" key={todo.id}>
                {todo.title}
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
