import "./LoginPanel.scss";
import running_person from "../../assets/Images/running-person.svg";
import logo from "../../assets/Images/logo.svg";

const LoginPanel = ({ setLoggedIn }) => {
  return (
    <main className="panel">
      <section className="panel--left">
        <img
          src={running_person}
          alt="running person"
          className="panel__main-img"
        />
      </section>
      <section className="panel--right">
        <div>
          <img src={logo} alt="logo" className="loginform__img" />
          <h2>LOG IN</h2>
        </div>
        <form className="loginform">
          <div className="loginform__section">
            <label htmlFor="">Email</label>
            <input
              type="text"
              className="loginform__input"
              placeholder="email@email.com"
            />
          </div>
          <div className="loginform__section">
            <label htmlFor="">password</label>
            <input
              type="text"
              className="loginform__input"
              placeholder="password"
            />
          </div>
          <p className="loginform__forgot">Forgot Password?</p>
          <div className="loginform__remember">
            <input type="checkbox" />
            <label htmlFor="">Remember Me</label>
          </div>

          <button
            className="loginform__button"
            onClick={() => {
              setLoggedIn(true);
            }}
          >
            Log In
          </button>
          <p className="loginform__signup">
            Don't have an account?
            <span>Sign Up</span>
          </p>
        </form>
      </section>
    </main>
  );
};

export default LoginPanel;
