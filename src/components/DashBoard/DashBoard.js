import "./DashBoard.scss";

const DashBoard = ({ loggedIn, admin, school, athletes }) => {
  const maxRegistrations = 50;
  const poundsPerRegistration = 10;
  const maxPounds = 500;
  
  let registeredCount = athletes.filter(athlete => athlete.attendance_status !== "Waitlist").length;
  let waitlistCount = athletes.filter(athlete => athlete.attendance_status === "Waitlist").length;

  let registrationsLeft = maxRegistrations - registeredCount;
  let poundsRaised = registeredCount * poundsPerRegistration;
  
  
  return (
    <section className="dashboard">
      <div className="dashboard__card">
        <h3 className="dashboard__number">{registeredCount}</h3>
        <p className="dashboard__subtext dashboard__subtext--main">
          Registered Athletes
        </p>
        <p className="dashboard__subtext">{registrationsLeft} spots open</p>
      </div>
      <div className="dashboard__card">
        <h3 className="dashboard__number">{waitlistCount}</h3>
        <p className="dashboard__subtext dashboard__subtext--main">
          Waitlisted Athletes
        </p>
        {registrationsLeft > 0 && <p className="dashboard__subtext">Consider filling open spots with waitlisted athletes!</p>}
        {registrationsLeft === 0 && <p className="dashboard__subtext">You'll be able to register waitlisted athletes if any spots open up!</p>}
      </div>
      <div className="dashboard__card dashboard__card--2">
        <h3 className="dashboard__number">£{poundsRaised}</h3>
        <p className="dashboard__subtext dashboard__subtext--main">
          Raised towards PE / IT equipment
        </p>
        {poundsRaised === maxPounds && <p className="dashboard__subtext">Great job! You’ve reached the max</p>}
        {poundsRaised !== maxPounds && <p className="dashboard__subtext">Keep it up!</p>}
      </div>
    </section>
  );
};

export default DashBoard;
