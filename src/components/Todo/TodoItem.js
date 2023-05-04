import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
const TodoItem = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <li className="tasks__item">
      <label className="checkbox">
        <input
          className="checkbox__input"
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked((prevState) => !prevState)}
        />
        <BsCheckLg className="checkbox__mark" />
      </label>
      <div className="tasks__item__info">
        <span className="tasks__item__name">Lorem ipsum dolor sit amet.</span>
        <span className="tasks__item__date">04/29/23</span>
      </div>
    </li>
  );
};

export default TodoItem;
