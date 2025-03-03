import React, { useEffect, useState } from 'react';
import UserDashboard from '../../Components/Layout/UserDashboard';
import axios from 'axios';
import { message } from 'antd';

const AllPlans = () => {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        const fetchAllPlans = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/plans/getallplans`);
                setPlans(data.plan);
            } catch (error) {
                console.error("Error fetching plans:", error);
            }
        };
        fetchAllPlans();
    }, []);

    const handleBuyPlan = (planId) => {
        console.log("Buying plan with ID:", planId);
        const { data } = axios.post(`${import.meta.env.VITE_API_URL}/subscription/createSubscription`, { planId, endDate: 30 })
        message.success("Plan buy successfuly");
        console.log(data)
    };

    return (
        <UserDashboard>
            <h1 className="text-2xl font-bold mb-4">All Plans</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 bg-white">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border px-4 py-2">Service</th>
                            <th className="border px-4 py-2">Plan Name</th>
                            <th className="border px-4 py-2">Price</th>
                            <th className="border px-4 py-2">Duration</th>
                            <th className="border px-4 py-2">Features</th>
                            <th className="border px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plans.length > 0 ? plans.map((plan) => (
                            <tr key={plan._id} className="text-center">
                                <td className="border px-4 py-2">{plan.service?.name || "N/A"}</td>
                                <td className="border px-4 py-2">{plan.planName}</td>
                                <td className="border px-4 py-2">${plan.planPrice}</td>
                                <td className="border px-4 py-2">{plan.duration} days</td>
                                <td className="border px-4 py-2">
                                    <ul className="list-disc list-inside">
                                        {plan.planFeatures.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td className="border px-4 py-2">
                                    <button
                                        onClick={() => handleBuyPlan(plan._id)}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Buy Now
                                    </button>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="6" className="border px-4 py-2 text-center">No plans available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </UserDashboard>
    );
};

export default AllPlans;