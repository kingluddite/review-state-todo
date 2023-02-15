import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Todo from "./components/Todo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormTodo from "./components/FormTodo";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "This is a sample Todo",
      isDone: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card key={index}>
              <Card.Body>
                <Todo
                  todo={todo}
                  markTodo={markTodo}
                  index={index}
                  removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
