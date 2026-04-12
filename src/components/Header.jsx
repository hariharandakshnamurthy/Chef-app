import React from "react";
import chef from "../assets/chefS1.png";
import { Card, Image, Space, Typography } from "antd";

function Header() {
  const { Title } = Typography;
  return (
    <Card className={"header-container"}>
      <Space>
        <Image
          src={chef}
          preview={false}
          className={"header-container logo"}
          alt={"chef-logo"}
        />
        <Title level={1}>Chef App</Title>
      </Space>
    </Card>
  );
}

export default Header;
