import React, { useEffect, useState } from 'react';
import UserDashboard from '../../Components/Layout/UserDashboard';
import axios from 'axios';
import { Table, Select, Spin, Alert } from 'antd';

const { Option } = Select;

const UserPlans = () => {
    const [plans, setPlans] = useState([]);
    const [filteredPlans, setFilteredPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [statusFilter, setStatusFilter] = useState('active');

    const fetchUserPlans = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/subscription/getSubscriptionByUserId`);
            if (data) {
                setPlans(data.subscriptions);
                console.log(data.subscriptions)
            }
            setLoading(false);
        } catch (error) {
            setError('Failed to fetch user plans. Please try again.');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserPlans();
    }, []);

    // Filter plans when `plans` or `statusFilter` changes
    useEffect(() => {
        setFilteredPlans(plans.filter(plan => plan.status === statusFilter));
    }, [plans, statusFilter]);

    const handleFilterChange = (value) => {
        setStatusFilter(value);
    };

    const columns = [
        { title: 'Plan', dataIndex: ['planId', 'name'], key: 'planId', render: (text) => text || 'N/A' },
        { title: 'Status', dataIndex: 'status', key: 'status', render: (status) => <span className={`capitalize ${status === 'active' ? 'text-green-600' : 'text-gray-500'}`}>{status}</span> },
        { title: 'Start Date', dataIndex: 'startDate', key: 'startDate', render: (date) => new Date(date).toLocaleDateString() },
        { title: 'End Date', dataIndex: 'endDate', key: 'endDate', render: (date) => new Date(date).toLocaleDateString() },
    ];

    return (
        <UserDashboard>
            <h1 className="text-xl font-semibold mb-4">User Plans</h1>
            <p className="mb-6">View and manage your active and past subscriptions.</p>

            <div className="mb-4">
                <label className="mr-2">Filter by Status:</label>
                <Select value={statusFilter} onChange={handleFilterChange} className="w-40">
                    {['active', 'inactive', 'deleted', 'completed'].map((status) => (
                        <Option key={status} value={status}>{status}</Option>
                    ))}
                </Select>
            </div>

            {loading ? (
                <Spin size="large" className="block text-center mt-4" />
            ) : error ? (
                <Alert message={error} type="error" showIcon className="mb-4" />
            ) : (
                <Table dataSource={filteredPlans} columns={columns} rowKey="_id" pagination={{ pageSize: 5 }} bordered />
            )}
        </UserDashboard>
    );
};

export default UserPlans;
