import TodoMenu from "./TodoMenu";
import TodoItem from "./TodoItem";
import DateChooser from "../UI/DateChooser";
const Todo = () => {
  return (
    <section className="todo">
      <div className="section-container todo__container">
        <div className="todo__heading">
          <h3 className="heading--tertiary">To-Do List</h3>
        </div>
        <div className="todo__content">
          <TodoMenu />
          <div className="tasks">
            <div className="tasks__today">
              <h3 className="heading--tertiary">Today</h3>
              <ul className="tasks__list">
                <TodoItem />
              </ul>
            </div>

            <div className="tasks__tomorrow">
              <h3 className="heading--tertiary">Tomorrow</h3>
              <ul className="tasks__list">
                <TodoItem />
                <TodoItem />
                <TodoItem />
              </ul>
            </div>

            <div className="tasks__upcoming">
              <h3 className="heading--tertiary">Next 7 Days</h3>
              <ul className="tasks__list">
                <TodoItem />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Todo;
