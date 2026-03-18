import "./Header.css";
import logo from "../../assets/logo .svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  handleRegisterClick,
  handleLoginClick,
  isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <NavLink to="/" className="header__home-link">
        <img className="header__logo" src={logo} alt="logo" />
      </NavLink>

      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>

      <ToggleSwitch />

      {isLoggedIn && currentUser ? (
        <>
          <button
            onClick={handleAddClick}
            type="button"
            className="header__add-clothes-btn"
          >
            + Add clothes
          </button>

          <NavLink className="header__nav-link" to="/profile">
            <div className="header__user-container">
              <p className="header__username">{currentUser.name}</p>
              <img src={currentUser.avatar} alt="Profile avatar" className="header__avatar" />
            </div>
          </NavLink>
        </>
      ) : (
        <div className="header__auth-buttons">
          <button
            type="button"
            className="header__signup-btn"
            onClick={handleRegisterClick}
          >
            Sign Up
          </button>

          <button
            type="button"
            className="header__login-btn"
            onClick={handleLoginClick}
          >
            Log In
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
