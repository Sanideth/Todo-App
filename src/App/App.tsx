import React from "react";
import Button from "../components/Button/Button";
import InputField from "../components/InputField/InputField";
import Todo from "../components/Todo/Todo";
import { ReactComponent as IconFull } from "../images/icon-full.svg";
import { ReactComponent as IconCheck } from "../images/icon-check.svg";

import classes from "./App.module.css";
export interface ITodo {
  text: string;
  date: Date;
  done: boolean;
  id: number;
}

function App() {
  const [todos, setTodos] = React.useState<ITodo[]>([]);
  const [inputValue, setInputValue] = React.useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodos(
      (prevState) =>
        prevState && [
          ...prevState,
          {
            text: inputValue,
            date: new Date(),
            done: false,
            id: prevState.length,
          },
        ]
    );
    setInputValue("");
  };
  const handleDelete = (id: number) => {
    setTodos(
      (prevState) => prevState && prevState.filter((item) => item.id !== id)
    );
  };

  const handleStatusChange = (id: number) => {
    setTodos(
      (prevState) =>
        prevState &&
        prevState.map((item) =>
          item.id === id ? { ...item, done: !item.done } : item
        )
    );
  };

  return (
    <div className={classes.app}>
      <h1 className={classes.headingMain}>Todo</h1>
      <div className={classes.card}>
        <div className={classes.bgImage}>
          <div className={classes.dateContainer}>
            <p className={classes.weekDay}>Thur</p>
            <p className={classes.date}>Date dfdsfsdfsdf</p>
          </div>
        </div>
        <div className={classes.cardContainer}>
          <form onSubmit={handleSubmit}>
            <div className={classes.formContainer}>
              <div className={classes.iconContainer}>
                <IconCheck className={classes.iconCheck} />
                <IconFull />
              </div>

              <InputField
                placeholder="Note"
                className={classes.inputField}
                type="text"
                onChange={handleInputChange}
                value={inputValue}
              />
              <Button type="submit" className={classes.formButton}>
                +
              </Button>
            </div>
          </form>
          <div className={classes.todosContainer}>
            {todos &&
              todos.map((todo) => (
                <Todo
                  key={todo.id}
                  text={todo.text}
                  date={todo.date}
                  done={todo.done}
                  id={todo.id}
                  handleDelete={handleDelete}
                  handleStatusChange={handleStatusChange}
                />
              ))}
          </div>
          <div className={classes.filterButtonContainer}>
            <Button type="button" className={classes.filterButton}>
              All
            </Button>
            <Button type="button" className={classes.filterButton}>
              Active
            </Button>
            <Button type="button" className={classes.filterButton}>
              Done
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
