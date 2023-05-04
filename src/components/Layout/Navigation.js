import UserNavigation from "./UserNavigation";
const Navigation = () => {
  const isLoggedIn = true;
  return (
    <nav className="nav">
      <div className="section-container nav__container">
        <div className="logo">ToDoPomo</div>
        {!isLoggedIn && (
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/" className="btn btn--secondary">
                Sign Up
              </a>
            </li>
            <li className="nav__item">
              <a href="/" className="btn btn--primary">
                Log In
              </a>
            </li>
          </ul>
        )}

        {isLoggedIn && <UserNavigation />}
      </div>
    </nav>
  );
};
export default Navigation;
