import React, { useEffect } from "react";
import Navhead from "../Components/Navhead";
import links from "../utils/dashboardlinks";
import { NavLink } from "react-router-dom";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import img1 from "../Asset/company logo.jpeg";

export default function Account() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const hideAccount = () => {
      if (location.pathname === "/account") {
        navigate("/account/workspace");
      }
    };
    hideAccount();
  }, [location.pathname, navigate]);

  return (
    <>
      <div className="d-flex">
        <div
          className="bg-white shadow"
          style={{ minHeight: "100vh", width: "300px" }}
        >
          <div>
            <NavLink to="/">
              <img className="image" src={img1} alt="logo" />
            </NavLink>
            {links.map((item) => (
              <NavLink
                to={`/account/${item.path}`}
                key={item.id}
                className={({ isActive }) =>
                  isActive ? "text-warning fw-bold" : "text-black fw-bold"
                }
              >
                <div className="d-flex align-items-center gap-3 p-3">
                  <div style={{ fontSize: "20px" }}>{item.icon}</div>
                  <span>{item.name}</span>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="bg-light sidebar">
          <Navhead />
          <div className="p-2">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
