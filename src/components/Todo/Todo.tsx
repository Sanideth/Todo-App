import classes from "./Todo.module.css";
import { ReactComponent as IconFull } from "../../images/icon-full.svg";
import { ReactComponent as IconCheck } from "../../images/icon-check.svg";
import { ReactComponent as IconDelete } from "../../images/icon-delete.svg";
const Todo = () => {
  return (
    <div className={classes.todo}>
      <div>
        <h2 className={classes.headingSecondary}>Todo text</h2>
        <p className={classes.time}>Todo date</p>
      </div>
      <div className={classes.iconContainer}>
        <div className={classes.iconCheckedContainer}>
          <IconCheck className={classes.iconChecked} />
          <IconFull />
        </div>
        <IconDelete />
      </div>
    </div>
  );
};

export default Todo;
