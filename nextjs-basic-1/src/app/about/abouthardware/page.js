"use client";
import { Button, Card } from "antd";
import { Typography } from "antd";
import Link from "next/link";

const { Title } = Typography;

const Page = () => {
  return (
    <>
      <Card style={{ minWidth: 300, margin: "1rem" }}>
        <Title level={2}>Hardware About Page</Title>
        <Button>
          <Link href="/about">Back</Link>
        </Button>
      </Card>
    </>
  );
};

export default Page;
