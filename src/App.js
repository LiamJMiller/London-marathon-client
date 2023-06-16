import "./App.scss";
import LoginPanel from "./components/LoginPanel/LoginPanel";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <LoginPanel />
      <header className="App-header">london marathon hackathon</header>

      <MainPage />
    </div>
  );
}

export default App;
