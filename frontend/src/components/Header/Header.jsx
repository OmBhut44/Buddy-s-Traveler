import React from "react";
import { Container, Row, Button } from "reactstrap"; 
import { NavLink, Link } from "react-router-dom"; 

import logo from "../../assets/images/logo.png";

const nav_links = [
  { path: "/home", display: "Home" },
  { path: "#", display: "About" },
  { path: "/tours", display: "Tours" },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            {/*------ Logo ------*/}
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            {/*------ Logo end ------*/}

            {/*------ Menu starts ------*/}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink to={item.path}>{item.display}</NavLink> {/* ✅ Fixed: Changed Navlink to NavLink */}
                  </li>
                ))}
              </ul>
            </div>
            {/*------ Menu end ------*/}

            <div className="nav_right d-flex align-items-center gap-4">
              <div className="nav_btns d-flex align-items-center gap-4">
                <Button className="btn secondary_btn">
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="btn primary_btn">
                  <Link to="/register">Register</Link>
                </Button>
              </div>

              <span className="mobile_menu"></span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
