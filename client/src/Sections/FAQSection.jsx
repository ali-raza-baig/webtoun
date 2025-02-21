import { useState } from "react";

export default function FAQSection() {
    const faqs = [
        {
            question: "Is lunch provided free of cost?",
            answer: "Yes, complimentary lunch is provided for all our guests.",
        },
        {
            question: "Do you have 2 Bedroom suites?",
            answer: "Yes, we offer luxurious 2-bedroom suites with a great view.",
        },
        {
            question: "Are Wi-Fi costs included in the price?",
            answer: "Yes, high-speed Wi-Fi is included in all room charges.",
        },
        {
            question: "Where can I reach you for support?",
            answer: "You can contact us via email at support@hotel.com or call us.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="flex flex-col md:flex-row items-center px-6 mt-8 md:px-24 py-16">
            {/* Illustration */}
            <div className="md:w-1/2 flex justify-center">
                <img src="/images/customer-support-illustration.svg" alt="" />
            </div>

            {/* FAQ Content */}
            <div className="md:w-1/2 text-left mt-8 md:mt-0 md:ml-10">
                <p className="text-blue-700 font-semibold">FAQs</p>
                <h2 className="text-4xl font-bold text-gray-900">
                    Do you have <span className="text-blue-700">Questions?</span>
                </h2>
                <p className="text-gray-500 mt-3">
                    Here are some frequently asked questions about our hotels from our
                    loving customers. Should you have any other questions, feel free to
                    reach out via the contact form below.
                </p>
                <div className="mt-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b py-4">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center text-left"
                            >
                                <p className="font-semibold text-gray-900">{faq.question}</p>
                                <span className="text-purple-600 text-xl">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </button>
                            {openIndex === index && (
                                <p className="mt-2 text-gray-600">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
