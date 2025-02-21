import React, { useState } from "react";

const ContactSection = () => {
    // State to manage form inputs
    const [formData, setFormData] = useState({
        email: "",
        fullName: "",
        subject: "",
        message: ""
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can replace this with an API call or any other logic
        alert(`Form Submitted!\nEmail: ${formData.email}\nName: ${formData.fullName}\nSubject: ${formData.subject}\nMessage: ${formData.message}`);
    };

    return (
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-8 lg:px-20 py-16 bg-white">
            {/* Left Side */}
            <div className="lg:w-1/2 w-full">
                <h3 className="text-blue-700 font-semibold">Contact Us</h3>
                <h1 className="text-4xl font-bold mt-2">
                    Feel free to <span className="text-transparent bg-clip-text bg-blue-700">get in touch</span> with us.
                </h1>
                <p className="text-gray-500 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                {/* Form */}
                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email Address"
                        className="w-full lg:w-[80%] p-3 border-b-2 border-gray-200 focus:border-b-blue-700 outline-none focus:border-b-2"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        className="w-full lg:w-[80%] p-3 border-b-2 border-gray-200 focus:border-b-blue-700 outline-none focus:border-b-2"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="w-full lg:w-[80%] p-3 border-b-2 border-gray-200 focus:border-b-blue-700 outline-none focus:border-b-2"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message Here"
                        className="w-full lg:w-[80%] p-3 border-b-2 border-gray-200 focus:border-b-blue-700 outline-none focus:border-b-2"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full lg:w-[80%] bg-blue-700 text-white font-bold py-3 rounded-md hover:bg-blue-800 transition"
                    >
                        Send
                    </button>
                </form>
            </div>

            {/* Right Side */}
            <div className="lg:w-1/2 w-full mt-10 lg:mt-0 flex justify-center">
                <img src="/images/email-illustration.svg" alt="Contact Illustration" className="w-full" />
            </div>
        </div>
    );
};

export default ContactSection;