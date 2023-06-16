import axios from "axios";
import DashBoard from "../../components/DashBoard/DashBoard";
import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";
import TableHeader from "../../components/TableHeader/TableHeader";

const MainPage = ({
  setLoggedIn,
  loggedIn,
  admin,
  school,
  athletes,
  selectedAthletes,
  setSelectedAthletes,
  getAndSetAthletesData
}) => {
  return (
    <>
      <Header
        setLoggedIn={setLoggedIn}
        loggedIn={loggedIn}
        admin={admin}
        school={school}
      />
      <DashBoard
        loggedIn={loggedIn}
        admin={admin}
        school={school}
        athletes={athletes}
      />
      <TableHeader
        category="registered"
        athletes={athletes}
        selectedAthletes={selectedAthletes}
        getAndSetAthletesData={getAndSetAthletesData}
      />
      <Table
        category="registered"
        athletes={athletes}
        setSelectedAthletes={setSelectedAthletes}
        selectedAthletes={selectedAthletes}
      />
      <TableHeader category="waitlist" athletes={athletes} getAndSetAthletesData={getAndSetAthletesData} />
      <Table
        category="waitlist"
        athletes={athletes}
        selectedAthletes={selectedAthletes}
      />
    </>
  );
};

export default MainPage;
