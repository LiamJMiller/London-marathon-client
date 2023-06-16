import usericon from "../../assets/icons/user-placeholder.svg";
import "./Header.scss";

export default function Header({ setLoggedIn, loggedIn, admin, school }) {
  return (
    <header className="header">
      <h1 className="header__title">{school}</h1>
      <input
        type="text"
        className="header__searchbar"
        placeholder="search by name"
      />
      <div className="header__login-dropdown">
        <img src={usericon} alt="" />
        <p
          onClick={() => {
            setLoggedIn(false);
          }}
        >
          {admin} \/
        </p>
      </div>
    </header>
  );
}
