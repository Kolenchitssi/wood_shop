import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Container, Row, Col } from "react-bootstrap";
import BrandBar from "../components/BrandBar";
import DeviseList from "../components/DeviceList";
import TypeBar from "../components/TypeBar";
import { Context } from "../index";
import { fetchBrands, fetchTypes, fetchDevices } from "../http/deviceApi";

const Shop = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
    fetchDevices().then((data) => device.setDevices(data.rows));
  }, []);
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
});

export default Shop;
