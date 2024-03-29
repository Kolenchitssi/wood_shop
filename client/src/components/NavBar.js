import React, { useContext } from "react";

// import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { SHOP_ROUTE, LOGIN_ROUTE, ADMIN_ROUTE } from "../utils/constantsRoutes";
import { observer } from "mobx-react-lite"; //для отслеживания и перерисовки компонента
import { useNavigate } from "react-router-dom";

import { Context } from "../index";
import "./navBar.css";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };
  return (
    <Navbar className="nav-bar" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href={SHOP_ROUTE}>
          Shop {String(user.isAuth)}
        </Navbar.Brand>{" "}
        {/* /Can may use <NavLink to={SHOP_ROUTE}>Home</NavLink> */}
        {user.isAuth ? (
          <Nav className="ml-auto">
            <Nav.Link className="nav-bar_link" href={SHOP_ROUTE}>
              Домой{" "}
            </Nav.Link>
            <Button
              className="nav-bar_link"
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Админ. панель
            </Button>
            <Button
              className="nav-bar_link"
              onClick={() => {
                // navigate(LOGIN_ROUTE);
                logOut();
              }}
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button
              variant={"outline-light"}
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Авторизация
            </Button>{" "}
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
