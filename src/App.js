import React, { useState } from 'react';
import './App.css';
import { Select , Space, Button, Checkbox, Form, Input, Spin } from 'antd';
function App() {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    // Bikin pemanggilan API
    setLoading(true);
    setTimeout(() => {
      form.resetFields();
      setLoading(false);
    }, 1000);
  };

  const clearForm = () => {
    form.setFieldsValue({
      myName: "",
      gender: "",
      graduated: "",
    });
  };

  return (
  <div className='App'>
  <Spin spinning={loading}>
    <Form onFinish={onFinish} form={form}>
      <Form.Item label="Name" name={"myName"}>
        <Input placeholder='Enter Name' />
      </Form.Item>
      <Form.Item label="Gender" name={"gender"}>
        <Select
          placeholder="Select Gender"
          options={[
            {
              label: "Male",
              value: "male",
            },
            {
              label: "Female",
              value: "female",
            },
          ]}
        ></Select>
      </Form.Item>
      <Form.Item 
      label="Graduated?" 
      name={"graduated"}
      valuePropName="checked"
      >
        <Checkbox/>
      </Form.Item>
      <Space direction="horizontal" size={12}>
      <Button danger onClick={clearForm}>
        Clear Fields
      </Button>
      <Button htmlType='reset' type="ghost">
        Reset
      </Button>
      <Button htmlType="submit" type="primary">
      Submit
      </Button>
      </Space>
    </Form>
    </Spin>
  </div>

)
};
export default App;