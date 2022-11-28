import React, { useContext } from "react";
import { observer } from "mobx-react-lite"; //для отслеживания и перерисовки компонента
import { Card, Row } from "react-bootstrap";

import { Context } from "../index";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <div className="brand-bar" style={{ display: "flex" }}>
      {device.brands.map((brand) => (
        <Card
          style={{ cursor: "pointer" }}
          key={brand.id}
          className="p-2 m-1"
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id ? "primary" : "light"}
        >
          {brand.name}
        </Card>
      ))}
    </div>
  );
});

export default BrandBar;
