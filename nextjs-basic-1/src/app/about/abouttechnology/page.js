"use client";
import { Card, Button } from "antd";
import { Typography } from "antd";
import Link from "next/link";

const { Title } = Typography;

const Page = () => {
  return (
    <>
      <Card style={{ minWidth: 300, margin: "1rem" }}>
        <Title level={2}>Technology About Page</Title>
        <Button>
          <Link href="/about">Back</Link>
        </Button>
      </Card>
    </>
  );
};

export default Page;
