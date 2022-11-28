import React, { useContext } from "react";
import { observer } from "mobx-react-lite"; //для отслеживания и перерисовки компонента

import { Context } from "../index";
import DeviceItem from "./DeviceItem";

import "./deviceList.css";

const DeviseList = observer(() => {
  const { device } = useContext(Context);
  return (
    <div className="device-list">
      {device.devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </div>
  );
});
export default DeviseList;
