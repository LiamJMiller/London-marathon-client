import "./App.scss";
import LoginPanel from "./components/LoginPanel/LoginPanel";
import MainPage from "./pages/MainPage/MainPage";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [admin, setAdmin] = useState({ school_id: 1}); // object with id, name, ...
  const [school, setSchool] = useState({ id: 1 }); // object with id, name, ...
  const [athletes, setAthletes] = useState([]);

  // const getSchoolsData = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:8080/schools/`);
  //     // const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/athletes/${school.id}`);
  //     setAthletes(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const getAndSetAdmin = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:8080/admins/`);
  //     setAdmin(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const getAndSetSchoolByID = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/schools/${admin.school_id}`);
      setSchool(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getAndSetAthletesData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/athletes/${school.id}`);
      // const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/athletes/${school.id}`);
      setAthletes(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (loggedIn) {
      // getAndSetAdmin();
      getAndSetSchoolByID();
    }
    getAndSetAthletesData();
    console.log(admin);
  }, []);

  return (
    <div className="App">
      <p>TESTING: LOGGED IN: {String(loggedIn)}</p>
      <p>TESTING: ADMINS SCHOOL ID: {String(admin.school_id)}</p>
      <p>TESTING: SCHOOL NAME: {String(school.name)}</p>
      <LoginPanel />
      <header className="App-header">london marathon hackathon</header>
      <MainPage loggedIn={loggedIn} admin={admin} school={school} athletes={athletes} />
    </div>
  );
}

export default App;
