import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import { Card, Container, Form, Row, Col, Button } from "react-bootstrap";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/constantsRoutes";

import "./Auth.css";

const Auth = () => {
  const location = useLocation();
  /*   console.log(location);
  {
  hash:"",
  key: "default",
  pathname:"/login",
  search:"",
  state: null,
} */

  const isLogin = location.pathname === LOGIN_ROUTE;

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
              />
              <Form.Control className="mt-3" placeholder="Введите пароль..." />
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
};

export default Auth;
