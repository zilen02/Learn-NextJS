"use client";
import { Card, Typography } from "antd";

const { Title } = Typography;
const { Meta } = Card;

const Products = ({ products }) => {
  return (
    <>
      <div style={{ margin: "3rem" }}>
        <Title>Our Products</Title>
        {products.map((product) => {
          return (
            <Card
              hoverable
              key={product.id}
              style={{ width: 300 }}
              cover={<img alt={product.name} src={product.image} />}
            >
              <Meta title={product.name} />
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Products;
