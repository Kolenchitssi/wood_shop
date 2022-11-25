import React, { useContext } from "react";
import { Context } from "../index";

import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { SHOP_ROUTE, LOGIN_ROUTE, ADMIN_ROUTE } from "../utils/constantsRoutes";
import { observer } from "mobx-react-lite"; //для отслеживания и перерисовки компонента

import "./NavBar.css";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar className="nav-bar" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href={SHOP_ROUTE}>Shop</Navbar.Brand>{" "}
        {/* /Can may use <NavLink to={SHOP_ROUTE}>Home</NavLink> */}
        {user.isAuth ? (
          <Nav className="ml-auto">
            <Nav.Link className="nav-bar_link" href={SHOP_ROUTE}>
              Домой{" "}
            </Nav.Link>
            <Nav.Link className="nav-bar_link" href={ADMIN_ROUTE}>
              Админ. панель
            </Nav.Link>
            <Nav.Link href={LOGIN_ROUTE}>Войти</Nav.Link>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button
              variant={"outline-light"}
              onClick={() => user.setIsAuth(true)}
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
