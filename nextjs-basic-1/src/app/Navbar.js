"use client";
import React, { useState } from "react";
import {
  ProfileOutlined,
  HomeOutlined,
  ContactsOutlined,
  ProjectOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [current, setCurrent] = useState(pathname);
  const router = useRouter();
  const onClick = (e) => {
    setCurrent(e.key);
  };
  const items = [
    {
      label: "Home",
      key: "/",
      icon: <HomeOutlined />,
      onClick: () => {
        router.push("/");
      },
    },
    {
      label: "Projects",
      key: "/projects",
      icon: <ProjectOutlined />,
      onClick: () => {
        router.push("/projects");
      },
    },
    {
      label: "About",
      key: "/about",
      icon: <ProfileOutlined />,
      onClick: () => {
        router.push("/about");
      },
    },
    {
      label: "Contact Us",
      key: "/contact",
      icon: <ContactsOutlined />,
      onClick: () => {
        router.push("/contact");
      },
    },
  ];
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Navbar;
