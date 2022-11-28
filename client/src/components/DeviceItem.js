import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Card, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import star from "../assets/star.png";

import { Context } from "../index";
import { DEVICE_ROUTE } from "../utils/constantsRoutes";

const DeviceItem = observer(({ device }) => {
  const navigate = useNavigate();

  return (
    <Card
      className="device-item"
      style={{ display: "flex", cursor: "pointer" }}
      onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
    >
      <Image width={150} height={150} src={device.img} />
      <div className="d-flex justify-content-between">
        <div> Brand:</div>
        <div className="d-flex align-items-center">
          <div>{device.rating}</div>
          <Image width={18} height={12} src={star} />
        </div>
      </div>
      <div> {device.name}</div>
    </Card>
  );
});

export default DeviceItem;
