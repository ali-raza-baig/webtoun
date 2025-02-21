import React from "react";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

const PortfolioCard = () => {
    return (
        <div className="max-w-sm rounded-lg m-3 overflow-hidden shadow-lg ">
            <img
                src="/images/about.png"
                alt="Meeting"
                className="w-full h-52 object-cover"
            />
            <div className="p-4">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span className="text-blue-700 font-semibold">Tesla Inc.</span>
                    <span>Ad Campaign</span>
                </div>
                <h2 className="text-lg font-semibold text-gray-900 leading-tight">
                    Personalized Ad Campaign using Google AdWords
                </h2>
                <div className="flex items-center text-gray-500 text-sm mt-3">
                    <FaClock className="w-4 h-4 mr-1" />
                    <span className="mr-4">90 DAYS CAMPAIGN</span>
                    <FaMapMarkerAlt className="w-4 h-4 mr-1" />
                    <span>NEW YORK</span>
                </div>
                <button className="w-full mt-4 bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-md">
                    Read Case Study
                </button>
            </div>
        </div>
    );
};

export default PortfolioCard;
