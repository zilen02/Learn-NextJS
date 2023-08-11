"use client";
import { Button, Card, Col, Row } from "antd";
import { Typography } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";

const { Title } = Typography;

const Page = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    let dataFetch = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setProjects(data);
    };
    dataFetch();
    return () => {};
  }, []);

  if (!projects || !projects.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Card style={{ minWidth: 300, margin: "1rem" }}>
        <Title level={2}>Projects Page</Title>
        <ul>
          <Row gutter={[16, 16]}>
            {projects &&
              projects.slice(0, 8).map((project) => (
                <Col xs={24} md={6} key={project.id}>
                  <Card>
                    <Title level={4}>{project.title}</Title>
                    <Button>
                      <Link href={`/projects/${project.id}`}>More</Link>
                    </Button>
                  </Card>
                </Col>
              ))}
          </Row>
        </ul>
      </Card>
    </>
  );
};

export default Page;
