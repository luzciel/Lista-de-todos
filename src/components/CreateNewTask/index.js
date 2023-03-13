import { useState } from "react";
import "./styles.css";
import { useCreateTaskMutation } from "api/apiSlice";
import { useDispatch } from "react-redux";
import { setTodoList } from "../../store/slices/todoList";
import ErrorMessage from "components/ErrorMessage.js";
import { v4 as uuidv4 } from 'uuid';

const CreateNewTask = () => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const idGenerator = uuidv4();


  const dispatch = useDispatch();
  const [createTask] = useCreateTaskMutation();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const isDisabled = inputValue === "";

  const handleSubmit = (e) => {
    e.preventDefault();

    const label = inputValue;
    const id = idGenerator;
    const checked = false;
    const newTodo = {
      id,
      label,
      checked,
    };

    createTask(newTodo)
      .unwrap()
      .then((payload) => {
        if (payload.id) {
          dispatch(setTodoList([newTodo]));
        }
      })
      .catch((error) => setErrorMessage(true));

    setInputValue("");
  };

  const handleCloseError = () => setErrorMessage(false);

  return (
    <div>
      <form onSubmit={handleSubmit} className="create-task">
        <input
          type="text"
          name="description-task"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter new to do"
          className="create-task-description"
        />
        <button
          type="submit"
          disabled={isDisabled}
          className="create-task-button"
        >
          ADD TO TODO
        </button>
      </form>
      {errorMessage ? <ErrorMessage closeError={handleCloseError} /> : null}
    </div>
  );
};

export default CreateNewTask;
