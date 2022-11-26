import React from "react";
import Button from "../components/Button/Button";
import InputField from "../components/InputField/InputField";
import Todo from "../components/Todo/Todo";

import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app}>
      <h1>Todo</h1>
      <div>
        card
        <div>image</div>
        <div>
          todos card
          <form action="">
            <InputField />
            <Button type="submit" className="something">
              +
            </Button>
          </form>
          <div>
            <Todo />
          </div>
          <div>
            <Button type="button" className="filterButton">
              All
            </Button>
            <Button type="button" className="filterButton">
              Active
            </Button>
            <Button type="button" className="filterButton">
              Done
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
