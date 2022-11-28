import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BrandBar from "../components/BrandBar";
import DeviseList from "../components/DeviceList";
import TypeBar from "../components/TypeBar";

const Shop = () => {
  return (
    <Container>
      <Row className="mt-3">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviseList />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
