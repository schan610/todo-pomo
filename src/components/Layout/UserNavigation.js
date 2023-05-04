import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
const UserNavigation = () => {
  return (
    <>
      <ul className="nav__user">
        <li className="nav__user__item--active">
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>
        <li className="nav__user__item">
          <Link to={"/todo"} href="/">
            To-Do
          </Link>
        </li>
        <li className="nav__user__item">
          <a href="/">Notes</a>
        </li>
        <li className="nav__user__item">
          <a href="/">Pomodoro</a>
        </li>
      </ul>
      <MdAccountCircle className="nav__account" />
    </>
  );
};

export default UserNavigation;
