import { useState } from "react";
import "./App.scss";
import LoginPanel from "./components/LoginPanel/LoginPanel";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn === false) {
    return <LoginPanel setLoggedIn={setLoggedIn} />;
  }

  if (loggedIn === true) {
    return (
      <div className="App">
        <header className="App-header">london marathon hackathon</header>
        <MainPage setLoggedIn={setLoggedIn} />
      </div>
    );
  }
}

export default App;
