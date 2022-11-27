import classes from "./Todo.module.css";
import { ReactComponent as IconFull } from "../../images/icon-full.svg";
import { ReactComponent as IconCheck } from "../../images/icon-check.svg";
import { ReactComponent as IconDelete } from "../../images/icon-delete.svg";
import { ReactComponent as IconEmpty } from "../../images/icon-empty.svg";
interface IProps {
  text: string;
  date: Date;
  done: boolean;
  id: number;
  handleDelete: (id: number) => void;
  handleStatusChange: (id: number) => void;
}
const Todo: React.FC<IProps> = ({
  text,
  date,
  done,
  id,
  handleDelete,
  handleStatusChange,
}) => {
  return (
    <div className={classes.todo}>
      <div>
        <h2 className={classes.headingSecondary}>{text}</h2>
        <p className={classes.time}>{date.toLocaleTimeString()}</p>
      </div>
      <div className={classes.iconContainer}>
        <div
          className={classes.iconCheckedContainer}
          onClick={() => handleStatusChange(id)}
        >
          {done ? (
            <>
              <IconCheck className={classes.iconChecked} />
              <IconFull />
            </>
          ) : (
            <IconEmpty />
          )}
        </div>
        <IconDelete
          onClick={() => handleDelete(id)}
          className={classes.iconDelete}
        />
      </div>
    </div>
  );
};

export default Todo;
