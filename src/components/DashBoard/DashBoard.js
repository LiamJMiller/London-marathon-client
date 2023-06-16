import "./DashBoard.scss";

const DashBoard = ({ loggedIn, admin, school, athletes }) => {
  return (
    <section className="dashboard">
      <div className="dashboard__card">
        <h3 className="dashboard__number">50</h3>
        <p className="dashboard__subtext dashboard__subtext--main">
          Registered Athletes
        </p>
        <p className="dashboard__subtext">0 spots open</p>
      </div>
      <div className="dashboard__card">
        <h3 className="dashboard__number">10</h3>
        <p className="dashboard__subtext dashboard__subtext--main">
          Waitlisted Athletes
        </p>
        <p className="dashboard__subtext"></p>
      </div>
      <div className="dashboard__card dashboard__card--2">
        <h3 className="dashboard__number">£500</h3>
        <p className="dashboard__subtext dashboard__subtext--main">
          Raised towards PE / IT equipment
        </p>
        <p className="dashboard__subtext">Great job! You’ve reached the max</p>
      </div>
    </section>
  );
};

export default DashBoard;
