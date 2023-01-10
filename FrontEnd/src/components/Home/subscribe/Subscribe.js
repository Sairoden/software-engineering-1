import { MailOutlined } from "@material-ui/icons";
import { Form, Input, Button } from "antd";
import React, { useState } from "react";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 24 },
};

const validateMessages = {
  types: {
    email: "Please enter a valid email.",
  },
};
const initialState = false;
const Subscribe = () => {
  const [subscribed, setSubscribed] = useState(initialState);

  const onChange = () => {
    setSubscribed(!subscribed);
  };
  return (
    <div className="subscribe">
      <div className="heading">GET FEATURED</div>
      <div className="sub-heading text-center">
        <h3>
          Send us your photos <strong>☜(ﾟヮﾟ☜)</strong>
        </h3>
      </div>
      {subscribed ? (
        <div className="subscribed">
          <MailOutlined /> Thanks for subscribing
        </div>
      ) : (
        <Form
          {...layout}
          onFinish={onChange}
          validateMessages={validateMessages}
        >
          <Form.Item
            className="subscribeform"
            name="email"
            rules={[{ type: "email" }]}
          >
            <Input placeholder="your email" />
          </Form.Item>
          <Button type="primary" className="btn">
            <MailOutlined />
          </Button>
        </Form>
      )}
      <br />
    </div>
  );
};

export default Subscribe;
