import React from "react";

import logo from "../../../pngs/logo.png";
import Button from "../Button";
import { MenuArea } from "./styled";

const DashMenu = () => {
  return (
    <MenuArea>
      <div className="menu">
        <img src={logo} alt="logo" />
        <div>
          <Button text="Inicio"></Button>
          <Button text="Contato"></Button>
          <Button text="Relatório"></Button>
          <Button text="Contato"></Button>
          <Button text="Contato"></Button>
          <Button text="Contato"></Button>
        </div>
      </div>
    </MenuArea>
  );
};

export default DashMenu;
