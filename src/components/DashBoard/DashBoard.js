import "./DashBoard.scss";

const DashBoard = ({ loggedIn, admin, school, athletes }) => {
  return (
    <section className="dashboard">
      <div className="dashboard__card">
        <h3>number</h3>
        <p>registered</p>
        <p>spots left</p>
      </div>
      <div className="dashboard__card">
        <h3>number</h3>
        <p>registered</p>
        <p>spots left</p>
      </div>
      <div className="dashboard__card">
        <h3>number</h3>
        <p>registered</p>
        <p>spots left</p>
      </div>
    </section>
  );
};

export default DashBoard;
