import React from "react";
import { Card, Container, Form, Row, Col, Button } from "react-bootstrap";
import "./Auth.css";

const Auth = () => {
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
            <h2 className="m-auto">Авторизация</h2>
            <Form className="d-flex flex-column">
              {/* TODO сделать для каждой страницы папку и там scss file */}
              <Form.Control
                style={{ maxwidth: 400 }}
                className="mt-3"
                placeholder="Введите e-mail..."
              />
              <Form.Control className="mt-3" placeholder="Введите пароль..." />
              <Button variant="outline-succes">Войти</Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
