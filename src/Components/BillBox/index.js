import React from "react";
import { Card } from "antd";
import "antd/dist/antd.css";

function BillBox({ data }) {
  console.log(data);
  return (
    <Card title="Card title">
      <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
        Inner Card content
      </Card>
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title="Inner Card title"
        extra={<a href="#">More</a>}
      >
        Inner Card content
      </Card>
    </Card>
  );
}

export default BillBox;
