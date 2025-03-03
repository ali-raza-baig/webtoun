import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Modal, Form, Input, Select, message } from "antd";
import DashboardLayout from "../../Components/Layout/DashboardLayout";

const { Option } = Select;
const API_URL = import.meta.env.VITE_API_URL + "/subscription";

const SubscriptionPage = () => {
    const [subscriptions, setSubscriptions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    useEffect(() => {
        fetchSubscriptions();
    }, []);

    const fetchSubscriptions = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(`${API_URL}/getallSubscriptions`);
            setSubscriptions(data.subscriptions);
        } catch (error) {
            message.error("Failed to fetch subscriptions");
        }
        setLoading(false);
    };

    const handleCreate = async (values) => {
        try {
            await axios.post(`${API_URL}/createSubscription`, values);
            message.success("Subscription created successfully");
            fetchSubscriptions();
            setIsModalOpen(false);
            form.resetFields();
        } catch (error) {
            message.error("Failed to create subscription");
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.get(`${API_URL}/deleteSubscriptionController/${id}`);
            message.success("Subscription deleted successfully");
            fetchSubscriptions();
        } catch (error) {
            message.error("Failed to delete subscription");
        }
    };

    const handleUpdateStatus = async (id, status) => {
        try {
            await axios.put(`${API_URL}/updateSubscriptionStatus/${id}`, { status });
            console.log(status)
            message.success("Subscription status updated");
            fetchSubscriptions();
        } catch (error) {
            message.error("Failed to update status");
        }
    };

    const columns = [
        { title: "User ID", dataIndex: "userId", key: "userId" },
        { title: "Plan ID", dataIndex: "planId", key: "planId" },
        { title: "End Date", dataIndex: "endDate", key: "endDate" },
        {
            title: "Actions",
            key: "actions",
            render: (_, record) => (
                <div className="flex space-x-2">
                    <Select defaultValue={record.status} onChange={(status) => handleUpdateStatus(record._id, status)}>
                        {['active', 'inactive', 'deleted', 'completed'].map((a) => {
                            return <Option key={a} value={a}>{a}</Option>
                        })}
                    </Select>
                    <Button type="primary" danger onClick={() => handleDelete(record._id)}>Delete</Button>
                </div>
            )
        }
    ];

    return (
        <DashboardLayout>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Subscription Management</h1>
                <Table columns={columns} dataSource={subscriptions} loading={loading} rowKey="_id" className="mt-4" />

                {/* Modal for Creating Subscription */}
                <Modal title="Create Subscription" open={isModalOpen} onCancel={() => setIsModalOpen(false)} onOk={() => form.submit()}>
                    <Form form={form} layout="vertical" onFinish={handleCreate}>
                        <Form.Item name="userId" label="User ID" rules={[{ required: true }]}> <Input /> </Form.Item>
                        <Form.Item name="planId" label="Plan ID" rules={[{ required: true }]}> <Input /> </Form.Item>
                        <Form.Item name="endDate" label="Duration (Days)" rules={[{ required: true }]}> <Input type="number" /> </Form.Item>
                    </Form>
                </Modal>
            </div>
        </DashboardLayout>
    );
};

export default SubscriptionPage;
