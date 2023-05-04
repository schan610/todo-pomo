import Calendar from "../UI/Calendar";
const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="section-container dashboard__container">
        <div className="dashboard__heading">
          <h3 className="heading--tertiary">Welcome, Sabrina</h3>

          <div className="dashboard__datetime">
            <span className="dashboard__datetime__time numbers">7:34AM</span>
            <span className="dashboard__datetime__date numbers">
              Mon April 4
            </span>
          </div>
        </div>

        <div className="dashboard__content">
          <div className="dashboard__todo">
            <div className="dashboard__todo__today">
              <p className="dashboard__todo__heading">Today's Tasks:</p>
            </div>
            <div className="dashboard__todo__upcoming">
              <p className="dashboard__todo__heading">Upcoming:</p>
            </div>
          </div>
          <Calendar />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
