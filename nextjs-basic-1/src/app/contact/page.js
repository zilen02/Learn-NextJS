"use client";
import React from "react";
import { Typography, Form, Input, Button, Card, Divider } from "antd";

const { Title } = Typography;

function Page() {
  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  return (
    <>
      <Card style={{ minWidth: 300, margin: "1rem" }}>
        <Title>Contact Us</Title>
        <Divider />
        <Form onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
}

export default Page;
