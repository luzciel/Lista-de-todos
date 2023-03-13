import "./styles.css";

const TodoListItem = ({ onCheck, checked, onDelete, label, item }) => {
  return (
    <div className="todo-list-item">
      <div
        tabIndex="0"
        role="checkbox"
        aria-checked
        className="todo-list-item-content"
      >
        <input
          tabIndex="-1"
          type="checkbox"
          checked={checked}
          onChange={() => onCheck(item.id, checked)}
        />
        <span className={checked ? "todo-list-item-checked" : ""}>{label}</span>
      </div>
      <button
        type="button"
        className="todo-list-item-delete"
        onClick={() => onDelete(item.id)}
      >
        x
      </button>
    </div>
  );
};

export default TodoListItem;
