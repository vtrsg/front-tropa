import React, { useState } from "react";
import { PageArea } from "./styled";
import logo from "../../pngs/logo.png";
import computer from "../../pngs/computer.png";

import { PageContainer } from "../../components/layout/PageContainer";

const SignIn = () => {
  return (
    <PageContainer>
      <PageArea>
        <div className="menu">
          <img src={logo} alt="logo" />
        </div>
        <div className="image">
          <img src={computer} alt="computer" />
        </div>
      </PageArea>
    </PageContainer>
  );
};

export default SignIn;
