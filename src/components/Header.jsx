import React from "react";
import chef from "../assets/chefS1.png";
import { Typography } from "antd";

function Header() {
  const { Title } = Typography;
  return (
    <header className="header-container">
      <img
        src={chef}
        className="logo"
        alt="chef-logo"
      />
      <Title level={1} style={{ margin: 0, fontSize: '1.8rem' }}>AI Chef App</Title>
    </header>
  );
}

export default Header;
