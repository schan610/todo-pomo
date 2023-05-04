import DateChooser from "../UI/DateChooser";
const TodoMenu = () => {
  return (
    <div className="todo__menu">
      <div className="todo__menu__add">
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Add a task..."
          maxlength="50"
        />
        <DateChooser />
      </div>

      <div className="todo__menu__tasks">
        <span>Task</span>
        <ul className="todo__menu__task-list">
          <li className="todo__menu__task-item">Upcoming</li>
          <li className="todo__menu__task-item">Today</li>
        </ul>
      </div>
      <div className="todo__menu__folders">
        <span>Lists</span>
        <ul className="todo__menu__folder-list">
          <li className="todo__menu__folder-item">Work</li>
          <li className="todo__menu__folder-item">School</li>
        </ul>
      </div>
    </div>
  );
};

export default TodoMenu;
