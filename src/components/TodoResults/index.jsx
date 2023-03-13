import "./styles.css";
import { useSelector } from "react-redux";

const TodoResults = () => {
  // Fix an ability to calculate completed tasks
  const todoList = useSelector((state) => state.todoList.list);
  const filterCompletedTask = todoList.filter((task) => {
    return task.checked === true;
  });

  return <div className="todo-results">Done:{filterCompletedTask.length}</div>;
};
export default TodoResults;
