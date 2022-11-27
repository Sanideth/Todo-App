import React from "react";
import Button from "../components/Button/Button";
import InputField from "../components/InputField/InputField";
import Todo from "../components/Todo/Todo";
import { ReactComponent as IconFull } from "../images/icon-full.svg";
import { ReactComponent as IconCheck } from "../images/icon-check.svg";

import classes from "./App.module.css";

function App() {
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
          <form>
            <div className={classes.formContainer}>
              <div className={classes.iconContainer}>
                <IconCheck className={classes.iconCheck} />
                <IconFull />
              </div>

              <InputField
                placeholder="Note"
                className={classes.inputField}
                type="text"
              />
              <Button type="submit" className={classes.formButton}>
                +
              </Button>
            </div>
          </form>
          <div className={classes.todosContainer}>
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
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
