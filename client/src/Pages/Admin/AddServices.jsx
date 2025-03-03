import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import ServiceForm from "../../Components/Forms/ServicesForm";
import axios from "axios";
import { Button, Modal, Space, Table } from 'antd';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const AddServices = () => {

    // Model Setup
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [services, setServices] = useState([])
    const [modalopen, setModalopen] = useState(false)
    const [editItem, setEditItem] = useState(false)

    const showLoading = () => {
        setOpen(true);
        setLoading(true);

        // Simple loading mock. You should add cleanup logic in real world.
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };
    const showLoading1 = () => {
        setModalopen(true)
        setLoading(true);

        // Simple loading mock. You should add cleanup logic in real world.
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    // table setup 
    const columns = [
        {
            title: 'Image',
            dataIndex: 'images',
            key: '_id',
            render: (images, record) => {
                return (
                    < img src={record.images} alt={record.name} height="60" width="60" />
                )
            }
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: "Actions",
            dataIndex: "_id",
            render: (id, record) => (
                <div>
                    <EditOutlined
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            setEditItem(record);
                            showLoading1();
                        }}
                    />
                    <DeleteOutlined
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            handleDelete(record._id);
                        }}
                    />
                </div>
            ),
        },
    ];


    // Api Setup  

    // Create services
    const handleSubmit = async (values) => {
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/services/addservice`, values);
            setOpen(false)
            getAllServices()
            console.log("Service Added:", data);
        } catch (error) {
            console.error("Error adding service:", error);
        }
    };
    // Get all services
    const getAllServices = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/services/getallservices`);
            setServices(data);
        } catch (error) {
            console.error("Error fetching services:", error);
        }
    };

    // Delete services
    const handleDelete = async (id) => {
        console.log(id)
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/services/deleteservice/${id}`);
            console.log("Service deleted:", id);
            getAllServices();
        } catch (error) {
            console.error("Error deleting service:", error);
        }
    };

    const handleUpdate = async (values) => {
        try {
            const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/services/updateservice/${editItem._id}`, values);
            console.log("Service updated:", data);
        } catch (error) {
            console.error("Error updating service:", error);
        }
        setModalopen(false);
        getAllServices();
    }

    useEffect(() => {
        getAllServices();

    }, [])


    return (
        <DashboardLayout>
            <div className="flex justify-evenly items-center">
                <h1 className="text-2xl font-bold">Add Service</h1>
                <Button type="primary" onClick={showLoading}>
                    Add services
                </Button>
                <Modal
                    title={<p>Add services</p>}
                    footer={null}
                    loading={loading}
                    open={open}
                    onCancel={() => setOpen(false)}
                >
                    <ServiceForm onSubmit={handleSubmit} submitText="Add Service" />
                </Modal>
            </div>

            <div>
                <h1 className="text-2xl font-bold">Services</h1>
                <Table columns={columns} dataSource={services} />
            </div>

            <Modal
                title={<p>Update services</p>}
                footer={null}
                loading={loading}
                open={modalopen}
                onCancel={() => setModalopen(false)}
            >
                <ServiceForm onSubmit={handleUpdate} initialValues={editItem} submitText="Update Service" />
            </Modal>

        </DashboardLayout>


    );
};

export default AddServices;