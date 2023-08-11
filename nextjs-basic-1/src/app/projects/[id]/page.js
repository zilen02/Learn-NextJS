"use client";
import { Button, Card } from "antd";
import { Typography } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const { Title } = Typography;

const Page = () => {
  const pathname = usePathname();
  const paths = pathname.split("/");
  const [project, setProject] = useState();
  useEffect(() => {
    let dataFetch = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${paths[2]}`
      );
      const data = await res.json();
      setProject(data);
    };
    dataFetch();
    return () => {};
  }, []);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Card style={{ minWidth: 300, width: 500, margin: "1rem" }}>
        <Title level={2}>{project.title}</Title>
        <Button>
          <Link href="/projects">Back</Link>
        </Button>
      </Card>
    </>
  );
};

export default Page;
