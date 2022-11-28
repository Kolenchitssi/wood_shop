import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../index";

const Name = observer(() => {
  const { device } = useContext(Context);
  return <div className="Name" style={{ display: "flex" }}></div>;
});

export default Name;
