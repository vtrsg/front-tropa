import React from "react";

//import { DashArea } from "./styled";
import { DashContainer } from "../../components/layout/DashContainer";
import DashMenu from "../../components/partials/DashMenu";

const Dash = () => {
  return (
    <DashContainer>
      <DashMenu />
    </DashContainer>
  );
};

export default Dash;
