import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaDribbble } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <section className="bg-black">
            <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                    {[
                        "About",
                        "Blog",
                        "Team",
                        "Pricing",
                        "Contact",
                        "Terms",
                    ].map((item) => (
                        <div key={item} className="px-5 py-2">
                            <a
                                href="#"
                                className="text-base leading-6 text-white hover:text-gray-200"
                            >
                                {item}
                            </a>
                        </div>
                    ))}
                </nav>
                <div className="flex justify-center mt-8 space-x-6">
                    {[
                        { icon: FaFacebookF, label: "Facebook" },
                        { icon: FaInstagram, label: "Instagram" },
                        { icon: FaTwitter, label: "Twitter" },
                        { icon: FaGithub, label: "GitHub" },
                        { icon: FaDribbble, label: "Dribbble" },
                    ].map(({ icon: Icon, label }) => (
                        <a key={label} href="#" className="text-white hover:text-gray-200">
                            <span className="sr-only">{label}</span>
                            <Icon className="w-6 h-6" />
                        </a>
                    ))}
                </div>
                <div className="flex items-center justify-between flex-wrap ">
                    <p className="mt-8 text-base leading-6 text-center text-gray-100">
                        © {new Date().getFullYear()} Webtoun. All rights reserved.
                    </p>
                    <p className="mt-8 text-base leading-6 text-center text-gray-100">
                        Created & Maintain by <Link to={'https://baigdevlab.vercel.app'} className="text-blue-700">BaigDevLab</Link> .
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Footer;
