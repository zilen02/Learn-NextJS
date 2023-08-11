"use client";
import { Card } from "antd";
import { Typography } from "antd";

const { Title } = Typography;

const Page = () => {
  return (
    <>
      <Card style={{ width: 300, margin: "1rem" }}>
        <Title level={2}>Home Page</Title>
      </Card>
    </>
  );
};

export default Page;
