import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { Card, Container, Form, Row, Col, Button } from "react-bootstrap";
import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "../utils/constantsRoutes";

import "./Auth.css";
import { login, registration } from "../http/userApi";
import { Context } from "../index";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  /*   console.log(location);
  {
  hash:"",
  key: "default",
  pathname:"/login",
  search:"",
  state: null,
} */

  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        const data = await login(email, password);
      } else {
        const data = await registration(email, password);
        console.log(user, data);
      }
      user.setUser(user);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Container
      className="authorization"
      style={{ height: window.innerHeight - 50 }}
    >
      <Row>
        <Col>
          <Card
            style={{ width: 640, height: 200 }}
            className="authorization__card p-5"
          >
            <h2 className="m-auto">
              {isLogin ? "Авторизация" : "Регистрация"}
            </h2>
            <Form className="d-flex flex-column">
              {/* TODO сделать для каждой страницы папку и там scss file */}
              <Form.Control
                style={{ maxwidth: 400 }}
                className="mt-3"
                placeholder="Введите e-mail..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Control
                className="mt-3"
                placeholder="Введите пароль..."
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {isLogin ? (
                  <div>
                    Нет аккаунта?{" "}
                    <NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink>
                  </div>
                ) : (
                  <div>
                    Есть аккаунт?
                    <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                  </div>
                )}
                <Button
                  className="mt-3 align-self-end"
                  variant="outline-success"
                  onClick={click}
                >
                  {isLogin ? "Войти" : "Регистрация"}
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
});

export default Auth;
