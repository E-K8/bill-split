import React from "react";
import { Card } from "antd";
import "antd/dist/antd.css";

function BillBox({ data }) {
  console.log(data);
  return (
    <Card title="Card title">
      {data.map((bill) => (
        <div>
          <Card
            key={bill.rec_exp_id}
            type="inner"
            title={bill.rec_exp_name}
            extra={<a href="#">More</a>}
          >
            {bill.rec_exp_amount}
          </Card>
        </div>
      ))}
    </Card>
  );
}

export default BillBox;
