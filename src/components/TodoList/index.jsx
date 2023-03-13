import { useEffect, useState } from "react";
import "./styles.css";
import {
  useGetTodoListQuery,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from "../../api/apiSlice";
import TodoListItem from "components/TodoListItem";
import { useDispatch, useSelector } from "react-redux";
import {
  setTodoList,
  deleteTaskFromList,
  updateTodoList,
} from "../../store/slices/todoList";
import ErrorMessage from "components/ErrorMessage.js";
import LoadSpinner from "components/LoadSpinner";

const TodoList = () => {
  const [errorMessage, setErrorMessage] = useState(false);
  const dispatch = useDispatch();
  const { data, isError, isLoading } = useGetTodoListQuery();
  const [deleteTask, { isLoadingDelete = isLoading }] = useDeleteTaskMutation();
  const [updateTask, { isLoadingUpdate = isLoading }] = useUpdateTaskMutation();
  const todoList = useSelector((state) => state.todoList.list);

  useEffect(() => {
    if (data) {
      dispatch(setTodoList(data));
    }
  }, [dispatch, data]);

  const handleDelete = (todoId) => {
    // Fix an ability to delete task
    deleteTask(todoId)
      .unwrap()
      .then((payload) => {
        dispatch(deleteTaskFromList(todoId));
      })
      .catch((error) => setErrorMessage(true));
  };

  const toggleCheck = (todoId, isChecked) => {
    // Fix an ability to toggle task
    const UpdatePayload = {
      id: todoId,
      checked: isChecked ? false : true,
    };

    updateTask(UpdatePayload)
      .then((payload) => {
        dispatch(updateTodoList(UpdatePayload));
      })
      .catch((error) => setErrorMessage(true));
  };

  const handleCloseError = () => setErrorMessage(false);

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {isLoading || isLoadingUpdate || isLoadingDelete ? (
        <LoadSpinner />
      ) : todoList.length > 0 ? (
        <div className="todo-list-content">
          {/* Fix an ability to render todos */}
          <ul>
            {todoList.map((item) => (
              <li key={item.id}>
                <TodoListItem
                  label={item.label}
                  onCheck={toggleCheck}
                  checked={item.checked}
                  onDelete={handleDelete}
                  item={item}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="no-todos">
          Looks like you&apos;re absolutely free today!
        </div>
      )}
      {errorMessage || isError ? (
        <ErrorMessage closeError={handleCloseError} />
      ) : null}
    </div>
  );
};

export default TodoList;
