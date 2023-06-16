import "./TableHeader.scss";
import trashIconSource from "../../assets/icons/trash.svg";
import axios from "axios";

const TableHeader = ({ category, athletes, selectedAthletes, getAndSetAthletesData }) => {
  let title;
  let count;

  const deleteAthlete = async (athleteID) => {
    axios
      .delete(`http://localhost:8080/athletes/${athleteID}`)
      .then(result => {
        console.log(result);
        getAndSetAthletesData();
      })
  }

  const handleUnregister = () => {
      for (let i = 0; i < selectedAthletes.length; i++) {
        deleteAthlete(selectedAthletes[i]);
      }
  }

  const handleMoveUp = () => {
      for (let i = 0; i < selectedAthletes.length; i++) {
        athletes.find(athlete => athlete.id === selectedAthletes[i].id).attendance_status = "Not Confirmed";
      }
  }

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
          : <button className="table-header__btn table-header__btn--register" onClick={handleMoveUp}>Register Athlete</button>}
      </div>
      {category === "registered" 
        &&  <div className="table-header__btn-unregister">
              <img className="table-header__icon-unregister" src={trashIconSource} alt="unregister" onClick={handleUnregister}/>
              <p className="table-header__text-unregister">Unregister</p>
            </div>
        }
    </div>
  );
};

export default TableHeader;
