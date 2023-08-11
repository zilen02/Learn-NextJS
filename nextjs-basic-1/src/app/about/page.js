"use client";
import { Card, Typography, Divider, Button } from "antd";
import Link from "next/link";

const { Title, Paragraph } = Typography;

const Page = () => {
  return (
    <>
      <Card style={{ minWidth: 300, margin: "1rem" }}>
        <Title level={2}>About Page</Title>
        <Divider />
        <Paragraph>
          Welcome to our company! We are dedicated to providing top-notch
          products and services to our customers.
        </Paragraph>
        <Paragraph>
          Our mission is to deliver excellence and innovation in every aspect of
          our business, ensuring customer satisfaction and long-lasting
          relationships.
        </Paragraph>
        <Button style={{ marginRight: "1rem" }}>
          <Link href="/about/abouthardware">About Hardwares</Link>
        </Button>
        <Button style={{ marginRight: "1rem" }}>
          <Link href="/about/abouttechnology">About Technologies</Link>
        </Button>
      </Card>
    </>
  );
};

export default Page;
