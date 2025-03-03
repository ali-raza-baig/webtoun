import React from "react";
import { Button, Form, Input, Space } from "antd";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const ServiceForm = ({ initialValues, onSubmit, submitText = "Submit" }) => {
    const [form] = Form.useForm();

    return (
        <Form
            {...layout}
            form={form}
            name="service-form"
            initialValues={initialValues}
            onFinish={onSubmit}
            style={{ maxWidth: 600 }}
        >
            <Form.Item
                name="name"
                label="Service Name"
                rules={[{ required: true, message: "Please enter service name!" }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="images"
                label="Service Image"
                rules={[{ required: true, message: "Please enter image URL!" }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="description"
                label="Description"
                rules={[{ required: true, message: "Please enter description!" }]}
            >
                <Input.TextArea />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Space>
                    <Button type="primary" htmlType="submit">
                        {submitText}
                    </Button>
                    <Button htmlType="button" onClick={() => form.resetFields()}>
                        Reset
                    </Button>
                </Space>
            </Form.Item>
        </Form>
    );
};

export default ServiceForm;
