import React, { useRef, useEffect, useContext } from "react";
import { Container, Button, Row } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./header.css";
import logo from "../../assets/images/tt1.png";
import { FiAlignLeft } from "react-icons/fi";
import { AuthContext } from "../../content/AuthContext";
import { AdminAuthContext } from "../../content/adminAuthContext";
const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);
  const { admin, dispatched } = useContext(AdminAuthContext);
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  const adminLogout = () => {
    dispatched({ type: "ADMIN_LOGOUT" });
    navigate("/");
  };
  // const Profile = () => {
  //   //console.log(localStorage.getItem());
  //   navigate("/profile");
  // };
  useEffect(() => {
    const stickyHeaderFunc = () => {
      if (headerRef.current) {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          headerRef.current.classList.add("sticky__header");
        } else {
          headerRef.current.classList.remove("sticky__header");
        }
      }
    };

    window.addEventListener("scroll", stickyHeaderFunc);
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, [headerRef]);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  const getDetails = () => {
    navigate("/tourlist");
  };
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* =========logo========= */}
            <div className="logo">
              <img
                src={logo}
                alt="123"
                style={{ height: "50px", width: "50px" }}
              />
            </div>
            {/* =========logo end========= */}
            {/* =========menu start========= */}
            <div className="navigateion" ref={menuRef} onClick={toggleMenu}>
              <ul
                className="menu d-flex align-items-center gap-5"
                style={{ listStyleType: "none" }}
              >
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* =========menu end========= */}
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__right d-flex align-items-center gap-4">
                {user ? (
                  <>
                    {" "}
                    <h5 className="mb-0">{user.username}</h5>
                    <Button className="btn btn-dark" onClick={logout}>
                      Logout
                    </Button>
                  </>
                ) : admin ? (
                  <>
                    {" "}
                    <Button className="btn btn-dark" onClick={getDetails}>
                      Get Details
                    </Button>
                    <h5 className="mb-0">Hello Admin</h5>
                    <Button className="btn btn-dark" onClick={adminLogout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <button className="btn">
                      <Link className="btn-link" to="/login">
                        Login
                      </Link>
                    </button>
                    <button className="btn">
                      <Link className="btn-link" to="/register">
                        Register
                      </Link>
                    </button>
                    <button className="btn">
                      <Link className="btn-link" to="/admin">
                        Admin
                      </Link>
                    </button>
                  </>
                )}
              </div>
              <span className="mobile__menu" onClick={toggleMenu}>
                <FiAlignLeft />
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
