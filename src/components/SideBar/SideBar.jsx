import "./SideBar.css";
import avatar from "../../assets/avatar.png";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function SideBar({ handleEditProfileClick, handleLogOut }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <aside className="sidebar">
      <div className="sidebar__user-container">
        <p className="sidebar__username">{currentUser?.name || "Guest"}</p>
        <img
          src={currentUser?.avatar}
          alt="User Avatar"
          className="sidebar__avatar"
        />
      </div>
      <button
        onClick={handleEditProfileClick}
        className="sideBar__change-profile-btn"
      >
        Change profile data
      </button>
      <button onClick={handleLogOut} className="sideBar__logout-btn">
        Log Out
      </button>
    </aside>
  );
}

// add two new buttons check figma
