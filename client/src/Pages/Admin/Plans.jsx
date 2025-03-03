import { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input, InputNumber, Select, message } from "antd";
import axios from "axios";
import DashboardLayout from '../../Components/Layout/DashboardLayout'

const API_URL = import.meta.env.VITE_API_URL; // Get API base URL from environment variables

const Plans = () => {
    const [plans, setPlans] = useState([]);
    const [services, setServices] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [form] = Form.useForm();
    const [editForm] = Form.useForm();
    const [editingPlan, setEditingPlan] = useState(null);

    // Fetch all plans
    const fetchPlans = async () => {
        try {
            const { data } = await axios.get(`${API_URL}/plans/getallplans`);
            console.log(data.plan)
            setPlans(data.plan);
        } catch (error) {
            console.error("Error fetching plans:", error);
            message.error("Failed to fetch plans.");
        }
    };

    // Fetch all services for the dropdown
    const fetchServices = async () => {
        try {
            const { data } = await axios.get(`${API_URL}/services/getallservices`);
            setServices(data);
        } catch (error) {
            console.error("Error fetching services:", error);
            message.error("Failed to fetch services.");
        }
    };

    useEffect(() => {
        fetchPlans();
        fetchServices();
    }, []);

    // Handle adding a new plan
    const handleAddPlan = async (values) => {
        try {
            await axios.post(`${API_URL}/plans/createplan`, {
                service: values.service, // Selected service ID
                planName: values.planName,
                planPrice: values.planPrice,
                planFeatures: values.planFeatures, // Convert to array
                duration: values.duration
            });

            message.success("Plan added successfully!");
            setIsModalOpen(false);
            form.resetFields();
            fetchPlans(); // Refresh list
        } catch (error) {
            console.error("Error adding plan:", error);
            message.error("Failed to add plan.");
        }
    };

    // Handle updating a plan
    const handleUpdatePlan = async (values) => {
        try {
            await axios.put(`${API_URL}/plans/updateplan/${editingPlan._id}`, {
                service: values.service, // Selected service ID
                planName: values.planName,
                planPrice: values.planPrice,
                planFeatures: values.planFeatures, // Convert to array
                duration: values.duration
            });

            message.success("Plan updated successfully!");
            setIsEditModalOpen(false);
            editForm.resetFields();
            fetchPlans(); // Refresh list
        } catch (error) {
            console.error("Error updating plan:", error);
            message.error("Failed to update plan.");
        }
    };

    // Open edit modal with pre-filled data
    const openEditModal = (plan) => {
        setEditingPlan(plan);
        editForm.setFieldsValue({
            service: plan.service?._id, // Set selected service
            planName: plan.planName,
            planPrice: plan.planPrice,
            planFeatures: plan.planFeatures.join(", "), // Convert array to comma-separated string
        });
        setIsEditModalOpen(true);
    };

    // Table columns
    const columns = [
        {
            title: "Service", dataIndex: ["service",], key: "service",
            render: async (service) => {
                try {
                    const { data } = await axios.get(`${API_URL}/services/servicebyid/${service}`)
                    console.log(data.name)
                } catch (error) {
                    console.log(error)
                }
            } // Display service name
        }, // Display service name
        { title: "Plan Name", dataIndex: "planName", key: "planName" },
        { title: "Price ($)", dataIndex: "planPrice", key: "planPrice" },
        {
            title: "Features",
            dataIndex: "planFeatures",
            key: "planFeatures",
            render: (features) => features.join(", ")
        },
        {
            title: "Actions",
            key: "actions",
            render: (_, record) => (
                <Button type="link" onClick={() => openEditModal(record)}>
                    Edit
                </Button>
            ),
        },
    ];

    return (
        <DashboardLayout>
            <div className="p-8 bg-gray-100 min-h-screen">
                <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Plans</h2>

                    {/* Add Plan Button */}
                    <Button type="primary" onClick={() => setIsModalOpen(true)} className="mb-4">
                        Add Plan
                    </Button>

                    {/* Table */}
                    <Table columns={columns} dataSource={plans} rowKey="_id" />

                    {/* Add Plan Modal */}
                    <Modal
                        title="Add New Plan"
                        open={isModalOpen}
                        onCancel={() => setIsModalOpen(false)}
                        footer={null}
                    >
                        <Form form={form} layout="vertical" onFinish={handleAddPlan}>
                            <Form.Item label="Service" name="service" rules={[{ required: true }]}>
                                <Select placeholder="Select a service">
                                    {services?.map(service => (
                                        <Select.Option key={service._id} value={service._id}>
                                            {service.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item label="Plan Name" name="planName" rules={[{ required: true }]}>
                                <Input placeholder="Enter plan name" />
                            </Form.Item>

                            <Form.Item label="Price ($)" name="planPrice" rules={[{ required: true }]}>
                                <InputNumber className="w-full" min={0} />
                            </Form.Item>

                            <Form.Item label="Pan Duration in Days" name="duration" rules={[{ required: true }]}>
                                <InputNumber className="w-full" min={0} />
                            </Form.Item>

                            <Form.Item label="Features (comma separated)" name="planFeatures" rules={[{ required: true }]}>
                                <Input placeholder="Feature1, Feature2, Feature3" />
                            </Form.Item>

                            <Button type="primary" htmlType="submit" className="w-full">
                                Add Plan
                            </Button>
                        </Form>
                    </Modal>

                    {/* Edit Plan Modal */}
                    <Modal
                        title="Edit Plan"
                        open={isEditModalOpen}
                        onCancel={() => setIsEditModalOpen(false)}
                        footer={null}
                    >
                        <Form form={editForm} layout="vertical" onFinish={handleUpdatePlan}>
                            <Form.Item label="Service" name="service" rules={[{ required: true }]}>
                                <Select placeholder="Select a service">
                                    {services?.map(service => (
                                        <Select.Option key={service._id} value={service._id}>
                                            {service.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item label="Plan Name" name="planName" rules={[{ required: true }]}>
                                <Input placeholder="Enter plan name" />
                            </Form.Item>

                            <Form.Item label="Price ($)" name="planPrice" rules={[{ required: true }]}>
                                <InputNumber className="w-full" min={0} />
                            </Form.Item>

                            <Form.Item label="Features (comma separated)" name="planFeatures" rules={[{ required: true }]}>
                                <Input placeholder="Feature1, Feature2, Feature3" />
                            </Form.Item>

                            <Button type="primary" htmlType="submit" className="w-full">
                                Update Plan
                            </Button>
                        </Form>
                    </Modal>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Plans;
