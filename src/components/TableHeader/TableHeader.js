import "./TableHeader.scss";
import trashIconSource from "../../assets/icons/trash.svg";

const TableHeader = ({ category, athletes }) => {
  let title;
  let count;

  if (category === "registered") {
    title = "Registered Athletes";
    count = athletes.filter(athlete => athlete.attendance_status !== "Waitlist").length;
  }
  else {
    title = "Waitlist Athletes";
    count = athletes.filter(athlete => athlete.attendance_status === "Waitlist").length;
  }

  return (
    <div className="table-header">
      <div className="table-header__left-container">
        <h1 className="table-header__title">{title} ({count})</h1>
        {category === "registered" 
          ? <button className="table-header__btn table-header__btn--add-registered">Add Athlete</button>
          : <button className="table-header__btn table-header__btn--add-waitlist">Add Athlete</button>
        }
        {category === "registered" 
          ? <button className="table-header__btn table-header__btn--confirm">Request Confirmation</button>
          : <button className="table-header__btn table-header__btn--register">Register Athlete</button>}
      </div>
      {category === "registered" 
        &&  <div className="table-header__btn-unregister">
              <img className="table-header__icon-unregister" src={trashIconSource} alt="unregister" />
              <p className="table-header__text-unregister">Unregister</p>
            </div>
        }
    </div>
  );
};

export default TableHeader;
