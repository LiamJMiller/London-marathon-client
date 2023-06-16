import DashBoard from "../../components/DashBoard/DashBoard";
import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";

const MainPage = ({ setLoggedIn }) => {
  return (
    <>
      <Header setLoggedIn={setLoggedIn} />
      <DashBoard />
      <Table />
    </>
  );
};

export default MainPage;
