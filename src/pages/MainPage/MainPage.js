import DashBoard from "../../components/DashBoard/DashBoard";
import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";

const MainPage = ({ setLoggedIn, loggedIn, admin, school, athletes }) => {
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
      <TableHeader category="registered" athletes={athletes} />
      <Table category="registered" athletes={athletes} />
      <TableHeader category="waitlist" athletes={athletes} />
      <Table category="waitlist" athletes={athletes} />
    </>
  );
};

export default MainPage;
