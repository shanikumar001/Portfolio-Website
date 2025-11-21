import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // <-- Detect current route

  const isActive = (path) => location.pathname === path;

  const style = {
    icon: "h-9 w-[120px] flex items-center justify-center rounded-[3px] text-[16px] border border-gray-500 transition ease-out duration-300",
    active: "bg-blue-500 border-none scale-110 text-white",
    hover: "hover:bg-blue-500 hover:border-none hover:scale-110 hover:cursor-pointer",
    logoContainer:
      "flex items-center justify-center transition duration-300 ease-in-out pb-5 opacity-70",
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <svg width="32" height="32" fill="white" opacity="0.3" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1" fill="none" />
          <text
            x="12"
            y="17"
            fontSize="12"
            fill="white"
            textAnchor="middle"
            fontWeight="bold"
          >
            S
          </text>
        </svg>
      </div>

      <ul className="nav-links">
        <li
          className={`${style.icon} ${isActive("/") ? style.active : ""} ${style.hover}`}
          onClick={() => navigate("/")}
        >
          Home
        </li>

        <li
          className={`${style.icon} ${isActive("/services") ? style.active : ""} ${style.hover}`}
          onClick={() => navigate("/services")}
        >
          Services
        </li>

        <li
          className={`${style.icon} ${isActive("/project") ? style.active : ""} ${style.hover}`}
          onClick={() => navigate("/project")}
        >
          My Projects
        </li>

        <li
          className={`${style.icon} ${isActive("/contact") ? style.active : ""} ${style.hover}`}
          onClick={() => navigate("/contact")}
        >
          Contact
        </li>
      </ul>

      <button className="btn-contact" onClick={() => alert("Successfully Connect")}>
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
