import React, { useEffect, useState } from "react";
import { Menu, Dropdown, Button, message } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

function SplitBillBox({ data }) {
  const [totalBills, setTotalBills] = useState(0);
  const [share, setShare] = useState(0);

  function handleMenuClick(e) {
    calculateShare(totalBills, Number(e.key));
    // message.info("Click on menu item.");
    console.log(e.key);
    console.log("click", e);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        3
      </Menu.Item>
      <Menu.Item key="4" icon={<UserOutlined />}>
        4
      </Menu.Item>
    </Menu>
  );

  // totalBills
  // plan:
  // make sure we are creating an array with just numbers
  // pull out all the values from "rec_exp_amount"
  // add all the numbers
  // use setTotalBills to do the sum

  // set share to be the result
  // Calculate share
  // divide totalBills by number from the dropdown menu

  function calculateTotalBill(data) {
    const bills = data
      .map((el) => {
        return el.rec_exp_amount;
      })
      .reduce((prev, curr) => Number(prev) + Number(curr), 0);

    setTotalBills(bills);
  }

  useEffect(() => {
    calculateTotalBill(data);
  }, []);

  function calculateShare(bills, peopleNumber) {
    const share = bills / peopleNumber;
    setShare(share);
  }

  return (
    <div>
      <h4>Total Bills: {totalBills}</h4>
      <Dropdown overlay={menu}>
        <Button>
          Split Between <DownOutlined />
        </Button>
      </Dropdown>
      <h2>Your Share: {share}</h2>
    </div>
  );
}

export default SplitBillBox;
