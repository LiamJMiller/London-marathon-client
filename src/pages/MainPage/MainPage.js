import DashBoard from "../../components/DashBoard/DashBoard";
import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";
import TableHeader from "../../components/TableHeader/TableHeader";

const MainPage = ({ loggedIn, admin, school, athletes }) => {

  return (
    <>
      <Header loggedIn={loggedIn} admin={admin} school={school}/>
      <DashBoard loggedIn={loggedIn} admin={admin} school={school} athletes={athletes}/>
      <TableHeader category="registered" athletes={athletes}/>
      <Table category="registered" athletes={athletes}/>
      <TableHeader category="waitlist" athletes={athletes}/>
      <Table category="waitlist" athletes={athletes}/>
    </>
  );
};

export default MainPage;
